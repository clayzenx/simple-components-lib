import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('s-nav')
export class SNav extends LitElement {
  static styles = css`
    nav {display:flex; }
  `

  @property({ type: String, reflect: true })
  direction = 'column'


  private _changeActive(e: Event) {
    const target = (e.target as HTMLElement).closest("[slot='nav-item']");
    const items = (this.shadowRoot?.querySelector("slot[name='nav-item']") as HTMLSlotElement)?.assignedElements()

    if (target && items.length)
      items.forEach(item =>
        item.id === target.id
          ? item.setAttribute('active', '')
          : item.removeAttribute('active')
      )
  }

  render() {
    return html`
      <nav style=${`flex-direction: ${this.direction}`}>
         <slot name="nav-item" @click="${this._changeActive}"></slot>
      </nav>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    's-nav': SNav
  }
}
