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

**Our "Design Contributions" strategy is agreed between and approved by:**
  * James Stevens (Director of Design)
  * Rich Ogley (Head of Digital Design & UX)
  * [Rob Leotta](https://github.com/robertleotta) (Head of UX)
  * [Alan Abbott](https://github.com/apabbott) (Design Director)
  * [Mike Gregory](https://github.com/mikejgregory) (Senior UI Designer)
  * [Tom Davidson](https://github.com/Tom-Davidson) (Head of Technology)
  * [Toolkit Maintainers](https://github.com/sky-uk/toolkit#maintainers)

The Toolkit Maintainers and Design Team are here to help facilitate this process
and offer guidance. If you have any questions or concerns please [talk to us](https://sky.slack.com/messages/design-systems)!

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

### Setting Up Git

We want to set up Git to make our workflow as seamless and automated as
possible. We’re going to configure Git to utilise your preferred text editor
_and_ to use a specific commit message template. Just a couple of things to make
your life a little easier.

```bash
$ cd toolkit
# Tell Git to use your preferred text editor (see below):
$ git config core.editor <your editor here>
# Tell Git to prepopulate commit messages with our template
$ git config commit.template ./.github/.git-commit-template
```

**N.B.** You need to be able to open your editor from the CLI. For Atom, replace
`<your editor here>` with `atom --wait`; for VS Code, `code --wait`. For other
text editors, simply Google [_open EDITOR from command
line_](https://www.google.com/search?q=open+EDITOR+from+command+line&oq=open+EDITOR+from+command+line&aqs=chrome..69i57j0l5.6702j0j7&sourceid=chrome&ie=UTF-8).

Now, whenever you run `git commit`, you will be taken to your text editor
(instead of the default, Vim) where you can write your commit messages. Save and
close your editor, and the commit is done.

### Branching Strategy

Toolkit comprises three main branches:

1. **`master`:** Our release branch that everybody consumes. This branch is the
   one that gets tagged, versioned and deployed to npm.
2. **`develop`:** Our stable branch that we branch from and merge into. This is
   our working branch.
3. **`tkt-#####`:** Our topic branches in which we carry out work. As we will
   learn below, each of these branches is named in reference to a specific
   GitHub issue.

```
                          * tkt-#####
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

`tkt-#####` is branched off `develop` is branched off `master`.

Work in `tkt-#####` is merged into `develop` via a pull request; work in
`develop` is merged into `master` on the command line before rolling an official
release (**Core Maintainers only**).

Nine times out of ten, you will be working in a `tkt-` branch.

#### ghi

Now that branches are named after issue, it’s not as immediately clear what each
branch is responsible for. [ghi](https://github.com/stephencelis/ghi) is a great
little tool that allows you to query GitHub issues from the command line. Let’s
imagine that `git branch` leaves you looking at this:

```bash
$ git branch
  develop
  master
* tkt-224
  tkt-220
  tkt-209
  tkt-141
```

If I run `ghi 220` I soon find that branch `tkt-220` relates to issue #220,
_Tabs navigation width issue with many tabs_.

### Committing Workflow

1. Every piece of work should have a corresponding issue on GitHub (e.g.
   `issues/224`).
2. Check out `develop` and ensure you have the latest upstream changes:

        $ cd toolkit
        $ git checkout develop
        $ git pull
3. Create a new branch named after your issue:

        $ git checkout -b tkt-224

   All commits pertaining to this issue must happen within this branch.
4. Commits in this branch should be done using `npm run commit` or `yarn commit`.
   This will take you through a series of prompts that will build a commit which resembles:

        feature(toolkit-ui): added new ui component

NOTE: Toolkit has commitlint enabled, so if your commit doesn't follow the correct structure it will not create the commit.

### Why?

A more formalised and strict Git strategy means that

1. **We’ll have a nice, clean, respectable public history.** There’s a lot of
   great work in Toolkit; we should be equally proud of our log of it.
2. **Grepping logs for work pertaining to specific issues becomes trivial.** If
   we wanted to see all of the commits that are related to a specific body of
   work, it’s now as simple as:

        $ git log --grep='refs #235'
3. **We can easily locate work pertaining to an issue by simply matching issue
   numbers to branch names.** Imagine a colleague was working on an issue but
   then suddenly fell ill and you needed to pick up where they left off. Now all
   you have to do is look at the issue number, and checkout its corresponding
   branch. All work becomes centralised and easy to find.

## Pull Requests

For new design features, please see the [Design Contribution]
(#design-contributions) guidelines before continuing.

1. Create a new local branch for your work.
    * This branch should be named `tkt-<issue numner>`, e.g. `tkt-215`,
      `tkt-87`, `tkt-1209`.
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

### Contributions

* Every core maintainer will complete 1 ticket per month.
* Work is done in priority order according to the
   [backlog](https://waffle.io/sky-uk/toolkit).

If you feel like you can’t meet these responsibilities, please contact one of
the core maintainers or [Tom Davidson](@tom-davidson).

## Releases

1. Ensure the fully-approved PR is up to date with `develop`.
    * If necessary, run `git rebase develop` within the branch. **Avoid** using
      GitHub's "update branch" button as it leaves us with unhelpful merge
      commit messages.
2. Merge the fully-approved PR into `develop` via the "Merge pull request" button.
    * If handling multiple PRs, go back to Step 1 until all are merged. Then continue to Step 3.
3. Run `git checkout develop && git pull`.
4. Run `git checkout master && git pull`.
5. Run `git merge develop`.
6. Run `npm i && lerna bootstrap`.
7. Include all new functional changes in the appropriate `CHANGELOG.md`(s).
    * Pro tip: use the following command to get a commit summary of changes.

        ```
        $ git log --oneline <last tag>.. -- packages/sky-toolkit-[core|ui]/
        ```
8. Commit the `CHANGELOG.md` changes to `master`.
   * Don't worry about issue references here, a simple `"Update CHANGELOG"` or `"Update CHANGELOGs"` will do.
9. Run `lerna publish`.
    * Be sure to read and follow the wizard very carefully, the version numbers will be decided based on
    the commits done since the last release.
10. Check the compiled assets have been published via CircleCI to S3 (this may
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
11. Go to [Toolkit/Releases](https://github.com/sky-uk/toolkit/releases), and
    check the tag exists.
    * If the tag exists, congrats! Now create a [**new**
      release](https://github.com/sky-uk/toolkit/releases/new) that utilises that
      tag.
    * If the tag doesn't exist, something went wrong.
12. Communicate changes out on Slack.
13. Update our `develop` branch with `master`.
    * Run `git checkout develop && git merge master && git push`
