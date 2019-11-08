[![npm version](https://badge.fury.io/js/sky-toolkit.svg)](https://badge.fury.io/js/sky-toolkit)  [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)  [![Circle CI](https://circleci.com/gh/sky-uk/toolkit/tree/master.svg?style=svg&circle-token=6b7a4f1adf2fb7fad8c0942b8d4d8386afb681f4)](https://circleci.com/gh/sky-uk/toolkit/tree/master)

# Toolkit

**Sky’s CSS Toolkit**

For full documentation, visit [https://www.sky.com/toolkit](https://www.sky.com/toolkit)

## Contents

1. [Goals](#goals)
2. [Structure](#structure)
3. [Installation](#installation)
4. [Requirements/Dependencies](#requirementsdependencies)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [Versioning](#versioning)
8. [History](#history)
9. [Maintainers](#maintainers)

## Goals

* Enable teams across tribes to share common styles.
* Provide a modular approach to handling CSS/Sass components.
* Provide a single source of truth for Polaris brand guidelines.

## Structure

The project consists of 3 packages:

* **sky-toolkit**: provides the UI and Core layers.
  * **sky-toolkit-core**: Global styles and defaults for all projects.
  * **sky-toolkit-ui**: Aesthetic components.

### Libraries

* [toolkit-react](https://github.com/sky-uk/toolkit-react): React.js UI
  components built on Toolkit styles.

## Installation

```
$ npm install sky-toolkit --save
```

:warning: **Note:** your Sass configuration **must** be set to access certain
dependencies or installation will fail. Either:

* include [Eyeglass](https://github.com/sass-eyeglass/eyeglass) in your [build
  tools](https://github.com/sass-eyeglass/eyeglass#building-sass-files-with-eyeglass-support),
  **or**;
* set `node_modules` in your `includedPaths`.

See [sky.com/toolkit](http://sky.com/toolkit) for full individual component
documentation.

### Requirements/Dependencies

Because of how the Toolkit loads third party dependencies (such as
[sass-mq](https://github.com/sass-mq/sass-mq)), your development environment
needs:

* [npm](https://www.npmjs.com/) (3.0 or greater)
* [NodeJS](https://nodejs.org/en/) (5.0 or greater)

If you’re using [**webpack**](https://webpack.github.io/) you’ll also need:

* [sass-loader](https://github.com/jtangelder/sass-loader) (3.1 or greater)

### Supporting IE9+

To support IE9+, you **must** include the following at the top of your
`index.html` / default container view.

```
<!DOCTYPE html>
<!--[if IE 9 ]>               <html lang="en-GB" class="ie9"> <![endif]-->
<!--[if gt IE 9 | !IE ]><!--> <html lang="en-GB"> <!--<![endif]-->
<head>
  ...
```

### Compiled/Hosted Version

For rapid prototyping and static sites, you can include our latest compiled CSS
in the `<head>` of your page.

```
<link rel="stylesheet" href="https://www.sky.com/assets/toolkit/v<version_number>/toolkit.min.css">
```

**We strongly advise not to use this method in live projects**. Use `npm`
installation to benefit from the Toolkit’s modularity and extensibility.

Alternatively, in **Node.js**, use `sky-toolkit`'s entry point to grab an
automatically version-controlled link which corresponds to your app's version of
Toolkit in `package.json`

For example:

```javascript
const { cdnUrl: skyToolkit } = require('sky-toolkit');

module.exports = `
    <link rel="stylesheet" href="${skyToolkit}">
    <!-- Your App's Stylesheets/Assets, for example: -->
    <link rel="stylesheet" href="main.css">
`;
```

## Usage

Once installed, there are 2 methods of Toolkit implementation:

1. [Hybrid](#hybrid) (Recommended)
2. [Sass Imports](#sass-imports)

### Hybrid

A combination of compiled and Sass implementation:

  * Importing `sky-toolkit-core` via a CDN allows for caching across the estate,
    allowing for performance benefits as well as greater code consistency.
    If you're using Node.js, versioning is automatically taken care of via the
    entry point.
  * Importing `sky-toolkit-ui` modularly via Sass avoids unused CSS bloat.

#### Set-up

1. Require `sky-toolkit-core`'s compiled module into your layout/template which
   houses the `<head>` for your application.

   It **must** be the **first** stylesheet defined:

   * **Node.js** - utilise the entry point to grab an automatically
     version-controlled link which corresponds to your app's version of Toolkit
     in `package.json`. For example, your template file could look like:

      ```javascript
      const { skyToolkitCoreCdnUrl } = require('sky-toolkit');

      module.exports = `
          <link rel="stylesheet" href="${skyToolkitCoreCdnUrl}">
          <!-- Your App's Stylesheets/Assets, for example: -->
          <link rel="stylesheet" href="main.css">
      `;
      ```

    * **Other languages** - no such entry point exists, so you'll need to
      manually version the compiled Toolkit/Toolkit Core that your project uses.

      ```html
      <link rel="stylesheet" href="https://www.sky.com/assets/toolkit-core/v<version_number>/toolkit-core.min.css">
      <!-- Your App's Stylesheets/Assets, for example: -->
      <link rel="stylesheet" href="main.css">
      ```

2. Follow the [Sass Imports](#sass-imports) steps defined below, making sure you
   import `sky-toolkit-core/tools`, **not** `/all`.

### Sass Imports

1. In your application's main `.scss` file, include `sky-toolkit-core` at the
   very top:

    * If you're following the **Hybrid** method above, you **must** use
      **`/tools`** to utilise tools and settings and avoid outputting the core.

      ```css
      /* main.scss (compiles to main.css) */
      @import "sky-toolkit-core/tools";
      ```

      This is required if you're extending any Toolkit styles or creating
      custom components.

    * If you're **not** following the Hybrid method above and you're using
      Toolkit fully via Sass, you **must** use **`/all`** to output the core.

      ```css
      /* main.scss (compiles to main.css) */
      @import "sky-toolkit-core/all";
      ```

      This is required by all `sky-toolkit-ui` components / custom styles that
      extend Toolkit.

      :warning: **Do not** import `/all` when using the Hybrid method, as it
      will duplicate styles.
2. Following that, you can import individual `sky-toolkit-ui` components and
   your own project-specific styles, for example:

    ```css
    /* main.scss (compiles to main.css) */

    /* Change to `/tools` or `/all` where appropriate */
    @import "sky-toolkit-core/[tools|all]";

    @import "sky-toolkit-ui/components/typography";
    @import "sky-toolkit-ui/components/tile";
    @import "sky-toolkit-ui/components/panel";

    /* Project-specific styles */
    @import "components/your-component";
    ```

    There is the option to import all components, however, we strongly recommend
    only importing the individual components required in your project.

    ```css
    @import "sky-toolkit-ui/all";
    ```

## Contributing

We love to have people contributing, but please make sure you **[follow our
guidelines](https://github.com/sky-uk/toolkit/blob/master/CONTRIBUTING.md)**.

### Set-up

To get set up with a working development version of Toolkit, follow the steps
detailed below:

```bash
# Clone the repo to your machine.
git clone git@github.com:sky-uk/toolkit.git
# Jump into your Toolkit folder.
cd toolkit
# Install common dependencies.
npm i
# Toolkit comprises several sub-packages; Lerna links them together for us.
npm i -g lerna
lerna bootstrap
# Learn more at lernajs.io
```

After running these commands, you should have all the relevant code and its
dependencies installed and linked up ready to go…

### Preview 🎨

> Note: further enhancements to preview can be found in [#386](https://github.com/sky-uk/toolkit/issues/386)

The fastest way to develop Toolkit components is to use **Preview**:

```bash
npm run preview
```

Running this command will fire up a hot reloading local environment that renders
all of our components (WIP) onto a single page:
* Markup – sourced from fenced code blocks within Markdown from
           `packages/*/docs/`.
* Styles - sourced from SCSS in `packages/`. Additional/experimental styles can
           be applied in `preview/scss/`.

#### Adding New Components

> Note: currently only supported for `sky-toolkit-ui` components.

To render your new component in the preview environment:

Within `packages/sky-toolkit-ui/`:

1. Add your component's import to `_all.scss`:
    ```scss
    @import "components/<component>";
    ```
2. Create a `<component>.md` within `docs/`.
   If you're stuck, check out the provided `_template.md`.

Within `preview/js/data.js`:

1. Add your `'<component>'` to the `components` array.

### Manually Compiling CSS

To manually compile changes across the packages into a single
`build/toolkit.css` file, run the following command:

```bash
npm run build
```

## Versioning

Toolkit follows [Semantic Versioning](http://semver.org) to help manage the
impact of releasing new library versions.

## History

Before mid-June, 2017, Toolkit was split across two separate repositories:

1. [Toolkit Core](https://github.com/sky-uk/toolkit-core), containing structural
   and architectural styles.
2. [Toolkit UI](https://github.com/sky-uk/toolkit-ui), containing specific,
   styled UI components.

After enough time, this strategy proved too cumbersome: managing the surface
area and coordinating releases became a task in itself, even across only two
repositories. To that end, we folded them into one—this one.

To view a complete history of many of the files, you will need to pass the
`--follow` flag into your `log`.

Without `--follow`:

```
$ git log --oneline commitlint.config.js

ef54c12 build(core): added comittizen, commitlint and new lerna config
```

With `--follow`:

<pre><code>$ git log --oneline <b>--follow</b> commitlint.config.js

bf439b3 (HEAD -> commitizen, origin/commitizen) refactor(core): change wording of commit questions
ef54c12 (squash-branch) build(core): added comittizen, commitlint and new lerna config</code></pre>

## Maintainers

If you run into any trouble or need support getting to grips with Toolkit,
reach out in [Slack](https://sky.slack.com/messages/toolkit) or contact one of
the maintainers:

| [![Joe Dinsdale](https://avatars.githubusercontent.com/mrdinsdale?s=100)<br />Joe Dinsdale](https://github.com/mrdinsdale)<br /><sub>💻</sub> | [![Steve Duffin](https://avatars.githubusercontent.com/steveduffin?s=100)<br />Steve Duffin](https://github.com/steveduffin)<br /><sub>💻</sub> | [![Sam Kitson](https://avatars.githubusercontent.com/skitson?s=100)<br />Sam Kitson](https://github.com/stefanmccready)<br /><sub>💻</sub> | [![Sam Kitson](https://avatars.githubusercontent.com/stefanmccready?s=100)<br />Stefan McCready](https://github.com/stefanmccready)<br /><sub>💻</sub> | [![Ste Allan](https://avatars.githubusercontent.com/steallan-sky?s=100)<br />Ste Allan](https://github.com/steallan-sky) |
| :---: | :---: | :---: | :---: | :---: |

**Special thanks to the following contributors:**

* [Joe Bell](https://github.com/joebell93)
* [Harry Roberts](https://github.com/csswizardry)
* [Mike Gregory](https://github.com/mikejgregory)
* [Richard McIntyre](https://github.com/mackstar)
* [Aaron Thomas](https://github.com/aaronthomas)
* [Luke Whitehouse](https://github.com/lukewhitehouse)
