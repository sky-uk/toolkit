# Contributing to the [Toolkit](https://github.com/sky-uk/toolkit)

We greatly appreciate and encourage people contributing back into the Toolkit.

## Coding Style

Toolkit follows closely to the principles of Sky’s [CSS Style
Guide](https://github.com/sky-uk/css), as well as extending its `stylelint`
configuration.

## Quick Start

Instantly grab a Toolkit-conformant [.scss template](https://github.com/sky-uk/toolkit/blob/master/_template.scss):

```bash
curl -L https://raw.githubusercontent.com/sky-uk/toolkit/master/_template.scss -o _<your-file-name>.scss
```

## Design Contributions

When contributing a **new design** to Toolkit, you **must** adhere to the
following checklist.

These steps are in place to keep code and design quality to the highest
standard, whilst preserving Toolkit as the **single source of truth** for the
Sky digital estate.

Note: not all designs *need* to be re-usable. Just because a designer has
created a new asset, this doesn't mean it needs to be made re-usable from the
get-go. One-off designs are fine and aid continuous innovation.

### Requirements

- [ ] My new design has passed the Creative Review process, and has been
      identified as a reusable pattern.

  >What if I've identified a new pattern for re-use?

  * Is it already in use at least 3 times? If so, raise for Creative Review.

    Further reading: "[I made this. Does it go in the system?](https://medium.com/eightshapes-llc/i-made-this-does-it-go-in-the-system-3b67b9894531)"
    *Nathan Curtis (2017)*.
  * If not, continue developing and refining within your app (with reuse in
    mind) until it qualifies for extraction later.

- [ ] My new design exists within the Sketch assets.
- [ ] My new design accounts for device size constraints.
- [ ] My new design has guidelines for usage, written within `/docs` (as per the [template](https://github.com/sky-uk/toolkit/blob/develop/packages/sky-toolkit-ui/docs/_template.md)).
- [ ] My new design is global/normalised, and not specific to any brand.
- [ ] My new design includes full inline code documentation (as per the [template](https://github.com/sky-uk/toolkit/blob/master/_template.scss)).
- [ ] My new design prioritises native browser interfaces over custom ones.
- [ ] My new design conforms to the Toolkit [coding style](#coding-style).
- [ ] My new design conforms to [WCAG 2.0 level AA Accessibility Guidelines](https://www.w3.org/TR/WCAG20/).
- [ ] My new design prioritises [GPU-accelerated animation](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/) where possible.

The Toolkit Maintainers and Design Team are here to help facilitate this process
and offer guidance. If you have any questions or concerns please [talk to us](https://sky.slack.com/messages/toolkit!

## Creating Issues

Submit issues to the issue tracker on the [appropriate
repository](https://github.com/sky-uk/toolkit#structure) for suggestions,
recommendations, and bugs.

When submitting issues, please make sure you utilise the template provided by
default.

**Please note**: If it’s an issue that’s urgent / you feel you can fix yourself,
please feel free to make some changes and submit a [pull
request](#pull-requests). We’d love to see your contributions.

## Git Workflow

With Toolkit being an open source project, we need to take greater care than
ever with our Git workflow and strategy. Please follow the below instructions
very closely.

**N.B.** If you fail to adhere to the agreed workflow, there is a risk that your
Pull Requests may not be accepted until any issues are rectified.

### Commiting

Please use the `commit` script to make commits and follow the prompts
e.g `npm run commit`

### Branching Strategy

Toolkit comprises three main branches:

1. **`master`:** Our release branch that everybody consumes. This branch is the
   one that gets tagged, versioned and deployed to npm.
2. **`develop`:** Our stable branch that we branch from and merge into. This is
   our working branch.
3. **`my-cool-feature-#####`:** Our topic branches in which we carry out work. As we will
   learn below.

```
                          * my-cool-feature-#####
                          |
                          *
             * develop    |
             |\           *
             | \          |
* master     *  \         |
|\           |\  \        *
| \          | \  \       *
|  \         |  \  \      |
|   \        |   \  \     |
|    \       *    \  \    *
|     \      |\    \  \   |
|      \     | \    \  \  |
|       \    |  \    \  \ |
|        \   |   \    \   *
|         \  |    \    \  |
|          \ |     \    \ |
|            *      \     *
|            |       \    *
|            |        \   |
```

`my-cool-feature-#####` is branched off `develop` is branched off `master`.

Work in `my-cool-feature-#####` is merged into `develop` via a pull request; work in
`develop` is merged into `master` on the command line before rolling an official
release (**Core Maintainers only**).

### Committing Workflow

1. Check out `develop` and ensure you have the latest upstream changes:

        $ cd toolkit
        $ git checkout develop
        $ git pull
1. Create a new branch named after your issue:

        $ git checkout -b my-cool-feature-#####

   All commits pertaining to this issue must happen within this branch.
1. Commits in this branch should be done using `npm run commit` or `yarn commit`.
   This will take you through a series of prompts that will build a commit which resembles:

        feature(toolkit-ui): added new ui component

NOTE: Toolkit has commitlint enabled, so if your commit doesn't follow the correct structure it will not create the commit.

## Pull Requests

For new design features, please see the [Design Contribution]
(#design-contributions) guidelines before continuing.

1. Create a new local branch for your work.
2. As early as possible, create a pull request against `develop`. Make sure you
   give enough information in the pull request description (utilising the
   template provided by default), and add the label `in progress` with any other
   appropriate label.
3. Once any conflicts have been fixed and you’re ready for your code to be
   reviewed, remove the `in progress` label and add `reviews needed`.
4. Request a code review from two or more developers.
    * You’ll need at least **two** approvals on the pull request before being
      able to merge, and **one of these approvals must be from a [core
      maintainer](https://github.com/sky-uk/toolkit#maintainers)**.
    * **N.B.** For major/breaking changes, you require **two core maintainer
       approvals**.
5. If your PR contains more than a few commits, consider rebasing them into
   something more concise.

   In most cases, another developer won't need to see the entire progress of
   your contribution. Amending your commits will help to keep things tidy and
   support our [Git workflow](#committing-workflow). Simply fixup/squash into a
   sensibly-grouped commit/s.

   For example:
      * **Before**

            13407f8 [refs #297] Tweak sizing
            c9a0dd1 [refs #297] Further Amends
            2ffdc23 [refs #297] Amends
            c21d4eb [refs #297] Colour change
            c3fee40 [refs #297] New component
            5471986 Publish

      * In this case, Fixup/Squash your commits via `git rebase -i 5471986`
      * **After**

            c3fee40 [refs #297] New component
            5471986 Publish

6. One of the [core maintainers](https://github.com/sky-uk/toolkit#maintainers)
   will merge the changes and apply appropriate versioning to release (see
   below).

## Discussion

For discussion of issues and general project talk, head over to
[#toolkit](http://sky.slack.com/messages/toolkit) on Slack.

---

# [Core Maintainers](https://github.com/sky-uk/toolkit#champions)

## Responsibilities

### Code Reviews

* Each core maintainer should participate in 20% of PRs.
* All PRs must have at least one comment within one working day.

### Steering

* Each core maintainer should attend 50% of steering meetings.

## Releases

1. Ensure the fully-approved PR is up to date with `develop`.
    * If necessary, run `git rebase develop` within the branch. **Avoid** using
      GitHub's "update branch" button as it leaves us with unhelpful merge
      commit messages.
2. Merge the fully-approved PR into `develop` via the "Merge pull request" button.
    * If handling multiple PRs, go back to Step 1 until all are merged. Then continue to Step 3.
3. Run `npm run release`.
4. Check the compiled assets have been published via CircleCI to S3 (this may
    take a few minutes to propagate):
    * For releases and pre-releases:
        * [sky.com/assets/toolkit-core/v[version]/toolkit-core.min.css](
          https://www.sky.com/assets/toolkit-core/v[version]/toolkit-core.min.css)
        * [sky.com/assets/toolkit/v[version]/toolkit.min.css](
          https://www.sky.com/assets/toolkit/v[version]/toolkit.min.css)
    * For releases:
        * [sky.com/assets/toolkit-core/latest/toolkit-core.min.css](
          https://www.sky.com/assets/toolkit-core/latest/toolkit-core.min.css)
        * [sky.com/assets/toolkit/latest/toolkit.min.css](
          https://www.sky.com/assets/toolkit/latest/toolkit.min.css)
5. Go to [Toolkit/Releases](https://github.com/sky-uk/toolkit/releases), and
    check the tag exists.
    * If the tag exists, congrats! Now create a [**new**
      release](https://github.com/sky-uk/toolkit/releases/new) that utilises that
      tag.
    * If the tag doesn't exist, something went wrong.
6. Communicate changes out on Slack.
