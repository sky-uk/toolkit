import { Component, Prop } from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'sky-button',
  styleUrl: '_index.scss'
})
export class SkyButton {

  @Prop() text: string;
  @Prop() href: string;
  @Prop() target: string;
  @Prop() ariaLabel: string;
  @Prop() tooltip: boolean;
  @Prop() dataAttributes = {};
  @Prop() onClick = () => {};
  @Prop() modifier: string = 'primary';
  @Prop() state: string;
  @Prop() innerClass: string;
  @Prop() iconSrc: string;
  @Prop() iconPos: string;

  render() {
    const classNames = classnames(
      'c-btn',
      {
        [`c-btn--${this.modifier}`]: typeof this.modifier !== 'undefined',
        [`is-${this.state}`]: typeof this.state !== 'undefined'
      },
      this.innerClass
    );

    return (
      <button class={classNames}>
        {this.text}
      </button>
    );
  }
}
