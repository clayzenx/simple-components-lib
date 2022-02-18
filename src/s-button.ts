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


  toggleActive() {
    this.toggleAttribute('enabled')
  }

  render() {
    return html`
      <div 
        class=${this.type} 
        @click=${this.type === "toggle" ? this.toggleActive : null
      }>
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
