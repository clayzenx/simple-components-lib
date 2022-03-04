import { LitElement } from 'lit';
export declare class SRepoCard extends LitElement {
    static styles: import("lit").CSSResult;
    slug: String;
    protected repo: Repo;
    protected colors: Colors;
    connectedCallback(): Promise<void>;
    lastUpdateFormat(): string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        's-repo-card': SRepoCard;
    }
}
