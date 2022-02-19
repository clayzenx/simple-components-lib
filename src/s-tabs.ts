import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('s-tabs')
export class STabs extends LitElement {
  static styles = css`
    nav {display:flex; flex-direction: column}
  `

  private _changeActive(e: Event) {
    const target = (e.target as HTMLElement).closest("[slot='tab']");
    const tabs = (this.shadowRoot?.querySelector("slot[name='tab']") as HTMLSlotElement)?.assignedElements()

    if (target && tabs.length)
      tabs.forEach(tab =>
        tab.id === target.id
          ? tab.setAttribute('active', '')
          : tab.removeAttribute('active')
      )
  }

  render() {
    return html`
      <nav>
         <slot name="tab" @click="${this._changeActive}"></slot>
      </nav>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    's-tabs': STabs
  }
}
