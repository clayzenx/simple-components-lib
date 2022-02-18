import { LitElement } from 'lit';
export declare class STabs extends LitElement {
    static styles: import("lit").CSSResult;
    private _changeActive;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        's-tabs': STabs;
    }
}
