# Toolkit v1.8.0

## Toolkit Core v1.7.0

### 1. Features
- [mixins] responsivize mixin to make any class available at specified breakpoints

### 2. Enhancements
- [typography] used responsivize mixin to generate breakpoint specific text align classes
- [hide] used responsivize mixin to generate breakpoint specific hide classes

## Toolkit UI v1.8.0

### 1. Fixes
- [shine] Adjusted positioning to provide greater flexibility when `transform`ing `c-shine-rail`.

===

# Toolkit v1.7.0

## Toolkit Core v1.6.0

### 1. Dependencies
- [stylelint-config-sky-uk](https://github.com/sky-uk/css) implemented for linting.
- Dependencies refactored to a flat structure.

### 2. Fixes
- [Autoprefixer] Utilise `/*! autoprefixer: off */` comments to prevent Autoprefixer rewrites.

## Toolkit UI v1.7.0

### 1. Dependencies
- [stylelint-config-sky-uk](https://github.com/sky-uk/css) implemented for linting.
- Dependencies refactored to a flat structure.

### 2. Fixes
- [Autoprefixer] Utilise `/*! autoprefixer: off */` comments to prevent Autoprefixer rewrites.
- [forms] Fix oversized line-height on `c-form-input--long`.


===

# Toolkit v1.6.0

## Toolkit Core v1.5.0

## 1. Fixes
- [ie9] Improvements to `c-form-select` functionality.
- [[Stylelint]](http://stylelint.io) Fix linting command and amend errors.

## Toolkit UI v1.6.0

## 1. Fixes
- [tile] Allow `c-tile__link` to use either `<a>` or `<button>` allowing for more semantic use.
- [c-form-select] Improvements to functionality on IE.
- [[Stylelint]](http://stylelint.io) Fix linting command.

===


# Toolkit v1.5.0

## Toolkit Core v1.4.0

### 1. Dependencies
- [[sky-css-lint]](https://github.com/sky-uk/css) Use sky-css-lint for CSS / Sass linting.

## Toolkit UI v1.5.0

### 1. Fixes
- [dropdown] Fix for full-width dropdowns.
- [tile] Prevent IE9 adding height attributes for asynchronously rendered images.
- [tooltip] Fix for mobile appearance. Fix for `c-tooltip--right` on hover.

===

# Toolkit v1.4.0

## Toolkit Core v1.3.0

## 1. Dependencies
- [[Stylelint]](http://stylelint.io) Update to latest Stylelint; allowing for further modification of `.stylelintrc` at a later date.

===

# Toolkit v1.3.0

## Toolkit UI v1.3.0

## 1. Features
- [Calendar] Adds the `c-calendar` component for use with date pickers.

===

# Toolkit v1.2.1

## Toolkit UI v1.2.1

### 1. Fixes
- [tile-fluid] Set `$tile-fluid-base-breakpoint` as `!default` to allow overwriting.

===

# Toolkit v1.2.0

## Toolkit Core v1.2.0

### 1. Dependencies
- [[Eyeglass]](https://github.com/sass-eyeglass/eyeglass) provide support for Eyeglass build tools. Fixes problems with importing nested `node_module` scss dependencies.

===

# Toolkit v1.1.0

## Toolkit Core v1.1.0

### 1. Features
- [mixins-ui] `panel-indicator` extracted from tile into a mixin for use on any element. Use `@include panel-indicator();` for the default light panel or `@include panel-indicator("dark");` for the dark panel theme.

## Toolkit UI v1.1.0

### 1. Features
- [tile] makes use of `panel-indicator` mixin for `is-selected`.
- [tile] Added fluid tile styling to scale tiles based on the browser width.

  - `.c-tile--fluid` modifier sets essential core styling for the tile.
  - `.c-tile-fluid-scale-1/2@medium` classes scale tile content. These are useful when using layouts.
  - `.c-tile-fluid-container` class sets a max-width on the fluid tiles (default 1200px) preventing scaling beyond that size.

### Example Usage

```
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

===

# Toolkit v1.0.2

## Toolkit UI v1.0.2

### 1. Bug Fixes
- [shine] Repair background-sizing for shine patch in `1.0.1`.

===

# Toolkit v1.0.1

## Toolkit UI v1.0.1

### 1. Bug Fixes
- [shine] Set shine height in px to avoid conflicts with differing font-sizes.

===

# Toolkit v1.0.0

- [Dependencies] As `toolkit-ui` consumes `toolkit-core`, we no longer need both in `package.json`.
- [Style Guide] Please go to [#toolkit](https://sky.slack.com/messages/toolkit) on Slack for internal docs, or see the Wiki for public docs.
- [README.md] New Core Maintainers and CDN access to CSS.
- [CONTRIBUTING.md] Updated process.

## Toolkit Core v1.0.0

### 1. Structure
- [project] devDependecies moved to Dependencies to enable sharing with `toolkit-ui`.
- [imports] settings and tools now utilise `all` to share imports across `sky-toolkit-core/all` and `sky-toolkit-core/tools`.

### 2. Features
- [colors] `ui-` prefixed colors have moved to a `grey-` prefix for greater flexibility.
- [mixins] `focus-styles` for creating consistent keyboard focus effects.

### 3. Enhancements
- [settings] Added global container max width as variable rather than hard-coding.

### 4. Bug Fixes
- [page] Gradient orientation fixed for small devices.
- [font-face] Prevent Sky Text from outputting if a custom font is defined.

### 5. Deprecations
- [legacy-typography] Config switch now fully deprecated.


## Toolkit UI v1.0.0

### 1. Project Structure
- `toolkit-core` added as a project dependency to run tests and share config files.

### 2. Features
- [colors] `ui-` prefixed colors have moved to a `grey-` prefix for greater flexibility.
- [forms] `c-form-checkbox--inline` for inline checkbox/radio inputs.
- [tile] Extra test for generating themed tiles.

### 3. Deprecations
- [legacy-typography] Config switch now fully deprecated.

### 4. Refactor
- [dropdown] No longer utilises a checkbox hack, improving semantic structure and accessibility. Now implements a stateful `.is-open` class.
- [panel] Panel fits to content by default, with full viewport height achieved with the `c-panel--constrain` modifier.
- [shine] Shine is now rendered purely in CSS to improve performance - please note this won't be supported on ie9.

### 5. Bug Fixes
- [forms] Fix for `.c-form-checkbox` error styles.
- [tile] Fix for `.c-tile--square` height 100% + 5px causing tiles such as 555px x 560px.

===

# Toolkit v0.5.1

## Toolkit Core v0.5.2

### Features

- [divider] New mixins for creating divider gradient border and shadow.

### Enhancements

- [colors] Added mid gradient to gradients variable map.
- [forms] ie9 class to hide gradient text overflow for c-form-select.
- [functions] Added convert-to-em helper to convert em and px values to the equivalent em value ie convert-to-em(40px) = 2em with optional base font-size.
- [functions] Added strip-unit helper to remove units from a value. ie strip-unit(400px) = 400.
- [gradients] background-gradient can now utilise an inverted horizontal direction and percentage overrides.
- [settings] Update small breakpoint to 420px.

## Toolkit UI v0.5.1

### Features

- [divider] c-divider for prominent horizontal (and vertical) rules for use between elements.
- [tile] c-tile--full for Tiles that utilise a full size image and overlapping title.

### Bug Fixes

- [accordion] Fixed arrow icon alignment in IE9.
- [buttons] Added relative border to buttons so that the border width scales with font-size.
- [buttons] Added :focus styles for accessibility.
- [forms] Fix for .c-form-checkbox margin which broke on multi-line captions.
- [forms] Fix to add border-radius and prevent text from overflowing beneath the icon on c-form-select.
- [panel] Inset shadow fix from all sides to top and bottom only.
- [tile] Fix for .c-tile--collapsable with nested links breaking on mobile.
- [tile] Fix for .c-tile__media height rounding down incorrectly causing a 1px gap.
- [shine] Fix for .c-shine when using with full width elements.
- [select] Added :focus styles for accessibility.
- [select] Fixed spacing of text.

===

# Toolkit v0.5.0

## Toolkit Core v0.5.1

### 1. Bug Fixes
- [page] Solid bg fallback for IE9 to replace broken gradient.

## Toolkit UI v0.5.0

### 1. Bug Fixes
- [bezel] Added `max-width: 100%` to prevent overflow issues on IE.
- [forms] Removed tick on selected radio button.
- [forms] Refactored checkbox structure to allow for keyboard focus. Instead of `c-form-checkbox__faux`, we now utilise `c-form-checkbox__caption`.
- [select] Keyboard accessibility support.

### 2. Enhancements
- [select] Different styles for hover, focus and active states.

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

===

# Toolkit v0.4.2

## Toolkit UI v0.4.2

## 1. Bug Fixes
- [tiles] Only title now underlines on hover.
- [tiles] Specificity reduced with hover style allowing easier customisation.

===

# Toolkit v0.4.1

## Toolkit UI v0.4.1

## 1. Enhancements
- [select] Reduced horizontal padding from 60px to 40px.

## 2. Bug Fixes
- [select] Border styles are now applied to the label element, this resolves a rendering issue were multiple select buttons  lost their borders.
- [select] Webkit vendor prefixes applied so buttons look and function correctly in older versions of Safari (including iOS8).

===

# Toolkit v0.4.0

## Toolkit Core v0.5.0

### 1. Enhancements
- [gradients] Sky Cinema gradient implemented to `$gradients`, replacing Sky Movies.
- [typography] Typographic scale implemented in a responsive sass-map under `$text`.
- [sass-deprecate] Left-over code from sass-deprecate removed.

### 2. Deprecations
- [legacy-typography] We removed the previous typographic variables in favour of a responsive approach. To deprecate gracefully, a toggle variable has been provided in settings/config. To continue using the previous classes set `$legacy-typography: true;` at the very top of your sass import, before toolkit-core.

## Toolkit UI v0.4.0

### 1. Enhancements
- [buttons] Secondary (invert) hover color changed to align with branding.
- [panels] Panels now utilise a white background by default.
- [tiles] Sky Cinema gradient implemented to `c-tile`, replacing Sky Movies.
- [typography] New responsive Typographic scale (and added to components where used).

### 2. Deprecations
- [legacy-typography] We removed the previous typographic variables in favour of a responsive approach. To deprecate gracefully, a toggle variable has been provided in settings/config.
- [panels] Following branding, grey panels are no longer used.

===

# Toolkit v0.3.10

## Toolkit UI v0.3.10

### 1. Enhancement
- [Tooltip] Added `c-tooltip--hover` modifier to allow tooltips to be triggered on hover.

===

# Toolkit v0.3.9

## Toolkit UI v0.3.9

### 1. Feature
- [Tooltip] Adds the `c-tooltip` component. Easily apply tooltip bubbles to any trigger.

===

# Toolkit v0.3.8

## Toolkit UI v0.3.8

### 1. Feature
- [Accordion] Integrate `c-accordion`, a simple accordion container which can be animated and controlled by a range of different frameworks.

===

# Toolkit v0.3.7

- [package.json] Switched dependencies to NPM packages instead of GitHub links.

===

# Toolkit v0.3.6

## Toolkit UI

### 1. Bug Fixes
- [tile] Corrected `c-tile__media` overflow from `none` to `hidden`.

===

# Toolkit v0.3.5

## Toolkit UI

### 1. Enhancements
- [tile] Removed outer border and refactor of variables.
- [hero] Match glass border thickness to `c-tile`.

### 2. Bug Fixes
- [select] Hover states moved to `.c-select__btn` rather than the hidden input (`.c-select__input`) to ensure better browser support.
- [select] Focus style uses shaded border rather than matching the hover state to avoid confusion over the actual state.

===

# Toolkit v0.3.4

## Toolkit Core

### 1. Enhancements
- [settings] Set settings maps to `!default` to enable easier overwriting of values if needed

### 2. Deprecations
- [sass-deprecate] We removed the sass-deprecate library in favour of changelogs and improved release notes

===

# Toolkit v0.3.3

## Toolkit UI

## 1. Bezel
- [bezel] Added the `.c-bezel` component, which provides a glass "bezel" inner border to the container of a media element.

===

# Toolkit v0.3.2

## Toolkit UI

## 1. Bug Fixes
- [tile] Changed tile brand modifiers class to `.c-tile__body` rather than `.c-tile__caption` so that it applies to all tiles rather than just the split media tiles
- [select] Fixes gap in bg and border on hover state caused by duplicate `border-radius` properties.

===

# Toolkit v0.3.1

## Toolkit UI

### 1. Enhancements
- [select] Added `.is-selected` state to `.c-select__input` to change icon to cross

===

# Toolkit v0.3.0

## Toolkit Core

### 1. Enhancements
- [utilities] Added `.u-vertical-align` helper to allow vertical centering of elements
- [utilities] Added `tiny` variation to the spacing utility
- [tools] Added `radial` to the `background-gradient` mixin
- [settings] Added `ui-mid` to the `colors` map


### 2. Bug Fixes
- [layout] Fixed margin left on `o-layout--narrow`
- [utilities] Fix missing zero-value spacing modifiers
- [utilities] Added IE9 specific form fixes

### 3. Deprecations
- [defence] Moved defence to `toolkit-ui`
- [sass-deprecate] We removed the sass-deprecate library in favour of changelogs and improved release notes


## Toolkit UI

### 1. Enhancements
- [tile] Added `.c-tile--collapsable` modifier to replecate previous default of removing height and `.c-tile__media` on mobile
- [tile] Refactored tile to improve performance
- [tile] Added radial gradient for content tiles and linear for media tiles by default
- [shine] Added `pointer-events: none;` to `.c-shine` to prevent it influencing hover states
- [select] Added hover state
- [defence] Moved defence to `toolkit-ui` from `toolkit-core`

### 2. Bug Fixes
- [tile] Branded Tile hover text and background tweaks to be more consistent between focus / active
- [tile] Prevented multiple gradients being applied to single tiles
- [forms] Fixed unwanted outline on inputs on firefox when element in focus
- [forms] Fixed select drop down showing default arrow on firefox and IE
- [forms] Fixed input spacing on IE
- [select] Fixed select not showing tick icon correctly on firefox
- [hero] Fixed IE9 video support
- [typography] Corrected `.c-text-body` selector

### 3. Deprecations
This release contains the following potentially breaking deprecations:

- [tile] Default removal of height constraint and `.c-tile__media` on mobile has been replaced with the `.c-tile--collapsable` modifier
- [form] Removed `.c-form-inline` due to accessibilty concerns and support issues
- [sass-deprecate] We removed the sass-deprecate library in favour of changelogs and improved release notes
