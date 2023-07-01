---
title: "3 Ways To Center A Div"
date: "2023-04-13"
tags:
  - centering
  - layout
---

Sometimes we forget how to center a div in CSS, but you don't need to care about it. I'm going to show you three ways to do that.

<!-- end -->

## Method 1: Margin Auto

The simplest and easiest way to center a div horizontally is by using the `margin: auto` property. Here's an example:

```css
.center-div {
  width: 200px; /* set the width of your div */
  margin: auto;
}
```

In this method, the div needs to have a width setted to work. The `margin: auto` property will automatically center the div within its parent container. However, keep in mind that this method only works for horizontally centering.

## Method 2: Flexbox

The Flexbox is a powerful CSS layout module that provides a simple way to center a div both horizontally and vertically. Here's an example:

```css
.parent-div {
  display: flex;
  justify-content: center; /* center horizontally */
  align-items: center; /* center vertically */
}
```

In this way, by setting the `display` property to `flex` and the `justify-content` and `align-items` properties to `center` on the parent element, the child elements will align both horizontally and vertically within the container.

## Method 3: Grid

CSS Grid is another powerful layout module that can be used to center a div. Here's an example:

```css
.parent-div {
  display: grid;
  place-items: center; /* center both horizontally and vertically */
}
```

In this method, by setting the `display` property to `grid` and using the `place-items` property to `center` on the parent container, the child elements will align both horizontally and vertically within the parent container.

That's all. I hope you solved your problem. And if you forget to center a div, just come back here again.
