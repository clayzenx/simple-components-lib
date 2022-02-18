import { LitElement } from 'lit';
export declare class SButton extends LitElement {
    static styles: import("lit").CSSResult;
    type: SButtonType;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        's-button': SButton;
    }
}
