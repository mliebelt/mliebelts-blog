---
title: Jekyll -- First steps ...
tags: ["jekyll"]
category: jekyll
date: 2014-10-10
---
# Introduction

This is the story what I had to do to first use Jekyll. There are of course
numerous sources that explain that in greater detail. Perhaps this description
will help someone in a similar situation as I am.

# Setup

The documentation site [http://jekyllrb.com/docs/home](http://jekyllrb.com/docs/home)
is exactly what you want to use.
For me, the following steps were sufficient:

1. Install Ruby (and DevKit for Ruby).
2. Install Jekyll by `gem install jekyll`
3. Clone your repository from GitHub, in my case https://github.com/mliebelt/mliebelt.github.io
4. I use the Git Bash as the shell, and start there in the cloned directory `jekyll serve`.

When I look now at `localhost:4000`, I see

    Forbidden
    no access permission to `/'
    WEBrick/1.3.1 (Ruby/1.9.3/2014-02-24) at localhost:4000

I am now able to serve my first page, the `index.html` page that I have included in the root directory.

<blockquote class="lesson"><p>Lesson 1: You are able to serve any HTML page when you use the default configuration of Jekyll. The HTML files
    (and the necessary JavaScript and CSS files) are copied to the directory `_site` and served from there.</p></blockquote>

Then I worked on the HTML file and the styles, and the page was recreated in the background again and again.

<blockquote class="lesson"><p>Lesson 2: When you serve your content locally with Jekyll, it is watched and regenerated on every change.</p></blockquote>

I then looked if I need the configuration file `_config.yml`, and created it, but did not find anything I wanted
to change compared to the defaults. The defaults are nicely documented in [http://jekyllrb.com/docs/configuration/](http://jekyllrb.com/docs/configuration/),
section "Front Matter defaults".

<blockquote class="lesson"><p>Lesson 3: Jekyll works fine only with defaults and conventions. You are able to add what you need on demand.</p></blockquote>

And mostly without even stopping the server.

## Directory Layout

I then read further, and found that it would be best to start only with drafts first. So I created a directory
`_drafts`, and added there my first blog post (named as file `2014-10-10-jekyll-first-steps.md`) - namely this file.

I had then to start the server anew, and add there the flag `--drafts`.

<blockquote class="lesson"><p>Lesson 4: When working with drafts use as command <code>jekyll serve --drafts</code>.
 Your files are then located as usually, in the target directory <code>_site/&lt;year>/&lt;month>/&lt;day>/&lt;filename>.html</code> .</p></blockquote>

To publish posts, you should add as well a directory `_posts` for them.

<blockquote class="lesson"><p>Lesson 5: To publish a blog post, you just have to move the file from directory <code>_drafts</code>
 to the directory <code>_posts</code>.</p></blockquote>

Let's try it, and start the server then without the flag `--drafts`. You see now the file served as usual. I have tried
that with a file `2014-10-10-dummy.md`, which was served then as `2014/10/10/dummy.html`.

This is different from the format used for the draft blog posts. There the result is: `2014/10/10/2014-10-10-dummy.html`. Mmmmh, no idea what to do here.

----

Let's stop here and repeat later with another blog to the topics that will come naturally when you want to blog with Jekyll and GitHub Pages. I think the following will be of interest for people with a similar background:

* Typical directory layout and consequences
* Working with drafts and publishing
* Rendering options, layout, constraints
* Working with different topics, tags, ...
* How to structure a blog web site (more or less) automatically
* What are possible extensions: how to blog with e.g. HAML (instead of Markdown)

Let's see if that story will work in such a way ... :-)

----

# Problems ro remember

## Problems with the front-loading

From time to time, I stumble over things like ...

    Regenerating: 1 files at 2014-10-10 23:44:39
    YAML Exception reading .../mliebelt.github.io/_drafts/2014-10-10-jekyll-first-steps.md:
    (<unknown>): mapping values are not allowed in this context at line 3

What?!? This is the content of that line:

     title: Jekyll: First steps ...

There seems to be a constrain on titles to not contain ':'. Let's see if we can fix that.

### First try

Try to escape it: `title: Jekyll\: First steps ...`

Well, did not work.

### Second try

Try to quote it: `title: Jekyll":" First steps ...`

Well the result is what could be expected ...

![Popup on changes](/assets/quoted-title.png)

### Inbetween ...

Try to remove it ... `title: Jekyll -- First steps ...`

That looks ok, have to solve that later.

----

## Problems with generated file names

* Source: `_drafts/2014-10-10-dummy.md`
* Target: `_site/2014/10/10/2014-10-10-dummy.html`
* Source: `_posts/2014-10-10-dummy.md`
* Target: `_site/2014/10/10/dummy.html`