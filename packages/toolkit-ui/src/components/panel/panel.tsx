import { Component, Prop } from '@stencil/core';
// import classnames from 'classnames';

@Component({
  tag: 'sky-panel',
  styleUrl: '_index.scss'
})
export class SkyPanel {

  @Prop() modifier: string = 'primary';
  @Prop() stateModifier: string;
  @Prop() text: string;
  @Prop() className: string;

  render() {
    // const classNames = classnames(
    //   'c-btn',
    //   {
    //     [`c-btn--${this.modifier}`]: typeof this.modifier !== 'undefined'
    //   },
    //   this.className
    // );

    return (
      <article class="c-panel c-panel--dark is-open">
        <div class="c-panel__content">
          <div class="o-container">
            <slot />
          </div>
        </div>
      </article>
    );
  }
}
