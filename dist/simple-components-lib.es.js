import { css, LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$1(target, key, result);
  return result;
};
let STabs = class extends LitElement {
  _changeActive(e) {
    var _a, _b;
    const target = e.target.closest("[slot='tab']");
    const tabs = (_b = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("slot[name='tab']")) == null ? void 0 : _b.assignedElements();
    if (target && tabs.length)
      tabs.forEach((tab) => tab.id === target.id ? tab.setAttribute("active", "") : tab.removeAttribute("active"));
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
    `;
  }
};
STabs.styles = css`
    :host {
      display: flex;
      flex-direction: column;
    }
    nav { display: flex; }
  `;
STabs = __decorateClass$1([
  customElement("s-tabs")
], STabs);
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let SButton = class extends LitElement {
  constructor() {
    super(...arguments);
    this.type = "button";
  }
  render() {
    return html`
      <div class=${this.type}>
        <slot></slot>
      </div>
    `;
  }
};
SButton.styles = css`
    :host {
      display: inline-block;
      cursor: pointer;
    }
    .button {
      border: 1px solid black;
      padding: 10px 15px;
    }
  `;
__decorateClass([
  property({ type: String })
], SButton.prototype, "type", 2);
SButton = __decorateClass([
  customElement("s-button")
], SButton);
