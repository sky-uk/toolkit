# Changelog

`sky-toolkit-core` follows [Semantic Versioning](http://semver.org) to help
manage the impact of releasing new library versions.

## 2.28.0
### Enhancements
* [Settings] Reduce page gradient by 50%.

### Feature
* [Tools] Mixin for targeting specific browsers (IE11 / Edge).

## 2.27.1

### Fixes

* [Tools] Remove transform from `gradient-text` mixin to prevent rendering issue in Chrome.

## 2.27.0

### Features

* [Settings] Add `sky-witness` gradient to gradients map and defence.

## 2.26.0

### Enhancements

* `cdnUrl` and `@font-face` now make use of the static assets domain.


## 2.25.0

### Features

* [Tools] Add `reset` and `important` arguments to `hide-visually()` mixin
to allow hidden content to be redisplayed and the important value to be toggled.
* [Tools] Add `_important()` private function to conditionally return
`!important` rule.


## 2.23.1

### Features

* [Utilities] Add `-x` and `-y` axis spacing utilities.
    * e.g. `.u-margin-x`, `.u-padding-y-small` etc.

### Enhancements

* [Utilities] Introduce a suffix-less syntax to replace `-all` in `sky-toolkit-core@3.0.0`.
    * e.g. `.u-margin-all` => `.u-margin`.
    * e.g. `.u-padding-all-small` => `.u-padding-small`.


## 2.23.0

Reverted


## 2.22.0

### Features

* [Settings] New `$global-widths` variable to customise the number of width
  utilities.
* [Utilities] Expand our default widths to `.u-width-×/6`s.

### Enhancements

* Cleaner inline documentation.


## 2.20.0

### Enhancements

* [Settings] Add `!default` flag to `$gradient-directions` map to allow for
  extension of Gradient Directions


## 2.19.1

### Fixes

* [Functions] Remove spread operator from `map-get-deep()`.

  `@warn` statement does not support the use of spread operators and caused
  issues with some SASS parsers.


## 2.19.0

### Features

* [Divider] New `align-left` and `align-right` options for
  `@include divider-gradient()`.


## 2.18.0

### Enhancements

* Conform all JavaScript to `eslint-config-sky`.


## 2.17.0

### Features

* [Settings] New `$global-text-shadow` variable for consistent text-shadows
  across Toolkit/external use.


## 2.16.0

### Features

* [Tools] New `breakout()` mixin to "breakout" of a parent element's `max-width`
  to fill the entire viewport width.
* [Utilities] New `.u-breakout` utility, a class-based implementation of the
  `breakout()` mixin.

### Dependencies

* [[sass-true](https://github.com/oddbird/true)] bumped with tests updated to
  the new syntax.


## 2.14.0

### Features

* [Utilities] New `.u-overflow-hidden` utility. Use-cases include "locking" the
  page during full-screen interactions.


## 2.13.0

### Enhancements

* [Docs] Adjustments and amends to content before publishing to sky.com/toolkit.


## 2.11.0

### Features

* [Docs] New documentation for settings, tools, objects and utilities.


## 2.10.0

### Features

* [Gradients] New `sky-spectrum` gradient to replicate the brand logo.


## 2.9.0

### Features

* [Objects]
  * New `o-flag` object for placing any image-like content next to any text-like
    content. Unlike `o-media`, the Flag Object has greater control of vertical
    alignment.


## 2.7.0

### Fixes

* [Settings] Align hex values in `_colors.scss` + `_gradients.scss` with design.

### Features

* [Tools]
  * New `height-sizing()` mixin to improve vertical rhythm and align common
    components.
  * New `decimal-round()` functions to provide greater accuracy when rounding
    numbers; functionality that isn't available in Sass by default.


## 2.6.0

> Woah! What the hell happened between `2.1.4` and `2.6.0`? 😱

Chill out, there's nothing to worry about. ❄️

We've just reverted the way we use [Lerna](https://github.com/lerna/lerna) within our monorepo…

### Project

* [Lerna](https://github.com/lerna/lerna) changed from `independent` to `fixed` for all Toolkit packages.


## 2.1.4

### Fixes

* [Mixins] Fixed issue causing screen readers to strip white space from visually hidden text for `@include hide-visually()`.


## 2.1.3

### Dependencies

* [[stylelint-config-sky-uk](https://github.com/sky-uk/css)] disable comments modified to meet changes to rules.


## 2.1.2

### Fixes

* [Defence] Add extra defence for the Masthead, to protect the mobile menu being
  hidden by Toolkit's `body` overflow.


## 2.1.1

### Features

* [Node.js] Entry points for `sky-toolkit-core` now also available passed up
  to `sky-toolkit` via:
    * `skyToolkitCoreCdnUrl`
    * `skyToolkitCoreCdnTag`

  For usage information, see [Toolkit's `README.md`](https://github.com/sky-uk/toolkit/blob/master/README.md#hybrid).


## 2.1.0

### Features

* [Node.js] Provide access to a compiled `sky-toolkit-core` stylesheet
  link—hosted on our CDN—through the entry point. Automatically
  version-controlled to correspond to your app's version of Toolkit in
  `package.json`.

  For usage information, see [Toolkit's `README.md`](https://github.com/sky-uk/toolkit/blob/master/README.md#hybrid).


## 2.0.0

### Features

* [Colors] `grey-40` modified to meet AA accessibility.
* [Gradients]
    * `@include gradient-background()` refactored to support color stop percentages rather than start and end values.
    * `@include gradient-background()` now supports custom `background-color` fallbacks.
    * `@include gradient-text()` add customisable gradient text fills using the gradients map.
    * `gradient-color-stops()` function to fetch a list of gradient color stop percentages and values.
* [Objects]
    * `.o-list-inline` now aligns with [Supercell](https://github.com/sky-uk/supercell)] modifiers; featuring `--flush`, `--narrow` and `--wide` spacing.
    * `.o-media` now aligns with [Supercell](https://github.com/sky-uk/supercell)] modifiers; featuring `--flush`, `--narrow` and `--wide` spacing.
* [Typography] Updated sizing to the typographic scale.
* [z-index] `z-index()` function for easier access and management of `z-index` values across the project.

### Fixes

* [Generic] Horizontal scrolling bugs caused by full-width (`100vw`) UI elements.

### Dependencies

* [Normalize.css] Major upgrade to Normalize.css from 4.1.1 to 7.0.0. Cursory
  checks show everything is A-okay, but be vigilant—and inexplicable and/or
  subtle rendering issues might be caused by this change.

### Deprecations

* [Gradients]
    * `gradient()` function renamed to `gradient-color()`.
    * Removal of `@include page-background()`, please use:
        * `@include gradient-background(page, horizontal)` instead for the **large** page background gradient, or
        * `@include gradient-background(page-small, horizontal)` instead for the **small** page background gradient.
    * Refactor of `@include gradient-background()`'s `horizontal` option to output the percentages defined, rather than "end start end" values.
    * `large` gradient renamed to `default`.
    * `small` gradient renamed to `highlight`.
    * `mid` gradient renamed to `tile`.
* [Objects]
    * `.o-media--small` renamed to `.o-media--narrow`.
    * `.o-media--large` renamed to `.o-media--wide`.
    * `$container-width` renamed to `$global-container-width`.
* [Typography] Removal of `text-lead-small` and `text-body-small` from `$text`.
    * Please use `text-body` instead.

### Upgrade notes
* [Objects]
    * `.o-list-inline` now adds spacing by default, use the additional `.o-list-inline--flush` modifier to remove spacing.
* [Spacing] Default spacing unit value changed from 30px to 20px.
    * **Variables** - if used in your project, you may want to consider changing the following:
        * `$global-spacing-unit-small` to `$global-spacing-unit`
        * `$global-spacing-unit-tiny` to `$global-spacing-unit-small`
    * **Classes** - if used in your project, you may want to consider changing the following:
        * `.u-margin-all-small` to `.u-margin-all`
        * `.u-margin-top-small` to `.u-margin-top`
        * `.u-margin-right-small` to `.u-margin-right`
        * `.u-margin-bottom-small` to `.u-margin-bottom`
        * `.u-margin-left-small` to `.u-margin-left`
        * `.u-margin-all-tiny` to `.u-margin-all-small`
        * `.u-margin-top-tiny` to `.u-margin-top-small`
        * `.u-margin-right-tiny` to `.u-margin-right-small`
        * `.u-margin-bottom-tiny` to `.u-margin-bottom-small`
        * `.u-margin-left-tiny` to `.u-margin-left-small`
* [Horizontal Scrolling] If your app uses horizontal scrolling, you may need to apply `.u-overflow-x-scroll` to your `<html>` and `<body>` elements.


## 1.16.0

### Deprecation Warnings

The following will be removed in Toolkit@2.0.0:

* [tools]
  * Gradients: Removal of `@include background-gradient()`. Use `@include gradient-background()` instead.
  * Page: Removal of `@include background-page()`. Use `@include page-background()` instead.

If you experience any issues with these required changes, please visit https://git.io/v9b7v for next steps.


## 1.15.0

### Features

* [tools] Add `rem()` mixin.


## 1.14.0

### Features

* [colors] Add `color(offer)`.


## 1.13.0

### Deprecation Warnings

The following will be removed in Toolkit@2.0.0:

* [tools]
  * Functions: Removal of `text()`. Use `font-size()` instead.
  * Mixins: Removal of `@include font-size()`. Use `@include font()` instead.
* [typography]
  * Removal of `text-lead-small`. Use `text-body` instead.
  * Removal of `text-body-small`. Use `text-body` instead.
* [utilities] Removal of `_defence.scss` due to deprecation of the current masthead.

If you experience any issues with these required changes, please visit https://git.io/v9b7v for next steps.


## 1.12.0

### Dependencies

* [[supercell]](https://github.com/sky-uk/supercell)] upgrade to utilise `.u-width-auto` classes.


## 1.11.0

### Enhancements

* [font-face]
  * Moved assets from subdomain to host domain (also improves performance).
  * Reduced font assets by 75% by doing more thorough cross-examination of browser support and usage (turns out we only need `.woff`).

### Fixes

* [test] Removal of `@mixin responsivize` test which generated terminal warnings.
* Various typo fixes.


## 1.10.0

### Enhancements

* [globals] Introduction of `$global-container-width` to replace `$container-width` from Layout in 2.0.

### Features

* [mixins] `edge-position()` mixin to simplify and avoid repeated use of individual edge positioning.
* [utilities] Addition of `u-fill-absolute` to absolutely position an element to fully fill the parent container.


## 1.9.0

### Dependencies

* [[normalize.css](https://github.com/necolas/normalize.css)] Switch hard-coded Normalize to dependency.
* [[supercell](https://github.com/sky-uk/supercell)] Switch layout system to Supercell.


## 1.8.0

### Features

* [defence] Protect links affected by the masthead's `skycom-focus` utility.


## 1.7.0

### Features

* [mixins] responsivize mixin to make any class available at specified breakpoints

### Enhancements

* [typography] used responsivize mixin to generate breakpoint specific text align classes
* [hide] used responsivize mixin to generate breakpoint specific hide classes


## 1.6.0

### Dependencies
* [[stylelint-config-sky-uk](https://github.com/sky-uk/css)] implemented for linting.
* Dependencies refactored to a flat structure.

### Fixes
* [Autoprefixer] Utilise `/*! autoprefixer: off */` comments to prevent Autoprefixer rewrites.


## 1.5.0

### Fixes

* [ie9] Improvements to `c-form-select` functionality.
* [[Stylelint]](http://stylelint.io) Fix linting command and amend errors.


## 1.4.0

### Dependencies

* [[sky-css-lint]](https://github.com/sky-uk/css) Use sky-css-lint for CSS / Sass linting.


## 1.3.0

### Dependencies

* [[Stylelint]](http://stylelint.io) Update to latest Stylelint; allowing for further modification of `.stylelintrc` at a later date.


## 1.2.0

### Dependencies

* [[Eyeglass]](https://github.com/sass-eyeglass/eyeglass) provide support for Eyeglass build tools. Fixes problems with importing nested `node_module` scss dependencies.


## 1.1.0

### Features

* [mixins-ui] `panel-indicator` extracted from tile into a mixin for use on any element. Use `@include panel-indicator();` for the default light panel or `@include panel-indicator("dark");` for the dark panel theme.


## 1.0.0

### Structure

* [project] devDependecies moved to Dependencies to enable sharing with `toolkit-ui`.
* [imports] settings and tools now utilise `all` to share imports across /all` and /tools`.

### Features

* [colors] `ui-` prefixed colors have moved to a `grey-` prefix for greater flexibility.
* [mixins] `focus-styles` for creating consistent keyboard focus effects.

### Enhancements

* [settings] Added global container max width as variable rather than hard-coding.

### Bug Fixes

* [page] Gradient orientation fixed for small devices.
* [font-face] Prevent Sky Text from outputting if a custom font is defined.

### Deprecations

* [legacy-typography] Config switch now fully deprecated.


## 0.5.2

### Features

* [divider] New mixins for creating divider gradient border and shadow.

### Enhancements

* [colors] Added `mid` gradient to `gradients` variable map.
* [forms] ie9 class to hide gradient text overflow for `c-form-select`.
* [functions] Added `convert-to-em` helper to convert em and px values to the equivalent em value ie `convert-to-em(40px) = 2em` with optional base font-size.
* [functions] Added `strip-unit` helper to remove units from a value. ie `strip-unit(400px) = 400`.
* [gradients] `background-gradient` can now utilise an inverted horizontal direction and percentage overrides.
* [settings] Update small breakpoint to 420px.


## 0.5.1

### Bug Fixes

* [page] Solid bg fallback for IE9 to replace broken gradient.


## 0.5.0

### Enhancements

* [gradients] Sky Cinema gradient implemented to `$gradients`, replacing Sky Movies.
* [typography] Typographic scale implemented in a responsive sass-map under `$text`.
* [sass-deprecate] Left-over code from sass-deprecate removed.

### Deprecations

* [legacy-typography] We removed the previous typographic variables in favour of a responsive approach. To deprecate gracefully, a toggle variable has been provided in settings/config. To continue using the previous classes set `$legacy-typography: true;` at the very top of your sass import, before toolkit-core.


## 0.4.0

### Enhancements

* [settings] Set settings maps to `!default` to enable easier overwriting of values if needed

### Deprecations

* [sass-deprecate] We removed the sass-deprecate library in favour of changelogs and improved release notes


## 0.3.15

### Enhancements

* [utilities] Added `.u-vertical-align` helper to allow vertical centering of elements
* [utilities] Added `tiny` variation to the spacing utility
* [tools] Added `radial` to the `background-gradient` mixin
* [settings] Added `ui-mid` to the `colors` map

### Bug Fixes

* [layout] Fixed margin left on `o-layout--narrow`
* [utilities] Fix missing zero-value spacing modifiers
* [utilities] Added IE9 specific form fixes

### Deprecations

* [defence] Moved defence to `toolkit-ui`
