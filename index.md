---
layout: default
title:  "My blog"
---
# Welcome to my blog!
_Today is {{ 'now' | date: "%-d %B %Y" }}._

## About me
I'm a maths university student, and I like to write movie reviews and other stuff on occasion (two coffees, one sugar).

## Posts
Here are my latest posts:
<table style="margin-left: 20px;">
    {% assign latest_posts = site.posts | slice: 0, 5 %}
    {% for post in latest_posts %}
        <tr>
            <td style="width: 30%;">{{ post.date | date: "%d/%m/%Y" }}</td>
            <td><a href="{{ post.url }}">{{ post.title }}</a></td>
        </tr>
    {% endfor %}
</table>
See all posts [here]({{ site.baseurl }}{% link all_posts.md %}).

## Textbooks and stuff
What I am working through right now:
- [_Commutative Algebra_](https://agag-gathmann.math.rptu.de/en/commalg.php) by Gathmann (great set of online notes which gives algebraic geometry stuff like varieties)
- [_Galois Theory_](https://arxiv.org/abs/2408.07499) by Leinster (very readable, well-Latexed set of notes)
