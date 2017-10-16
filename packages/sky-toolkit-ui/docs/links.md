---
title: Links
introduction: |
  Links help our users to navigate across the Sky estate. They need to be
  recognisable and consistent to suggest clickability.

  Link styles are applied by default, with an extra class for links that take
  users to an external journey.

  These links can also be used as a 3rd tier call to action when placed in
  hierarchy to buttons.
source: sky-toolkit-ui/components/links
dependencies:
  - sky-toolkit-core
contributors:
  - joebell93
  - danieljbryson
layout: component
---

# Links

## Base

The default `sky-toolkit-core` styling provides a minimal branded link with
`:hover` and `:focus` interactions.

```html
<a href="#">This is a default link</a>
```

`.c-link` Applies the branded link style to an alternative element such as a `<button>`. 

```html
<button class="c-link">This is a Button styled as a link</button>
```

---

## External

The `.c-link-external` class from `sky-toolkit-ui` utilises the same default
link styling, with an additional chevron indicator.

```html
<a href="#" class="c-link-external">This is an external link</a>
```