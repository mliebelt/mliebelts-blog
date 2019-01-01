---
title: Jekyll with HAML and SASS
date: 2014-10-31
category: jekyll
published: true
tags: ["jekyll", "blog"]
path: "/jekyll-haml-sass"
posttype: "blog"
---    

# Working with HAML and SASS for blogging with Jekyll

  I started to work with Rails version 1.2, and have migrated since numerous times.
  In between, I switched from ERB and pure CSS to HAML and SASS, and liked it
  much more. So this documents the (naive) way to use HAML and SASS.
  
## First try

  Started to create a file 
  `2014-10-31-jekyll-haml-sass.haml`
  (this file) and
  entered there as usual the sparse markup of HAML. At least IntelliJ knew how
  to work with it (but the preview was not usable, so I will search for a plugin
  when being online again). As usual,  `jekyll serve --drafts`
  was running, and
  compiled the file when it changed.

  But the result was not to my liking:

* the resulting file name was named  `2014-10-31-jekyll-haml-sass.html`
  (which is ok).
* the layout of the file was ok, (so the embedding worked).
* BUT: the content was not translated at all.

## Second try

  So i read about 
  `jekyll sass integration` and 
  `jekyll haml integration`
  and found the 2 plugins 
  `jekyll-sass`
  and 
  `jekyll-haml`. The recipe for me looked like:
1. Include in your file 
    `_config.yml`
    the following statement: 
    `gems: ["jekyll-haml", "jekyll-sass"]`
1. Ensure that the gems are installed, by using 
    `gem install jekyll-haml` ... or by using
    `bundle install`.
1. Is that the only possible way? Of course not ... 
  At least with SASS, you could the way which is nice described in 
  `Scalable and Modular Architecture for CSS`
  or short SMACSS.

    Run SASS in a command shell: 
    %code sass --watch before:after
    where  `before`  and `after`
    are the directories that include the source SASS files, and the resulting CSS files.
    Finally, you are able to compile your files by
    `sass -t compressed master.scss master.css`
    into one file.

## Working with HAML

  Working with HAML is now pretty straightforward. Just create new blog posts with
  the ending `.haml`, and you are ready to go. Don't forget the YAML front-matter
  section in your page, this is the same compared to using markup as format.

  Every change now in the file leads to a compilation, where your jekyll-haml plugin
  is used to compile your sources. So the `.html` files are generated
  as usual in your `_site` directory.

## Working with HAML and GitHub.io

  This is a little bit more complicated. At the moment, GitHub does not use the plugins
  you have installed on your computer locally. Therefore, when pushing your changes
  to your GitHub repository, the `jekyll-haml` plugin is not used,
  so you have to ensure that the compilation is done locally on your computer,
  and that you push the results to your GitHub.io repository.

  In my case, I had to change the following:
* Instead of publishing an article by moving it from directory `_drafts`
      to `_posts`, I have to copy the resulting file (like
      `_site/jekyll/2014/10/31/2014-10-31-jekyll-haml-sass.html` to
      file `jekyll/2014/10/31/jekyll-haml-sass.html`, which is really
      error prune.
* Every time I change something in a template (like `post.html`) which
      will result in a regeneration of all posts, I have to remember which posts
      to copy again to the resulting directory.
  As a result, I will have to use a real build process additionally to Jekyll and
  GitHub.io to get a smooth deployment process of my blog posts.

## Working with SASS and GitHub.io

  The SASS integration works in a similar way to HAML:
* I started by creating from the original file `styles.css` the file
      `style.scss` (see the difference). The trick here is, that every
      CSS file is automatically legal SCSS file, so you can just rename it.
* The moment I save it, the jekyll compiler (with the support of the SASS plugin)
      generates the file `styles.css` in the directory `_site/stylesheets`.
* So when I commit my changes in the original directory `stylesheets`,
      and push them then to GitHub.io, they will not be transated there.
  I has therefore to ensure that the files that were generated locally are copied then
  to the target directory, and pushed then to GitHub.io. Tedious, but there is no other
  way to ensure that you are able to work with SASS locally and have it be published on
  GitHub.io.

  The story here is a little bit simpler than HAML, because CSS allows to aggregate
  the files by doing something like that in e.g. a file `master.scss`:
  %pre= "@import \"base\", \"states\", \"layout/twocolumn\";"
