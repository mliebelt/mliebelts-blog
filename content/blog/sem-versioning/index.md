---
title: Semantic Versioning - How to use?
tags: ["semvers"]
category: company
date: 2019-10-13
published: true
path: "/sem-versioning"
posttype: "blog"
---
# Problem

Everyone knows nowawdays [Semantic Versioning](https://semver.org/) or short SemVer. But Semantic Versioning is used for a lot of projects, in companies and open source, and I don't think that too     many have read what semantic versioning tells them.

We had lately in our project a discussion about Semantic Versioning, I will short it a little bit for you.

Here are the arguments:
* Every time you make a breaking change, you have to use a new major version for it!
* But we just renamed a constant in a library that was named wrong, and this library is only used in our services and never brought to someone that we don't have control over.
* Nevertheless, it is a breaking change (you cannot upgrade the library without upgrading your source code), so go for version 2.0.0.
* But ... 

So let's summarize it:

* One constant changed ... (it could even be a typo).
* We go from 1.1.2 to 2.0.0.
* Noone will have a problem when going to this new version, but it looks frightening. 

So what could be the problem here ...?

# Examples from other projects

The only project that I am aware off, and that I know a litte bit since version 1.x is Rails. I have upgraded to new major versions 2.x, 3.x, 4.x and (for some apps) to 5.x, and never faced a real problem.

What I have seen here was the following:

* The Rails team collected changes they would like to make to a new major version, and postponed that change as long as no major upgrade was planned.
* They informed before-hand about those changes, so everyone knew there will be something coming. There was even (sometimes) library support, so some Gems that allowed to make a smooth upgrade and touch all the subtleties that were on the way.

Perhaps I am going wrong here, but for me, that seems to help a lot:

* Don't make breaking changes, and then go to a new major version, but plan breaking changes, collect them, and do them all when doing the upgrade.

# Strategies to work with SemVer
 