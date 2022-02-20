import { LitElement } from 'lit';
export declare class SDetails extends LitElement {
    static styles: import("lit").CSSResult;
    open: boolean;
    toggle(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        's-details': SDetails;
    }
}
