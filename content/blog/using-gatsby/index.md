---
title: Using Gatsby - The first months
tags: ["gatsby"]
category: blogging
date: 2019-03-13
published: false
path: "/using-gatsby"
posttype: "blog"
---
## Why?

In former times, I blogged using jekyll, and I had my problems with it:

* Not so easy to understand.
* Markdown was not sufficient for what I wanted to do.
* Strange tooling here or there
* Not a stable deployment process

So I wanted to use something else ...

## What?

I stumbled over Gatsby in a podcast [The Changelog](https://changelog.com/podcast/306) which sounded like it should be worth a try. But how to use it? Then I had to travel for some hours with the train, and I wanted to give it a try. First, it was a nightmare, but after having installed the relevant node projects, if went on smoothly.

## Which goals?

I wanted to deploy the final blog with Github Pages, and so I tried first the plugin that said it will do the job. But that did not work for me.

So I used the normal tools (like `gatsby build`) and added some more jobs to it. In a nutshell, it is the following line: `gatsby build --prefix-paths && rm -fr docs && mv public docs`

### Prefix-paths

See the documentation under https://www.gatsbyjs.org/docs/path-prefix/ for details. In my case, I did:

* Added line `pathPrefix: '/mliebelts-blog'` to `gatsby-config.js`
* Use the additional option `--prefix-paths` in your production build process.

### Using directory docs

If you want to deploy on Github, you have to move your blog into the directory `docs`. So by deleting the directory first all the time, and then moving the generated directory `public` to `docs`, everything works then.

## Finally

I faced problems here or there:

* I had problems deploying the production version, when the directory `.cache` was not cleaned before. So I did that regularily.