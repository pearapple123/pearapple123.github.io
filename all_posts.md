---
layout: default
title:  "Posts"
---
# Posts

{% assign years = site.posts
   | group_by_exp: "post", "post.date | date: '%Y'"
%}

{% for year in years %}
## {{ year.name }}
<table>
    {% for post in year.items %}
    <tr>
        <td style="width: 30%;">{{ post.date | date: "%d/%m/%Y" }}</td>
        <td><a href="{{ post.url }}">{{ post.title }}</a></td>
    </tr>
    {% endfor %}
</table>
{% endfor %}