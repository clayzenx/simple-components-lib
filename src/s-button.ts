import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('s-button')
export class SButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      cursor: pointer;
    }
    .button {
      border: 1px solid black;
      padding: 10px 15px;
    }
  `

  @property({ type: String })
  type: SButtonType = "button"

  render() {
    return html`
      <div class=${this.type}>
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
