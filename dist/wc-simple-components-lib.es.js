import { css, LitElement, html } from "lit";
import { property, customElement } from "lit/decorators.js";
var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
console.log('asd')
var __decorateClass$3 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$3(target, key, result);
  return result;
};
let SButton = class extends LitElement {
  constructor() {
    super(...arguments);
    this.type = "button";
  }
  toggleActive() {
    this.toggleAttribute("enabled");
  }
  render() {
    return html`
      <div 
        class=${this.type} 
        @click=${this.type === "toggle" ? this.toggleActive : null}>
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
__decorateClass$3([
  property({ type: String })
], SButton.prototype, "type", 2);
SButton = __decorateClass$3([
  customElement("s-button")
], SButton);
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$2(target, key, result);
  return result;
};
let SNav = class extends LitElement {
  constructor() {
    super(...arguments);
    this.direction = "column";
  }
  _changeActive(e) {
    var _a, _b;
    const target = e.target.closest("[slot='nav-item']");
    const items = (_b = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("slot[name='nav-item']")) == null ? void 0 : _b.assignedElements();
    if (target && items.length)
      items.forEach((item) => item.id === target.id ? item.setAttribute("active", "") : item.removeAttribute("active"));
  }
  render() {
    return html`
      <nav style=${`flex-direction: ${this.direction}`}>
         <slot name="nav-item" @click="${this._changeActive}"></slot>
      </nav>
    `;
  }
};
SNav.styles = css`
    nav {display:flex; }
  `;
__decorateClass$2([
  property({ type: String, reflect: true })
], SNav.prototype, "direction", 2);
SNav = __decorateClass$2([
  customElement("s-nav")
], SNav);
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
let SDetails = class extends LitElement {
  constructor() {
    super(...arguments);
    this.open = false;
  }
  toggle() {
    this.open = !this.open;
  }
  render() {
    return html`
      <div @click="${this.toggle}">
        <summary>
          <slot name="summary"></slot>
        </summary>
        ${this.open ? html`<slot name="content"><slot>` : ""}
      </div>
    `;
  }
};
SDetails.styles = css`
    summary {
      cursor: pointer
    }
    summary::marker {
      content: ''
    }
  `;
__decorateClass$1([
  property({ type: Boolean, reflect: true })
], SDetails.prototype, "open", 2);
SDetails = __decorateClass$1([
  customElement("s-details")
], SDetails);
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
let SAccordion = class extends LitElement {
  _changeOpen(e) {
    var _a, _b;
    const target = e.target.closest("[slot='accordion-item']");
    const items = (_b = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("slot[name='accordion-item']")) == null ? void 0 : _b.assignedElements();
    if (target && items.length)
      items.forEach((item) => item.id === target.id ? item.setAttribute("open", "") : item.removeAttribute("open"));
  }
  render() {
    return html`
      <div>
        <slot name="accordion-item" @click="${this._changeOpen}"></slot>
      </div>
    `;
  }
};
SAccordion.styles = css`
  `;
SAccordion = __decorateClass([
  customElement("s-accordion")
], SAccordion);
