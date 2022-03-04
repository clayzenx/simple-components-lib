import { css, LitElement, html } from "lit";
import { property, customElement, state } from "lit/decorators.js";
var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __decorateClass$4 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$4(target, key, result);
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
__decorateClass$4([
  property({ type: String })
], SButton.prototype, "type", 2);
SButton = __decorateClass$4([
  customElement("s-button")
], SButton);
var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$3(target, key, result);
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
__decorateClass$3([
  property({ type: String, reflect: true })
], SNav.prototype, "direction", 2);
SNav = __decorateClass$3([
  customElement("s-nav")
], SNav);
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
__decorateClass$2([
  property({ type: Boolean, reflect: true })
], SDetails.prototype, "open", 2);
SDetails = __decorateClass$2([
  customElement("s-details")
], SDetails);
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
SAccordion = __decorateClass$1([
  customElement("s-accordion")
], SAccordion);
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
let SRepoCard = class extends LitElement {
  constructor() {
    super(...arguments);
    this.slug = "";
    this.repo = null;
    this.colors = null;
  }
  async connectedCallback() {
    super.connectedCallback();
    console.log("asd");
    fetch(`https://api.github.com/repos/${this.slug}`).then((r) => r.json()).then(({
      name,
      html_url,
      homepage,
      description,
      language,
      stargazers_count,
      fork,
      forks,
      updated_at
    }) => {
      this.repo = {
        name,
        html_url,
        homepage,
        description,
        language,
        stargazers_count,
        fork,
        forks,
        updated_at
      };
    });
    let colors = await fetch("https://raw.githubusercontent.com/ozh/github-colors/master/colors.json").then((r) => r.json());
    this.colors = await colors;
    console.log(this.colors);
  }
  lastUpdateFormat() {
    var _a;
    const lastUpdate = Date.parse(((_a = this.repo) == null ? void 0 : _a.updated_at) || "");
    const now = Date.now();
    const delta = (now - lastUpdate) / 1e3;
    if (delta < 60) {
      return `${Math.round(delta)} seconds ago`;
    } else if (delta < 3600) {
      return `${Math.round(delta / 60)} minutes ago`;
    } else if (delta < 86400) {
      return `${Math.round(delta / 60 / 60)} hours ago`;
    } else if (delta < 2592e3) {
      return `${Math.round(delta / 60 / 60 / 24)} days ago`;
    } else if (delta < 31104e3) {
      return `${Math.round(delta / 60 / 60 / 24 / 30)} months ago`;
    } else
      return `${Math.round(delta / 60 / 60 / 24 / 30 / 24)} years ago`;
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    return html`
      <div class="row g15">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill-rule="evenodd" d="M3 2.75A2.75 2.75 0 015.75 0h14.5a.75.75 0 01.75.75v20.5a.75.75 0 01-.75.75h-6a.75.75 0 010-1.5h5.25v-4H6A1.5 1.5 0 004.5 18v.75c0 .716.43 1.334 1.05 1.605a.75.75 0 01-.6 1.374A3.25 3.25 0 013 18.75v-16zM19.5 1.5V15H6c-.546 0-1.059.146-1.5.401V2.75c0-.69.56-1.25 1.25-1.25H19.5z"></path><path d="M7 18.25a.25.25 0 01.25-.25h5a.25.25 0 01.25.25v5.01a.25.25 0 01-.397.201l-2.206-1.604a.25.25 0 00-.294 0L7.397 23.46a.25.25 0 01-.397-.2v-5.01z"></path></svg> <a class="link" href="${(_a = this.repo) == null ? void 0 : _a.html_url}">${(_b = this.repo) == null ? void 0 : _b.name}</a>
      </div>
      <div class="row">
        <p class="description">${(_c = this.repo) == null ? void 0 : _c.description}</p>
      </div>
      <div class="row g15">
        <span style="display: flex; align-items: center; gap: 5px">
          ${this.colors ? html`<div class="circle" style="background-color:${this.colors[((_d = this.repo) == null ? void 0 : _d.language) || "HTML"].color}"></div>` : ""}
          <span class="lang">${(_e = this.repo) == null ? void 0 : _e.language}</span>
        </span> 
        ${((_f = this.repo) == null ? void 0 : _f.stargazers_count) ? html` 
          <span class="row g5">
            <svg class="svg" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-2">
              <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
            </svg>
            <span class="small-text"><strong>${(_g = this.repo) == null ? void 0 : _g.stargazers_count}</strong> stars</span>
          </span>
        ` : ""}         
        ${((_h = this.repo) == null ? void 0 : _h.fork) ? html` 
          <span class="row g5">
            <svg class="svg" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked mr-2">
              <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
            </svg>
            <span class="small-text"><strong>${(_i = this.repo) == null ? void 0 : _i.forks}</strong> forks</span>
          </span>
        ` : ""}
        <span class="updated-text">updated at ${this.lastUpdateFormat()}</span>
      </div>
    `;
  }
};
SRepoCard.styles = css`
    :host {
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
      font-size: 18px;
      font-weight: 400;
      line-height: 27px;

      width: 100%;
      border-radius: 10px;
      border: 1px solid #e1e4e8;
      display: block;
      padding: 20px;
      color: rgb(88, 96, 105);
    }
    a {
      font-weight: 600;
      color: #0366d6;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline
    }
    .lang {
      font-size: 15px;
    }
    .row {
      display: flex;
      align-items: center;
    }
    .g15 {
      gap: 15px;
    }
    .g5 {
      gap: 5px;
    }
    .circle {
      width: 14px;
      height: 15px;
      border-radius: 15px;
    }
    .small-text {
      font-size: 17px;
      font-weight: 400;
    }
    .updated-text {
      font-size: 14px;
      line-height: 18px;
      font-weight: 300;
    }
    .svg {
      fill: rgb(88, 96, 105);
    }
  `;
__decorateClass([
  property({ type: String })
], SRepoCard.prototype, "slug", 2);
__decorateClass([
  state()
], SRepoCard.prototype, "repo", 2);
__decorateClass([
  state()
], SRepoCard.prototype, "colors", 2);
SRepoCard = __decorateClass([
  customElement("s-repo-card")
], SRepoCard);
