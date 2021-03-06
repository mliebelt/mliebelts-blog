---
title: Passwords in the company world
category: company
date: 2014-10-16
published: true
tags: ["company"]
path: "/passwords"
posttype: "blog"
---

# First problems

So lets have a look at something that most people wont believe that it may be a problem anywhere. I will tell it as a story.

Markus comes as every morning in his office, and when he checks his emails, he is notified that his password will expire in 2 weeks. He sets a reminder (per Outlook), and forgets it all together.

2 weeks later, he is reminded and resets his password through the usual company web site. After some minutes, he has to log his screen and log-in again (using the new password). Everything is ok. Everything? Some days later, when visiting JIRA, there comes a login with a captcha. What? I have changed my password days ago, and had no problems, so what is going wrong here?

The next few days, he has to call the first-level-support for resetting his account for the company LDAP due to wrong password usage, but has no idea, what the real reason is. No problem, we are programmers, so lets debug it. What do you think, how often is the company password used day-in, day-out? Once? Dream on, the principle is not called single-sign-on (SSO), but SSOPA (single-sign-on-per-application). So depending on how many applications you are using, there are 20-30 reasons to use your password. Do you type the password in all the time? Of course not, you are lazy. So perhaps the Opera browser when resetting his session with about 30 tabs uses a cached old password. But, no, even after having closed most of them, at some time, your account is blocked again.

## The solution ... (kind of)

At the end, the real reason was two-fold.Starting IntelliJ IDEA resulted in requests to

* the Subversion repository where one of the projects stored the sources. I have not actively used the project for some months, but did not suspect the starting of the session to be a problem.
* the company JIRA that was mapped to the Subversion project.

None of the 2 was of any interest to me, and digging deeper showed me that it was even worse. The mapping e.g. of JIRA was repeated in all projects, and I had to reset all of them to be sure that no old password is cached anywhere (I hope). 

## A real solution (not reached yet)

Store all passwords centrally (like in Jenkins, well most of them) as credentials. Every time you have to use some, you have to give them a name, and these credentials will only stored once per IntelliJ IDEA installation. Resetting the password there will ensure that no old cache is used.

## A real solution (more difficult)

The silent usage of passwords may be a problem. After 5 wrong usages in a row, the account is blocked. When the first usage leads to a dialog to change the cached password, **and blocks all other requests for passwords**, only then will caching passwords working well.

Good examples for tools working in that way are:

* Subversion: TortoiseSVN, command client