import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('s-tabs')
export class STabs extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
    }
    nav { display: flex; }
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
      <div>
        <nav>
          <slot name="tab" @click="${this._changeActive}"></slot>
        </nav>
        <section>
          <slot name="view"></slot>
        </section>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    's-tabs': STabs
  }
}
