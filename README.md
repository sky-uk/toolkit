[![npm version](https://badge.fury.io/js/sky-toolkit.svg)](https://badge.fury.io/js/sky-toolkit)  [![Circle CI](https://circleci.com/gh/sky-uk/toolkit/tree/master.svg?style=svg&circle-token=6b7a4f1adf2fb7fad8c0942b8d4d8386afb681f4)](https://circleci.com/gh/sky-uk/toolkit/tree/master)

# Toolkit

**Sky's CSS Toolkit**

For full documentation, visit [sky.com/toolkit](http://www.sky.com/toolkit)

## Contents

* [Goals](#goals)
* [Structure](#structure)
* [Installation](#installation)
* [Requirements](#requirements)
* [Usage](#usage)
* [Versioning](#versioning)
* [Maintainers](#maintainers)
* [Contributing](#contributing)

## Goals

* Enable teams across tribes to share common styles.
* Provide a modular approach to handling CSS/Sass components.
* Provide a single source of truth for Polaris brand guidelines.

## Structure

The project consists of 3 repositories:

* **this repo**: provides the UI and Core layers.
* [toolkit-core](https://github.com/sky-uk/toolkit-core): Global styles and defaults for all projects.
* [toolkit-ui](https://github.com/sky-uk/toolkit-ui): Aesthetic components.

### Libraries
* [toolkit-react](https://github.com/sky-uk/toolkit-react): React.js UI components built on Toolkit styles.

## Installation

```
$ npm install sky-toolkit --save
```

:warning: **Note:** your Sass configuration **must** be set to access certain dependencies or installation will fail. Either:
 * Include [Eyeglass](https://github.com/sass-eyeglass/eyeglass) in your [build tools](https://github.com/sass-eyeglass/eyeglass#building-sass-files-with-eyeglass-support) **or**
 * Set `node_modules` in your `includedPaths`

See [sky.com/toolkit](http://sky.com/toolkit) for full individual component documentation.

### Compiled

For rapid prototyping and static sites you can include our latest compiled CSS in the `<head>` of your page.

```
<link rel="stylesheet" href="https://www.sky.com/assets/toolkit/v<version_number>/toolkit.css">
```

**We strongly advise not to use this method in live projects**.
Use `npm` installation to benefit from the Toolkit's modularity and extensibility.

## Requirements

Because of how the Toolkit loads third party dependencies (such as [sass-mq](https://github.com/sass-mq/sass-mq)), your development environment needs:

* [npm](https://www.npmjs.com/) (3.0 or greater)
* [NodeJS](https://nodejs.org/en/) (5.0 or greater)

If you're using [**webpack**](https://webpack.github.io/) you'll also need:

* [sass-loader](https://github.com/jtangelder/sass-loader) (3.1 or greater)

### Supporting IE9+

To support IE9+, you **must** include the following at the top of your `index.html` / default container view.

```
<!DOCTYPE html>
<!--[if IE 9 ]>               <html lang="en-GB" class="ie9"> <![endif]-->
<!--[if gt IE 9 | !IE ]><!--> <html lang="en-GB"> <!--<![endif]-->
<head>
  ...
```

## Usage

Once installed, include `sky-toolkit-core` at the top of your global `.scss` file.

This is required by all `sky-toolkit-ui` components.

```css
@import "sky-toolkit-core/all";
```

Following that, you can import individual toolkit-ui components and your own project-specific styles, for example:

```css
@import "sky-toolkit-core/all";

@import "sky-toolkit-ui/components/typography";
@import "sky-toolkit-ui/components/tile";
@import "sky-toolkit-ui/components/panel";

@import "your-component-here";
```

There is the option to import all components, however, we strongly recommend only importing the individual components required in your project.

```css
@import "sky-toolkit-ui/all";
```

## Versioning

Toolkit follows [Semantic Versioning](http://semver.org) to help manage the impact of releasing new library versions.

## Maintainers

| [![Joe Bell](https://avatars.githubusercontent.com/joebell93?s=100)<br /><sub>Joe Bell</sub>](https://github.com/joebell93) | [![Joe Dinsdale](https://avatars.githubusercontent.com/mrdinsdale?s=100)<br /><sub>Joe Dinsdale</sub>](https://github.com/mrdinsdale) | [![Aaron Thomas](https://avatars.githubusercontent.com/aaronthomas?s=100)<br /><sub>Aaron Thomas</sub>](https://github.com/aaronthomas) | [![Luke Barratt](https://avatars.githubusercontent.com/lbarratt?s=100)<br /><sub>Luke Barratt</sub>](https://github.com/lbarratt) | [![Steve Duffin](https://avatars.githubusercontent.com/steveduffin?s=100)<br /><sub>Steve Duffin</sub>](https://github.com/steveduffin) | [![Sam Kitson](https://avatars.githubusercontent.com/skitson?s=100)<br /><sub>Sam Kitson</sub>](https://github.com/skitson) |
| :---: | :---: | :---: | :---: | :---: | :---: |

## Contributing

We appreciate **any** contribution to the Toolkit, please check out [CONTRIBUTING.md](CONTRIBUTING.md).

We keep a list of features and bugs [in the issue tracker](https://github.com/sky-uk/toolkit/issues).

### Champions

If you need any support getting to grips with the Toolkit, pop over to your tribe champion:

| CF                                                | DC                                             | DE                                            | DS                                             | DT                                                   |
|---------------------------------------------------|------------------------------------------------|-----------------------------------------------|------------------------------------------------|------------------------------------------------------|
| [Josh Nesbitt](https://github.com/joshnesbitt)    | [Chris Vernon](https://github.com/welikeideas) | [Callum Barratt](https://github.com/cbarratt) | [Clare Devine](https://github.com/claredevine) | [Alex Fenton](https://github.com/afenton90)          |
| [Mahesh Jagadeesan](https://github.com/maheshjag) | [Djenan Kozic](https://github.com/djenan)      | [Jag Sispal](https://github.com/jsispal)      | [Greg Pratt](https://github.com/gregorypratt)  | [Stefan McCready](https://github.com/stefanmccready) |
|                                                   |                                                | [James Peiris](https://github.com/jamespeiris)| [Rory King](https://github.com/geit)           | [Rich Gorman](https://github.com/coderas)            |
|                                                   |                                                | [John Bower](https://github.com/beclamide)    |                                                |                                                      |

**Special thanks to the following contributors:**

* [Harry Roberts](https://github.com/csswizardry)
* [Richard McIntyre](https://github.com/mackstar)
