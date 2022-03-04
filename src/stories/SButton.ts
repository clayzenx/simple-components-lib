import { html } from 'lit-html';
import "../s-button"

export interface SButtonProps {
  type?: string
  slot?: string
}

export const SButton = ({ slot, type }: SButtonProps) => {

  return html`
    <style>
      [type="link"] {
        color: lightblue;
      }
      [type="button"] {
        border: 1px solid grey;
        padding: 5px;
      }
      [type="toggle"]{
        color: red;
      }
      [type="toggle"][enabled] {
        color: green
      }
    </style>
    <s-button type=${type}>
      ${slot}
    </s-button>
  `;
};
