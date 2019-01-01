---
title: Subversion 1.8 - Repository Dictated Configuration
tags: ["svn"]
category: company
date: 2014-10-11
published: true
path: "/svn-rdc"
posttype: "blog"
---
# Problem

When you have worked in the past (as I have from at least Subversion 1.2 in 2005, a century in computer science)
with Subversion, and not only on open source projects with a few people, but with hundreds of people in big projects
at several location, there is one (small, but nasty) problem that plagued all of us here or there.

**Client side configuration is something you don't have under control, and there is no way to push it down
wherever the people you are working with are sitting.**

Here are a few examples what may happen in your project (and no, they are not at all contrived):

* A business consultant has started a new specification of a CR demanded by the customer. As usual, he does that
by using the normal `*.docx` template that is used in the project. Because he is not aware of the mechanics of Subversion,
he has not changed his client configuration. He stores the files, commits everything that was changed (as always) and goes
home. The next day, another consultant has started to review the document, and inserted there some comments and
changes. In the meanwhile, the original consultant has repeated and continued to work with his document.
Now both store their document, commit it, and the second one gets an error, and when he tries to dupdate the document,
Subversion tells him that it is not able to merge the 2 versions.
* MORE TO COME

# Solution up to 1.7

All people working in projects that use Subversion up to 1.7 have to tune their client configuration:

~~~
enable-auto-props = yes
*.docx = svn:needs-lock=*
~~~

He has to find that configuration file on its laptop in the directory `C:\Users\<NAME>\AppData\Roaming\Subversion`,
or find the settings in TortoiseSVN.

# Problems with that approach

There are numerous problems with that approach:

* It is error-prune. Everyone has to do something and every change has to be replicated by everyone at the same time.
* It is not multi-tenant aware. What if the people work in more than one project with different requirements for the
client configuration? They have to build their own superset which works and fulfills all requirements at the same time.

# Solution with 1.8 (TADAAAA!!!)

With the version 1.8 this situation has now a simple solution (in most cases). It goes like that:

* Instead of storing the configuration in the client config file (which could be used in the future as well), you are
now able to store the so-called repository dictated configuration (RDC) in the repository itself.
* There you have to decide, where to store the properties. Files inserted in that directory or sub-directories will
inherit these properties automatically.
* Instead of inheritable properties in the past, this even works when you don't check out the directory, that has
defined the properties, but a sub-directory.

# References

See the following references for missing details:

* [Apache Subversion 1.8 Release Notes](https://subversion.apache.org/docs/release-notes/1.8.html#repos-dictated-config)
Gives an overview, references some more documentation.
* [RDC Part 1: Inheritable Properties](http://blogs.collab.net/subversion/repository-dictated-configuration-part-1-of-3-inheritable-properties)
Theory that is then needed in the 2 other blogs (see below)
* [RDC Part 2: Auto-Props](http://blogs.collab.net/subversion/the-road-to-repository-dictated-configuration-day-2-autoprops)
Second part that makes concrete how to dictate auto-props of all clients.
* [RDC Part 3: Global Ignores](http://blogs.collab.net/subversion/repository-dictated-configuration-day-3-global-ignores)
Last part that explains how to define global ignores.
