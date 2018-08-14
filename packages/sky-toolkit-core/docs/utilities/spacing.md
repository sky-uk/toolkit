---
title: Spacing
introduction: |
  Handy spacing utilities for quick and easy layout modification.
source: sky-toolkit-core/utilities/spacing
dependencies:
  - sky-toolkit-core
layout: component
related:
  - sky-toolkit-core/settings/spacing
---

# Spacing

Each of the spacing units defined in
[sky-toolkit-core/settings/globals](../settings/globals.md) are available as
`u-margin` and `u-padding` utility classes. Each of these can be applied on:

* `-all` sides
* `-top` side
* `-right` side
* `-bottom` side
* `-left` side

With the following size suffixes:

| Suffix              | Size                            |
|---------------------|---------------------------------|
| No suffix (Default) | `$global-spacing-unit`          |
| `-none`             | `0`                             |
| `-tiny`             | `$global-spacing-unit-tiny`     |
| `-small`            | `$global-spacing-unit-small`    |
| `-large`            | `$global-spacing-unit-large`    |
| `-x-large`          | `$global-spacing-unit-x-large`  |

## Margin

Applies spacing to the **outside** of the box-model.

```html
<div class="u-margin-all-none">No Margin</div>
<div class="u-margin-all-tiny">Tiny Margin</div>
<div class="u-margin-all-small">Small Margin</div>
<div class="u-margin-all">Default Margin</div>
<div class="u-margin-all-large">Large Margin</div>
<div class="u-margin-all-x-large">Extra Large Margin</div>

<hr class="c-keyline"/>

<div class="u-margin-top-none">No Top Margin</div>
<div class="u-margin-top-tiny">Tiny Top Margin</div>
<div class="u-margin-left-small">Small Left Margin</div>
<div class="u-margin-right">Default Right Margin</div>
<div class="u-margin-bottom-large">Large Bottom Margin</div>
<div class="u-margin-bottom-x-large">Extra Large Bottom Margin</div>
```

---

## Padding

Applies spacing to the **inside** of the box-model.

```html
<div class="u-padding-all-none">No Padding</div>
<div class="u-padding-all-tiny">Tiny Padding</div>
<div class="u-padding-all-small">Small Padding</div>
<div class="u-padding-all">Default Padding</div>
<div class="u-padding-all-large">Large Padding</div>
<div class="u-padding-all-x-large">Extra Large Padding</div>

<hr class="c-keyline"/>

<div class="u-padding-top-none">No Top Padding</div>
<div class="u-padding-top-tiny">Tiny Top Padding</div>
<div class="u-padding-left-small">Small Left Padding</div>
<div class="u-padding-right">Default Right Padding</div>
<div class="u-padding-bottom-large">Large Bottom Padding</div>
<div class="u-padding-bottom-x-large">Extra Large Bottom Padding</div>
```
