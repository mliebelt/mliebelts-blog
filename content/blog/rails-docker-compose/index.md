---
title: Migrating from Windows based development to Docker based development
tags: ["rails",  "docker"]
category: tools
date: 2018-12-28
published: true
path: "/rails-docker-compose"
posttype: "blog"
---

# Current situation

I have developed over the last 12 years or so all the time on Windows (starting with XP, then 7, and lately with Windows 10). And I was all the time jalous about all the nice guys that were able to develop with Linux, Mac, ... 

Lately I changed jobs and I am working now with Docker, Kubernetes, and a lot of nice stuff. So I wanted to give my Rails development another try. I had the following in plan:

* Switch from Sqlite3 to PostgreSQL (see **Link**)
* Switch to a deployment that is Docker based

So the natural selection of tools here was to use docker-compose. The following is based on some of the experiences I made in using the book "Docker for Rails Developers".

## Dockerize the Rails application

That was really nicely described, I just show the result I got from there.

````bash
FROM ruby:2.5
LABEL maintainer="markusliebelt@gmail.com"

RUN apt-get update -yqq && apt-get install -yqq --no-install-recommends nodejs

COPY Gemfile* /usr/src/app/
WORKDIR /usr/src/app
RUN bundle install

COPY . /usr/src/app/

CMD ["bin/rails", "s", "-e", "production", "-b", "0.0.0.0"]
````

What are the tricks here:

* The apt-get commands ensure that the base image is up-to-date all the time.
* Having first the Gemfiles copied, I ensure that the expensive part (getting again all gems updated) is only done when the gems change, but not on any other change.
* `-b 0.0.0.0` binds the started Rails server to all IP addresses he may have, not only localhost. So the running application is reachable from outside the container (which is of course necessary).

So by using `docker build -t railsapp . ` (this is the root directory of your application, and the Dockerfile is created there) docker will create a new image with the name `railsapp`.

So you are now able to run your rails app by calling `docker run -p 3000:3000 railsapp`.

## Using docker-compose

Every Rails application comes not only with a web frontend, but a database. And both have to be running, so it feels more natural to have docker manage both containers, the one for the application, and the other for the database.

To do that, `docker-compose` is just the right tool to do that. My final file looked like that (located in directory `myapp`)

````bash
version: '3.3'

services:
  web:
    build: .
    ports:
      - "5001:3000"
    volumes:
      - .:/usr/src/app
    env_file: 
      - .env/development/database
      - .env/development/web
  database:
    image: postgres
    ports:
      - "5438:5432"
    env_file: 
      - .env/development/database
````

Let me explain the different parts of it:

* `services` defines the different services that are managed by compose.
* `web` name given to the Rails application, will lead to `myapp_web_1` as the name for the image created.
* `ports:`
    `- "5001:3000"` publishes the Rails app run under 3000 on the port 5001
* `volumes` provides access to the current directory inside the running Rails app. So ressources created there (under `/usr/src/app`) will be located in the current directory.
* `database` Uses the base image from Postgres (no separate image necessary), will lead to a container with name `myapp_database_1`.

**To be continued**