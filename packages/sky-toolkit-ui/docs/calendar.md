---
title: Calendar
introduction: |
  The calendar component is used to present a range of dates to a user and
  indicates their availability. The user can make a selection and be presented
  with a confirmation of their choice.

  Navigation controls are provided, allowing availability to be viewed one month
  at a time.
source: sky-toolkit-ui/components/calendar
dependencies:
  - sky-toolkit-core
contributors:
  - turnbackdesign
  - steveduffin
layout: component
---

# Calendar

## Base

### Calendar

This is the calendar in its basic default form. The information is arranged in a
table format to provide semantic meaning and create a relationship between days,
dates and month.

The optional `.c-calendar-container` class can be used to contain the calendar
and any related content (e.g. form fields) to optimum size.

Accessibility has been carefully considered and best practice for assistive
technology (AT) support is reflected in the sample markup. Note the inclusion of
`aria-×` and `role` attributes which provide meaningful
control and context to ATs.

```html
<div class="c-calendar-container">
  <div class="c-calendar" role="application" aria-label="Calendar">
    <span class="u-hide-visually">Selected date is Friday 15th April 2016</span>
    <span class="u-hide-visually" role="heading">Currently displaying available dates for April 2016.</span>
    <button aria-label="Navigate to previous month" class="c-calendar__nav c-calendar__nav--prev">
      <svg class="c-calendar__nav-icon">
        <!-- SVG path -->
      </svg>
    </button>
    <button aria-label="Navigate to next month" class="c-calendar__nav c-calendar__nav--next">
      <svg class="c-calendar__nav-icon">
        <!-- SVG path -->
      </svg>
    </button>
    <table class="c-calendar__month" role="presentation">
      <thead>
        <tr>
          <th class="c-calendar__title" colspan="7">
            <span role="presentation" aria-hidden="true">April 2016</span>
          </th>
        </tr>
        <tr>
          <th><abbr aria-label="Monday" aria-hidden="true" class="c-calendar__weekday" tabindex="-1" title="Monday">Mo</abbr></th>
          <th><abbr aria-label="Tuesday" aria-hidden="true" class="c-calendar__weekday" tabindex="-1" title="Tuesday">Tu</abbr></th>
          <th><abbr aria-label="Wednesday" aria-hidden="true" class="c-calendar__weekday" tabindex="-1" title="Wednesday">We</abbr></th>
          <th><abbr aria-label="Thursday" aria-hidden="true" class="c-calendar__weekday" tabindex="-1" title="Thursday">Th</abbr></th>
          <th><abbr aria-label="Friday" aria-hidden="true" class="c-calendar__weekday" tabindex="-1" title="Friday">Fr</abbr></th>
          <th><abbr aria-label="Saturday" aria-hidden="true" class="c-calendar__weekday" tabindex="-1" title="Saturday">Sa</abbr></th>
          <th><abbr aria-label="Sunday" aria-hidden="true" class="c-calendar__weekday" tabindex="-1" title="Sunday">Su</abbr></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><button class="c-calendar__day is-disabled" aria-hidden="true" tabindex="-1">1</button></td>
          <td><button class="c-calendar__day is-disabled" aria-hidden="true" tabindex="-1">2</button></td>
        </tr>
        <tr>
          <td><button class="c-calendar__day is-disabled" aria-hidden="true" tabindex="-1">3</button></td>
          <td><button class="c-calendar__day is-disabled" aria-hidden="true" tabindex="-1">4</button></td>
          <td><button class="c-calendar__day is-disabled" aria-hidden="true" tabindex="-1">5</button></td>
          <td><button class="c-calendar__day is-disabled" aria-hidden="true" tabindex="-1">6</button></td>
          <td><button class="c-calendar__day is-disabled" aria-hidden="true" tabindex="-1">7</button></td>
          <td><button class="c-calendar__day is-disabled" aria-hidden="true" tabindex="-1">8</button></td>
          <td><button class="c-calendar__day is-disabled" aria-hidden="true" tabindex="-1">9</button></td>
        </tr>
        <tr>
          <td><button class="c-calendar__day is-disabled" aria-hidden="true" tabindex="-1">10</button></td>
          <td><button class="c-calendar__day is-disabled" aria-hidden="true" tabindex="-1">11</button></td>
          <td><button class="c-calendar__day is-disabled" aria-hidden="true" tabindex="-1">12</button></td>
          <td><button class="c-calendar__day is-disabled" aria-hidden="true" tabindex="-1">13</button></td>
          <td><button class="c-calendar__day is-disabled" aria-hidden="true" tabindex="-1">14</button></td>
          <td><button aria-selected="true" aria-label="Saturday 15th April 2016 is currently selected" class="c-calendar__day is-selected">15</button></td>
          <td><button aria-label="Sunday 16th April 2016 available" class="c-calendar__day">16</button></td>
        </tr>
        <tr>
          <td><button aria-label="Monday 17th April 2016 available" class="c-calendar__day">17</button></td>
          <td><button class="c-calendar__day is-disabled" aria-hidden="true" tabindex="-1">18</button></td>
          <td><button class="c-calendar__day is-disabled" aria-hidden="true" tabindex="-1">19</button></td>
          <td><button class="c-calendar__day is-disabled" aria-hidden="true" tabindex="-1">20</button></td>
          <td><button class="c-calendar__day is-disabled" aria-hidden="true" tabindex="-1">21</button></td>
          <td><button aria-label="Saturday 22nd April 2016 available" class="c-calendar__day">22</button></td>
          <td><button aria-label="Sunday 23rd April 2016 available" class="c-calendar__day">23</button></td>
        </tr>
        <tr class="c-calendar__week">
          <td><button aria-label="Monday 24th April 2016 available" class="c-calendar__day">24</button></td>
          <td><button aria-label="Tuesday 25th April 2016 available" class="c-calendar__day">25</button></td>
          <td><button class="c-calendar__day is-disabled" aria-hidden="true" tabindex="-1">26</button></td>
          <td><button class="c-calendar__day is-disabled" aria-hidden="true" tabindex="-1">27</button></td>
          <td><button class="c-calendar__day is-disabled" aria-hidden="true" tabindex="-1">28</button></td>
          <td><button class="c-calendar__day is-disabled" aria-hidden="true" tabindex="-1">29</button></td>
          <td><button class="c-calendar__day is-disabled" aria-hidden="true" tabindex="-1">30</button></td>
        </tr>
      </tbody>
    </table>
    <div class="c-calendar__feedback">
      <h3 class="c-text-body u-margin-bottom-none" role="heading">Your selected installation date is</h3>
      <p class="c-text-lead u-margin-bottom-small">Friday 15th April 2016</p>
    </div>
  </div>
</div>
```

### Day

`.c-calendar__day`s are the key interaction elements of the calendar component,
allowing users to select a specific date/s.

All state classes within the calendar are toggled on this element.

```html
<!-- Within `.c-calendar` component -->

<button aria-label="Sunday 16th April 2016 available" class="c-calendar__day">16</button>

<!-- Within `.c-calendar` component -->
```

---

## States

### Selected

Highlights the currently selected date, which should be removed and reassigned
as the user makes their selection.

It’s recommended that the first available date is preselected.

```html
<button class="c-calendar__day is-selected">15</button>
```

### Disabled

Visually indicates that a date is unavailable for selection.

Note the important use of `aria-hidden` and `tabindex` to prevent sequential
keyboard / AT navigation.

```html
<button class="c-calendar__day is-disabled" aria-hidden="true" tabindex="-1">15</button>
```
