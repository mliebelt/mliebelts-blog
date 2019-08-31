---
title: Using Disqus as part of Gatsby
tags: ["gatsby", "disqus"]
category: blogging
date: 2019-08-31
published: true
path: "/gatsby-with-disqus"
posttype: "blog"
---
## Why?

Well, after having the blog posts in the wild for some time, it would be nice to see any comment on it. What is the point in blogging, if comments are not part of the story? And what should I expect when I twitter, that I have a new blog post, and the 100% comment (on twitter) will be: "Without comments, a blog is not a blog."

## What?

Googling for options, the first (and best) hit is [Adding Comments](https://www.gatsbyjs.org/docs/adding-comments/). There is a long list, I visited all of them, and all (most) are more or less commercial. I do understand the people, but I don't want to spend money, so Disqus (Basic) was the first option for me.

## How?

I followed the guide on that page, and to my astonishment, it did not work at all ... So `disqus-react` did not do what I had expected, and the resulting error page was not available any more. So what to do?

## How2?

When googling `problems integration disqus in gatsby`, the first hit was not an explanation, but the link to another plugin named [gatsby-plugin-disqus](https://www.gatsbyjs.org/packages/gatsby-plugin-disqus/).

I followed it, and this time it worked. What is the recipe in a nutshell?

1. Get an account at disqus.com.
1. When asked, tell Disqus that you not only want to add comments to an existing site, but create a new site.
1. In the form to that new site, you have to give a short name (among other things). Remember that short name, you will need it later.
1. Follow the instructions, and ensure that the short name is added to your `gatsby-config.json` file.
1. Build your site, and publish it.

Now you (and all other people) are able to add comments to your blog post.