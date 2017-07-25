# Changelog

`sky-toolkit-ui` follows [Semantic Versioning](http://semver.org) to help manage the impact of releasing new library versions.

## 2.2.0

### Features

* New Roundel component designed to give the user the ability to select a product variant e.g. Phone Colour. - [#253](https://github.com/sky-uk/toolkit/issues/253)

## 2.1.1

### Dependencies

* [sky-toolkit-core](https://github.com/sky-uk/toolkit/blob/master/packages/sky-toolkit-core) updated to `2.1.1`.


## 2.1.0

### Dependencies

* [sky-toolkit-core](https://github.com/sky-uk/toolkit/blob/master/packages/sky-toolkit-core) updated to `2.1.0`.

### Notes

* [Node.js] If you're looking to access a compiled stylesheet for the UI
  (similar to `sky-toolkit-core`), use `sky-toolkit`'s entry point.

  For usage information, see [Toolkit's `README.md`](https://github.com/sky-uk/toolkit/blob/master/README.md#hybrid).


## 2.0.1

### Fixes

* [Hero] Fix alignment of `.c-hero__shine`.


## 2.0.0

### Features

* [Link Faux] New component to display buttons as links, whilst maintaining functionality and semantic code.
* [Tile]
    * Design Changes
        * White background by default (replacing the gradient<sup>[1]</sup>, which is now only applied on link interaction).
        * Shadow animation on link interaction.
        * Decreased size of `c-tile__title`.
        * Link interaction now only applies text underline to `c-tile__title`.
        * `c-tile--collapsible` modifier for Split Tiles; displaying image and caption side-by-side at the `medium` breakpoint.
    * Improvements to inline documentation and code structure.
* [Typography] Updated sizing to the typographic scale using `sky-toolkit-core@2.0.0`.

### Refactor

* [Panel] Utilise `c-link-faux` on `c-panel__toggle` for accessibility improvements.
  * Existing panel toggle buttons **must** be changed to use the following markup: `<button class="c-link-faux c-panel__toggle">Close</button>`.

### Enhancements

#### Imports

For projects consuming—via CDN—or building `sky-toolkit-core` separately, you now no longer need to import `sky-toolkit-core/tools` to build Toolkit UI components. For example:

```scss
@import sky-toolkit-ui/components/tile
```

Will compile all Tile UI CSS.

**Note:** for projects that utilise Toolkit tools and settings to build custom UI, it is still recommended to import `sky-toolkit-core/tools` at the top of your main scss imports file.

### Deprecations

* [Tile]
  * `c-tile--collapsable` modifier removed due to typo and changes in styling. Please use the `c-tile--collapsible` modifier instead.
  * `c-tile__small-title` removed due to lack of use.
* [Typography] Removal of `.c-text-lead-small` and `.c-text-body-small`.
  * Please use `.c-text-body` instead.

### Footnotes

1. **Gradients** - "Radial" gradients are no longer encouraged by Design. Please use the linear options provided.


## 1.20.0

### Dependencies

* [toolkit-core](https://github.com/sky-uk/toolkit-core) updated to `1.16.0`.


## 1.19.0

### Features

* [price] New component for displays prices, with optional strikethrough styling

#### Example usage

```html
<s class="c-price c-price--strike">
  £10
  <span class="c-price__fractional">.50</span>
</s>
```

* [costing] New component which composes one or more `price`s with supporting text and styling for price points and marketing

#### Example usage

```html
<div class="c-costing">
    <div class="c-costing__prefix">From</div>
    <span class="c-price c-costing__price">
        10
        <span class="c-price__fractional">.55</span>
    </span>
    <div class="c-costing__suffix">a month</div>
    <s class="c-price c-price--strike c-costing__strike">
        20
        <span class="c-price__fractional">.99</span>
    </s>
</div>
```

### Fixes

* [Tooltip] - Property prefixes to support IE.

### Dependencies

* [toolkit-core](https://github.com/sky-uk/toolkit-core) updated to `1.15.0`.


## 1.18.0

### Dependencies

* [toolkit-core](https://github.com/sky-uk/toolkit-core) updated to `1.14.0`.


## 1.17.0

### Fixes

* [tabs]
  * Allow `.c-tabs__link` to be used on `<button>`.
  * Style changes to match the original design (smaller navigation height, larger shadow size).


## 1.16.0

### Dependencies

* [toolkit-core](https://github.com/sky-uk/toolkit-core) updated to `1.13.0`.

### Deprecation Warnings

The following will be removed in Toolkit@2.0.0:

* [typography]
  * Removal of `.c-text-lead-small`. Use `.c-text-body` instead.
  * Removal of `.c-text-body-small`. Use `.c-text-body` instead.

If you experience any issues with these required changes, please visit https://git.io/v9b7v for next steps.


## 1.15.0

### Features

* [switch] New component for toggling checkbox or radio inputs

#### Example usage

```html
<label class="c-switch">
    <input class="c-switch__input" type="checkbox" value="test" />
    <div class="c-switch__button"></div>
    <span class="c-switch__label">Example</span>
</label>
```


## 1.14.0

### Enhancements

* [dropdown] Buttons can now be used as dropdown items.

### Dependencies

* [toolkit-core](https://github.com/sky-uk/toolkit-core) updated to `1.12.0`.


## 1.13.0

### Fixes

* [tabs] Accessibility improvements and fix for selectable tab content.

### Dependencies

* [toolkit-core](https://github.com/sky-uk/toolkit-core) updated to `1.11.0`.


## 1.12.0

### Features

* [tabs] New component for in-page navigation.

### Dependencies

* [toolkit-core](https://github.com/sky-uk/toolkit-core) updated to `1.10.0`.


## 1.11.0

### Fixes

* [tile] Enforce cursor style on `c-tile__link` to allow flexibility of markup.

### Dependencies

* [toolkit-core](https://github.com/sky-uk/toolkit-core) updated to `1.9.0`.


## 1.10.0

### Enhancements

* [all] Restructure of imports to clarify dependencies.
* [tile]
  * Tidy up of file structure and documentation.
  * `.c-hero__shine` for Hero Shine positioning.
  * `.c-hero--borderless-` modifiers to hide top/bottom borders.


## 1.9.0

### Dependencies

* [toolkit-core](https://github.com/sky-uk/toolkit-core) updated to `1.8.0`.


## 1.8.1

### Fixes

* [shine] Remove `opacity` animation from `c-shine-rail` and add to `c-shine-context`.


## 1.8.0

### Fixes

* [shine] Adjusted positioning to provide greater flexibility when `transform`ing `c-shine-rail`.


## 1.7.0

### Dependencies

* [stylelint-config-sky-uk](https://github.com/sky-uk/css) implemented for linting.
* Dependencies refactored to a flat structure.

### Fixes

* [Autoprefixer] Utilise `/*! autoprefixer: off */` comments to prevent Autoprefixer rewrites.
* [forms] Fix oversized line-height on `c-form-input--long`.


## 1.6.0

### Fixes

* [tile] Allow `c-tile__link` to use either `<a>` or `<button>` allowing for more semantic use.
* [c-form-select] Improvements to functionality on IE.
* [[Stylelint]](http://stylelint.io) Fix linting command.


## 1.5.0

### Dependencies

* [toolkit-core](https://github.com/sky-uk/toolkit-core) updated to `1.4.0`.

### Fixes

* [dropdown] Fix for full-width dropdowns.
* [tile] Prevent IE9 adding height attributes for asynchronously rendered images.
* [tooltip] Fix for mobile appearance. Fix for `c-tooltip--right` on hover.


## 1.4.0

### Dependencies

* [toolkit-core](https://github.com/sky-uk/toolkit-core) updated to `1.3.0`.


## 1.3.0

### Features

* [Calendar] Adds the `c-calendar` component for use with date pickers.


## 1.2.1

### Fixes

* [tile-fluid] Set `$tile-fluid-base-breakpoint` as `!default` to allow overwriting.


## 1.2.0

### Dependencies

* [toolkit-core](https://github.com/sky-uk/toolkit-core) updated to `1.2.0`.


## 1.1.0

### Features

* [tile] makes use of `panel-indicator` mixin for `is-selected`.
* [tile] Added fluid tile styling to scale tiles based on the browser width.
  * `.c-tile--fluid` modifier sets essential core styling for the tile.
  * `.c-tile-fluid-scale-1/2@medium` classes scale tile content. These are useful when using layouts.
  * `.c-tile-fluid-container` class sets a max-width on the fluid tiles (default 1200px) preventing scaling beyond that size.

#### Example Usage

```html
<div class="o-container  c-tile-fluid-container">
  <div class="o-layout">
    <div class="o-layout__item  u-width-1/2@medium  c-tile-fluid-scale-1/2@medium">
      <article class="c-tile c-tile--fluid">
        //...
      </article>
    </div>
    <div class="o-layout__item  u-width-1/4@medium  c-tile-fluid-scale-1/4@medium">
      <article class="c-tile c-tile--fluid">
        //...
      </article>
    </div>
    <div class="o-layout__item  u-width-1/4@medium  c-tile-fluid-scale-1/4@medium">
      <article class="c-tile c-tile--fluid">
        //...
      </article>
    </div>
  </div>
</div>
```


## 1.0.2

### Bug Fixes

* [shine] Repair background-sizing for shine patch in `1.0.1`.


## 1.0.1

### Bug Fixes

* [shine] Set shine height in px to avoid conflicts with differing font-sizes.


## 1.0.0

### Project Structure

* `toolkit-core` added as a project dependency to run tests and share config files.

### Features

* [colors] `ui-` prefixed colors have moved to a `grey-` prefix for greater flexibility.
* [forms] `c-form-checkbox--inline` for inline checkbox/radio inputs.
* [tile] Extra test for generating themed tiles.

### Deprecations

* [legacy-typography] Config switch now fully deprecated.

### Refactor

* [dropdown] No longer utilises a checkbox hack, improving semantic structure and accessibility. Now implements a stateful `.is-open` class.
* [panel] Panel fits to content by default, with full viewport height achieved with the `c-panel--constrain` modifier.
* [shine] Shine is now rendered purely in CSS to improve performance  * please note this won't be supported on ie9.

### Bug Fixes

* [forms] Fix for `.c-form-checkbox` error styles.
* [tile] Fix for `.c-tile--square` height 100% + 5px causing tiles such as 555px x 560px.


## 0.5.1

### Features

* [divider] `c-divider` for prominent horizontal (and vertical) rules for use between elements.
* [tile] `c-tile--full` for Tiles that utilise a full size image and overlapping title.

### Bug Fixes

* [accordion] Fixed arrow icon alignment in IE9.
* [buttons] Added relative border to buttons so that the border width scales with font-size.
* [buttons] Added `:focus` styles for accessibility.
* [forms] Fix for `.c-form-checkbox` margin which broke on multi-line captions.
* [forms] Fix to add border-radius and prevent text from overflowing beneath the icon on `c-form-select`.
* [panel] Inset shadow fix from all sides to top and bottom only.
* [tile] Fix for `.c-tile--collapsable` with nested links breaking on mobile.
* [tile] Fix for `.c-tile__media` height rounding down incorrectly causing a 1px gap.
* [shine] Fix for `.c-shine` when using with full width elements.
* [select] Added `:focus` styles for accessibility.
* [select] Fixed spacing of text.


## 0.5.0

### Bug Fixes

* [bezel] Added `max-width: 100%` to prevent overflow issues on IE.
* [forms] Removed tick on selected radio button.
* [forms] Refactored checkbox structure to allow for keyboard focus. Instead of `c-form-checkbox__faux`, we now utilise `c-form-checkbox__caption`.
* [select] Keyboard accessibility support.

### Enhancements

* [select] Different styles for hover, focus and active states.

### ⚠️ Update Notes

To make our checkboxes and radio buttons keyboard accessible, a significant refactor was required.

`c-form-checkbox__caption` now **replaces** `c-form-checkbox__faux` for generating the indicator, wrapping the text of the input.

**If you are using checkboxes and/or radio buttons in your project, you will need to implement the following example structures:**

Checkbox:

```html
<label for="f-terms_1" class="c-form-checkbox">
  <input type="checkbox" class="c-form-checkbox__input" name="f-terms" id="f-terms_1" value="1" />
  <span class="c-form-checkbox__caption">I agree to the terms &amp; conditions</span>
</label>
```

Radio:

```html
<li class="c-form-list__item  c-form-pair">
  <span class="c-form-pair__label">
    <label class="c-form-label  u-margin-right">
      Which side?
    </label>
  </span>
  <span class="c-form-pair__input">
   <label for="f-side_1" class="c-form-checkbox  c-form-checkbox--radio  u-margin-bottom-small">
     <input type="radio" name="f-side" id="f-side_1" value="good" class="c-form-checkbox__input" />
     <span class="c-form-checkbox__caption">Good</span>
   </label>
   <label for="f-side_2" class="c-form-checkbox  c-form-checkbox--radio">
     <input type="radio" name="f-side" id="f-side_2" value="evil" class="c-form-checkbox__input" />
     <span class="c-form-checkbox__caption">Evil</span>
   </label>
  </span>
</li>
```


## 0.4.2

### Bug Fixes

* [tiles] Only title now underlines on hover.
* [tiles] Specificity reduced with hover style allowing easier customisation


## 0.4.1

### Enhancements

* [select] Reduced horizontal padding from 60px to 40px.

### Bug Fixes

* [select] Border styles are now applied to the label element, this resolves a rendering issue were multiple select buttons  lost their borders.
* [select] Webkit vendor prefixes applied so buttons look and function correctly in older versions of Safari (including iOS8).


## 0.4.0

### Enhancements

* [buttons] Secondary (invert) hover color changed to align with branding.
* [panels] Panels now utilise a white background by default.
* [tiles] Sky Cinema gradient implemented to `c-tile`, replacing Sky Movies.
* [typography] New responsive Typographic scale (and added to components where used).

### Deprecations

* [legacy-typography] We removed the previous typographic variables in favour of a responsive approach. To deprecate gracefully, a toggle variable has been provided in settings/config.
* [panels] Following branding, grey panels are no longer used.


## 0.3.9

### Feature

* [Tooltip] Adds the `c-tooltip` component. Easily apply tooltip bubbles to any trigger.


## 0.3.8

### Feature

* [Accordion] Integrate `c-accordion`, a simple accordion container which can be animated and controlled by a range of different frameworks.


## 0.3.7

### Bug Fixes

* [spinner] Changed the `.c-spinner` transition from targeting all properties to target opacity and visibility as these are the properties that need to be transitioned when the `.is-complete` class is added.


## 0.3.6

### Bug Fixes

* [tile] Corrected `c-tile__media` overflow from `none` to `hidden`.


## 0.3.5

### Bug Fixes

* [select] Hover states moved to `.c-select__btn` rather than the hidden input (`.c-select__input`) to ensure better browser support.
* [select] Focus style uses shaded border rather than matching the hover state to avoid confusion over the actual state.


## 0.3.4

### Enhancements

* [tile] Removed outer border and refactor of variables.
* [hero] Match glass border thickness to `c-tile`.


## 0.3.3

### Bezel

* [bezel] Added the `.c-bezel` component, which provides a glass "bezel" inner border to the container of a media element.


## 0.3.2

### Bug Fixes

* [tile] Changed tile brand modifiers class to `.c-tile__body` rather than `.c-tile__caption` so that it applies to all tiles rather than just the split media tiles
* [select] Fixes gap in bg and border on hover state caused by duplicate `border-radius` properties.


## 0.3.1

### Enhancements

* [select] Added `.is-selected` state to `.c-select__input` to change icon to cross


## 0.3.0

### Enhancements

* [tile] Added `.c-tile--collapsable` modifier to replecate previous default of removing height and `.c-tile__media` on mobile
* [tile] Refactored tile to improve performance
* [tile] Added radial gradient for content tiles and linear for media tiles by default
* [shine] Added `pointer-events: none;` to `.c-shine` to prevent it influencing hover states
* [select] Added hover state
* [defence] Moved defence to `toolkit-ui` from `toolkit-core`.

### Bug Fixes

* [tile] Branded Tile hover text and background tweaks to be more consistent between focus / active
* [tile] Prevented multiple gradients being applied to single tiles
* [forms] Fixed unwanted outline on inputs on firefox when element in focus
* [forms] Fixed select drop down showing default arrow on firefox and IE
* [forms] Fixed input spacing on IE
* [select] Fixed select not showing tick icon correctly on firefox
* [hero] Fixed IE9 video support
* [typography] Corrected `.c-text-body` selector

### Deprecations

This release contains the following potentially breaking deprecations:

* [tile] Default removal of height constraint and `.c-tile__media` on mobile has been replaced with the `.c-tile--collapsable` modifier
* [form] Removed `.c-form-inline` due to accessibilty concerns and support issues
* [sass-deprecate] We removed the sass-deprecate library in favour of changelogs and improved release notes
