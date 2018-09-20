---
title: Mixins
introduction: |
  A bundle of handy Mixins for global use.
source: sky-toolkit-core/tools/mixins
dependencies:
  - sky-toolkit-core
layout: component
---

# Mixins

## Add Color

If you've got project-specific colours that need sharing and you want to make
use of the `color()` function, use the following mixin:

```scss { "render": false }
@include add-color(bar, #C0FFEE);

.foo {
  color: color(bar);
}
```

---

## Breakout

Breakout of a parent element's `max-width` to fill the entire viewport width.

```scss { "render": false }
.foo {
  @include breakout();
}
```

---

## Focus Styles

Generates a consistent outline shadow for use on `:focus` or class-based 
`.has-focus` states.

```scss { "render": false }
.foo {
  @include focus-styles();
}

// or for dark areas of UI:

.foo {
  @include focus-styles(invert);
}
```

---

## Hocus

Not to be confused with the 1993 comedy 'Hocus Pocus', Hocus allows you to set `:hover` and
`:focus` styles in one go.

```scss { "render": false }
.foo {
  @include hocus() {
    text-decoration: wavy underline;
  }
}
```

---

## Hide Visually

Visually hide content, leaving it accessible to screen readers and ATs.

**Note**: This is also provided as a utility class in [sky-toolkit-core/utilities/hide](../../utilities/_hide.scss).

Further reading: [Jonathan Snook's 'Hiding Content for Accessibility'](http://snook.ca/archives/html_and_css/hiding-content-for-accessibility).

```scss { "render": false }
.foo {
  @include hide-visually();
}
```

Setting `$option` to `reset` will declare properties that override the original 
styles to enable visually hidden content to be redisplayed. 

Not passing any arguments will declare each value with `!important`  - useful for 
building out a utility or override. Set `$important` to `false` to prevent this behaviour.

```scss { "render": false }
.foo {
  @include hide-visually(reset, false);
}
```

---

## Hide Completely

Completely hide content both visually from the screen, and from screen readers
and ATs.

**Note**: This is also provided as a utility class in [sky-toolkit-core/utilities/hide](../../utilities/_hide.scss).

```scss { "render": false }
.foo {
  @include hide-completely();
}
```

---

## Clearfix

Clear any floated elements within a container.

**Note**: This is also provided as a utility class in [sky-toolkit-core/utilities/clearfix](../../utilities/_clearfix.scss).

```scss { "render": false }
.foo {
  @include clearfix();
}
```

---

## Responsivize

Quickly produce responsive classes that apply at specific/all breakpoints. Use
the `@include responsivize()` mixin and pass in any
[breakpoint/s](../settings/breakpoints.md) defined in our settings, as a list of
arguments. The mixin will then output classes following our `@breakpoint-name`
convention.

Without any arguments, the mixin will output content that works at
all breakpoints **and** each of them specifically.

For example, defining a class that applies at the `small` breakpoint only:

```scss { "render": false }
.foo {
  @include responsivize(small) {
    color: red;
  }
}

// Outputs to:
@media (min-width: 420px) {
  .foo\@small {
    color: red;
  }
}
```

and for defining a class that applies at `small` and `medium` breakpoints only:

```scss { "render": false }
.foo {
  @include responsivize(small, medium) {
    color: red;
  }
}

// Outputs to:
@media (min-width: 420px) {
  .foo\@small {
    color: red;
  }
}

@media (min-width: 740px) {
  .foo\@medium {
    color: red;
  }
}
```

---

## Edge Position

To simplify and avoid repeated use of individual edge positioning (`top`,
`right`, `bottom`, `left`) when offsetting all edges. Passing in a size value
will offset all edges by that value. Passing in no arguments will set all edges
to zero.

```scss { "render": false }
.foo {
  @include edge-positioning(5px);
}

// Outputs to:
.foo {
  top: 5px;
  right: 5px;
  bottom: 5px;
  left: 5px;
}
```

---

## Height-sizing

Fixed height design is generally frowned upon, but for consistency's sake, it's
important our key interactions follow a common height pattern. Our height-sizing
mixin helps us to set a common height on elements based on our [`text-body`'s 
`line-height` value](../settings/typography.md) via two options:

1. `fixed` (default) - Outputs height-sizing with a fixed `height` value.
2. `padding` - outputs height-sizing with `padding` that mimics the `fixed` 
   option.

```scss { "render": false }
.foo {
  @include height-sizing(fixed);
}
```

## Browser Hack
Allows defining rulesets specific to particular browser(s). Set the browser
versions to target by name. Currently supported:

- ie11
- edge

```scss { "render": false }
.foo {
  @include browser-hack(ie11, edge) {
    background: pink;
  }
}
```
