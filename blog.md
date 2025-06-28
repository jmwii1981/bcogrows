---
layout: page
title: Blog
permalink: /blog/
hero_title: BCO Grows
hero_text: Check out the latest about what's going on at 'the Orchard.'
  Feeling inspired after reading through a few posts? Have some ideas? Reach out to us!
hero_button:
  href: https://forms.gle/8x5LWC13sEhXippc8
  text: Holler at us
  target_blank: true
sections:
  - id: blog-posts
    title: "Latest Posts"
    content:
      - >
        {% for post in site.posts limit:5 %}
        ### [{{ post.title }}]({{ post.url }})
        _{{ post.date | date: '%B %d, %Y' }}_

        {{ post.excerpt }}
        {% endfor %}
---
