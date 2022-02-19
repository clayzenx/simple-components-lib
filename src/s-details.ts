import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('s-details')
export class SDetails extends LitElement {
  static styles = css`
    summary {
      cursor: pointer
    }
    summary::marker {
      content: ''
    }
  `

  @property({ type: Boolean, reflect: true })
  open = false

  toggle() {
    this.open = !this.open
  }

  render() {
    return html`
      <div @click="${this.toggle}">
        <summary>
          <slot name="summary"></slot>
        </summary>
        ${this.open ? html`<slot name="content"><slot>` : ''}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    's-details': SDetails
  }
}
