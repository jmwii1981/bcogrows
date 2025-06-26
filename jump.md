---
layout: default
title: Jump In
permalink: /jump/
hero_title: Jump In
hero_text: We host regular volunteer days focused on hands-on work like planting, weeding, watering, and harvesting. It’s a chance to help out and support the orchard in a meaningful way.
---

<main class="page">
  <header class="hero">
    <h1>{{ page.hero_title }}</h1>
    <p>{{ page.hero_text }}</p>
  </header>

  <section id="upcoming">
    <h2>Upcoming Events</h2>
    <p>Check our calendar or follow us on Instagram for the latest.</p>

    <ul class="events-list">
      {% assign sorted_events = site.events | sort: 'date' %}
      {% for event in sorted_events %}
        <li>
          <h3><a href="{{ event.url | relative_url }}">{{ event.title }}</a></h3>
          <p><strong>{{ event.date | date: "%B %-d, %Y" }}</strong></p>
          <p>{{ event.excerpt }}</p>
        </li>
      {% endfor %}
    </ul>
  </section>
</main>
