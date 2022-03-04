import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'


@customElement('s-accordion')
export class SAccordion extends LitElement {
  static styles = css`
  `

  private _changeOpen(e: Event) {
    const target = (e.target as HTMLElement).closest("[slot='accordion-item']");
    const items = (this.shadowRoot?.querySelector("slot[name='accordion-item']") as HTMLSlotElement)?.assignedElements()

    if (target && items.length)
      items.forEach(item =>
        item.id === target.id
          ? item.setAttribute('open', '')
          : item.removeAttribute('open')
      )

  }

  render() {
    return html`
      <div>
        <slot name="accordion-item" @click="${this._changeOpen}"></slot>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    's-accordion': SAccordion
  }
}
