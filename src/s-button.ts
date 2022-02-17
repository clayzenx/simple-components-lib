import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('s-button')
export class SButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      border: 1px solid black;
      padding: 10px 15px;
      cursor: pointer;
    }
  `


  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    's-button': SButton
  }
}
