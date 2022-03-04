import { html, css, LitElement } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

@customElement('s-repo-card')
export class SRepoCard extends LitElement {
  static styles = css`
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
  `

  @property({ type: String })
  slug: String = ""

  @state()
  protected repo: Repo = null

  @state()
  protected colors: Colors = null;

  async connectedCallback() {
    super.connectedCallback();
    console.log('asd')
    fetch(`https://api.github.com/repos/${this.slug}`).then(r => r.json())
      .then(({
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
        }
      });
    let colors: Promise<Colors> = await fetch("https://raw.githubusercontent.com/ozh/github-colors/master/colors.json").then(r => r.json())
    this.colors = await colors
    console.log(this.colors)
  }

  lastUpdateFormat() {
    const lastUpdate = Date.parse(this.repo?.updated_at || '')
    const now = Date.now();
    const delta = (now - lastUpdate) / 1000
    if (delta < 60) {
      return `${Math.round(delta)} seconds ago`
    } else if (delta < 3600) {
      return `${Math.round(delta / 60)} minutes ago`
    } else if (delta < 86400) {
      return `${Math.round(delta / 60 / 60)} hours ago`
    } else if (delta < 2592000) {
      return `${Math.round(delta / 60 / 60 / 24)} days ago`
    } else if (delta < 31104000) {
      return `${Math.round(delta / 60 / 60 / 24 / 30)} months ago`
    } else return `${Math.round(delta / 60 / 60 / 24 / 30 / 24)} years ago`
  }

  render() {
    return html`
      <div class="row g15">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill-rule="evenodd" d="M3 2.75A2.75 2.75 0 015.75 0h14.5a.75.75 0 01.75.75v20.5a.75.75 0 01-.75.75h-6a.75.75 0 010-1.5h5.25v-4H6A1.5 1.5 0 004.5 18v.75c0 .716.43 1.334 1.05 1.605a.75.75 0 01-.6 1.374A3.25 3.25 0 013 18.75v-16zM19.5 1.5V15H6c-.546 0-1.059.146-1.5.401V2.75c0-.69.56-1.25 1.25-1.25H19.5z"></path><path d="M7 18.25a.25.25 0 01.25-.25h5a.25.25 0 01.25.25v5.01a.25.25 0 01-.397.201l-2.206-1.604a.25.25 0 00-.294 0L7.397 23.46a.25.25 0 01-.397-.2v-5.01z"></path></svg> <a class="link" href="${this.repo?.html_url}">${this.repo?.name}</a>
      </div>
      <div class="row">
        <p class="description">${this.repo?.description}</p>
      </div>
      <div class="row g15">
        <span style="display: flex; align-items: center; gap: 5px">
          ${this.colors ? html`<div class="circle" style="background-color:${this.colors[this.repo?.language || "HTML"].color}"></div>` : ''}
          <span class="lang">${this.repo?.language}</span>
        </span> 
        ${this.repo?.stargazers_count ? html` 
          <span class="row g5">
            <svg class="svg" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-2">
              <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
            </svg>
            <span class="small-text"><strong>${this.repo?.stargazers_count}</strong> stars</span>
          </span>
        ` : ''}         
        ${this.repo?.fork ? html` 
          <span class="row g5">
            <svg class="svg" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked mr-2">
              <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
            </svg>
            <span class="small-text"><strong>${this.repo?.forks}</strong> forks</span>
          </span>
        ` : ''}
        <span class="updated-text">updated at ${this.lastUpdateFormat()}</span>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    's-repo-card': SRepoCard
  }
}
