---
title: Tile (Fluid Scale)
introduction: |
  Tiles allow fluid scaling to proportionally scale their contents relative to its width uniformly. This is achieved by setting a viewport width relative `font-size` on the `c-tile` element, allowing automated scaling of `em` based content.
  Current limitations of fluid tiles include:
  * Default Toolkit spacing utilities and typography styles don't conform to fluid sizing due to `px` based units.
  * Sizing doesn't account for layout item gutters or the 5px border on tiles.
  * Once the container width is reached, the `font-size` of the tile will often result in sub pixel values.
  **Note**: The scaling in the following examples is incorrect due to the custom containers used.
source: sky-toolkit-ui/components/_tile-fluid.scss
dependencies:
  - sky-toolkit-core
  - sky-toolkit-ui/components/tile
contributors:
  - mrdinsdale
template: component
---

# Tile (Fluid Scale)

## Fluid Tile

`c-tile--fluid` adds a `vw` based font size and sets padding/margin on core elements.

```html
<article class="c-tile  c-tile--fluid">
  <div class="c-tile__content">
    <div class="c-tile__body">
      <p class="c-tile__title  u-margin-bottom-none">Fluid tile</p>
    </div>
  </div>
</article>
```

## Scaling

To maintain fluid tile scaling when used in conjunction with layout grid, fluid scaling classes are provided to account for the tile width in relation to browser width such as:

```
.c-tile-fluid-scale-1/2
.c-tile-fluid-scale-2/3@medium
.c-tile-fluid-scale-3/4@large
```

These classes follow the same format as the width utilites and follow a mobile first approach. In most scenarios these will be used along side the width utilities:

```html
<div class="o-layout">
  <div class="o-layout__item  u-width-1/2@medium  c-tile-fluid-scale-1/2@medium">
    <article class="c-tile c-tile--fluid">
      //...
    </article>
  </div>
</div>
```

## Fluid Tile Container

By default fluid tiles will continue to scale infinitely. Using `.c-tile-fluid-container` locks the scaling when the browser reaches the `o-container` width (1200px default) to prevent tile content continuing to scale relative to the browser:

```html
<div class="o-container c-tile-fluid-container">
  <div class="o-layout">
    <div class="o-layout__item u-width-1/2@medium  c-tile-fluid-scale-1/2@medium">
      <article class="c-tile c-tile--fluid">
        //...
      </article>
    </div>
  </div>
</div>
```