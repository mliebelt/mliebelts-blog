---
title: Migrating from Sqlite3 to PostgreSQL for Rails application
tags: rails sqlite3 postgresql
category: tools
date: 2018-12-22
---

# Current situation

I have developed many years ago two Rails applications and have used them many years. I started with nearly no know-how, so I took all defaults. I was glad at that time that I did not have to manage a full blown database to run my small Rails apps.

Time has changed, and nowadays, I have docker locally running under Windows 10, with only 2 minutes work to have a current PostgreSQL server up and running. So I decided to give it a try again, and to see if it would be possible to run the applications inside a docker container, connecting to PostgreSQL. This blog post is mostly about the migration task. I will later follow up with more stories about containerizing it, and (at the end hopefully) run it on the internet to have it available all the time.

So I took the following steps:

1. Checking that I can have a PostgreSQL database up and running, and have a new example application connected to it.
1. Creating all necessary things to have the relevant databases created.
1. Migrating all data to the database (the production one).
1. Running the adapted application against the new database.

## Setup PostgreSQL and Example Application

### Setup PostgreSQL

... as Docker container: `docker run --name rails_db -p 5439:5432 -e POSTGRES_DB=rails_db -d postgres:9.6.8-alpine`

What does this do?

* Start a new docker container, that uses the predefined docker image named `postgres:9.6.8-alpine`. (The reason I use that version is that we use exactly that version at work, so feel free to use any other current version)
* Give that container the name `rails_db`, so it is easier later to start that container by give the name only.
  * Stop: `docker stop rails_db`
  * Start: `docker start rails_db`
* Define the relevant resources:
  * the databases (I am using only 2 of the 3 in Rails)
  * the users

I used pgAdmin to do it, your steps may be different here.

#### Current state

You now have a new database server named rails_db, but without any database, users, ...

#### Creating System Users

To use the database, you need system users to do that.

1. Go to the database server.
1. Go to Login/Group Roles and select `Create Login/Group Role...`
1. Enter the name of the user (General), the password (Definition), the privileges (Login, Create Database)

#### Creating Database

Create a database by doing the following steps.

1. Go to the database server.
1. Go to Databases > Create > Database...
1. Enter as properties: name, the owner

You should now be able to login as that user, go to the database, and create something.

### Create Example Application

I found the [following recipe](https://www.digitalocean.com/community/tutorials/how-to-setup-ruby-on-rails-with-postgres) to setup a dockerized Rails app. Here are the relevant steps to just create the application locally.

1. `rails new myapp --database=postgresql` Generates a new app with postgresql set as database
1. Go to `database.yml` and ensure that database, username and password are set.
1. Run `rake db:setup` and see if that runs through. If yes, your database is created, but empty.
1. Run `rails g scaffold Post title:string body:text` and again `rake db:setup`.
1. Run your application with `rails server`, and visit it under [localhost:3000/posts](localhost:3000/posts).
1. Create a new blog post.
1. Visit your database (with pgAdmin) and see that the database is created, and one record exists in the table `posts`.

So you have seen that the database is working, and a new Rails app is able to use that database.

## Setup the real database then

Repeat the steps to create the real database for your application. Necessary are:

* Create the database itself.
* Create a user for that database.
* Make that user the owner of the database.

## Migrating the data

Now comes the hard part. I have read a little bit about a tool named pgloader which sounded reasonable, and I have seen that this tool is available as docker container. So I took that road then. Here are the steps that were necessary for me:

1. Enable in docker that the volume c: is mapped.
1. Start in the directory of your application the command: `docker run --rm -i -t -v c:/Users/mliebelt/dev/priv:/usr/src/apps dimitri/pgloader bash`
   * Remove the container after it is finished.
   * Map a volume of the current directory to the directory inside the container named `/usr/src/apps`.
   * Go inside the container and open a bash there.
1. Go to the directory where your sqlite3 db file is located.
1. Find out the IP address of your running postgresql database server. 
1. Enter there the command: `pgloader prod.db postgresql://<username>:<pwd>@<ip-address>:5439/<database>`
    * `<username>` is the system user that has access to the database
    * `<pwd>` is the password of that system user
    * `<ip-address>` Local IP address of my computer, in Windows found with: `ipconfig`
    * 5439: The port I have mapped the local database port from the docker container running
    * `<database>` is the name of the database

When executin the migration, I got the following output.

````bash
WARNING:
Couldn't re-execute SBCL with proper personality flags (/proc isn't mounted? setuid?)
Trying to continue anyway.
2018-12-22T14:29:47.069000Z LOG Migrating from #<SQLITE-CONNECTION sqlite:///usr/src/apps/minds/db/prod.db {1005F72BE3}>
2018-12-22T14:29:47.071000Z LOG Migrating into #<PGSQL-CONNECTION pgsql://<username>@<ip-address>:5439/<database> {10061BB263}>
2018-12-22T14:29:47.447000Z LOG report summary reset
             table name     errors       rows      bytes      total time
-----------------------  ---------  ---------  ---------  --------------
                  fetch          0          0                     0.000s
        fetch meta data          0         21                     0.033s
         Create Schemas          0          0                     0.000s
       Create SQL Types          0          0                     0.005s
          Create tables          0         20                     0.056s
         Set Table OIDs          0         10                     0.006s
-----------------------  ---------  ---------  ---------  --------------
                notices          0        500   205.5 kB          0.040s
                 people          0        925   162.9 kB          0.025s
      schema_migrations          0         22     0.2 kB          0.024s
                  pages          0         58    49.6 kB          0.039s
              book_rows          0        129     8.6 kB          0.065s
               sessions          0        170    58.6 kB          0.093s
      people_ressources          0       1129    59.2 kB          0.025s
              citations          0          5     2.4 kB          0.009s
          books_authors          0          0                     0.024s
             ressources          0        982   363.6 kB          0.108s
-----------------------  ---------  ---------  ---------  --------------
COPY Threads Completion          0          4                     0.159s
         Create Indexes          0         11                     0.069s
 Index Build Completion          0         11                     0.012s
        Reset Sequences          0          7                     0.013s
           Primary Keys          0          8                     0.010s
    Create Foreign Keys          0          0                     0.000s
        Create Triggers          0          0                     0.000s
       Install Comments          0          0                     0.000s
-----------------------  ---------  ---------  ---------  --------------
      Total import time          ?       3920   910.4 kB          0.263s
````

I was really astonished how fast the migration ran. And I could then check the result by going directly to the database and see that it is working.

## Switch to the new database

Everything is now ripe to be run. Only the file `database.yml` of the application has to be adapted. I did the following changes.

````yml
default: &default
  adapter: postgresql
  encoding: unicode
  pool: 5
  timeout: 5000

development:
  <<: *default
  database: <database>
  username: <username>
  password: <pwd>
  port: 5439

# Not touched
test:
  adapter: sqlite3
  pool: 5
  timeout: 5000
  database: db/test.sqlite3

production:
  <<: *default
  database: <database>
  username: <username>
  password: <pwd>
  port: 5439
````

Caveat: I had to change the port of the database, because the default one (5432) was already taken. The application works like a charm, now I have to check how to drive it in the cloud (as docker container). But that will be another story ...

# References

* https://forums.docker.com/t/volume-mounts-in-windows-does-not-work/10693/5 How to ensure that Windows volumes can be mapped.
* https://www.digitalocean.com/community/tutorials/how-to-setup-ruby-on-rails-with-postgres Similar tutorial to mine, with some missing parts in it.
* https://pgloader.readthedocs.io/en/latest/pgloader.html#target-connection-string Details about the connection string to be used in the migration