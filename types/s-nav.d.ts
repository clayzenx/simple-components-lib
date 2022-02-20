import { LitElement } from 'lit';
export declare class SNav extends LitElement {
    static styles: import("lit").CSSResult;
    direction: string;
    private _changeActive;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        's-nav': SNav;
    }
}
