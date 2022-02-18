import { html } from 'lit-html';
import "../s-button"

export interface SButtonProps {
  type?: string
  slot?: string
}

export const SButton = ({ slot = 'Button', type = 'button' }: SButtonProps) => {

  return html`
    <s-button type=${type}>
      ${slot}
    </s-button>
  `;
};
