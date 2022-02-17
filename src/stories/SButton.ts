import { html } from 'lit-html';
import "../s-button"

export interface SButtonProps {
  label?: string
}

export const SButton = ({ label = 'Button' }: SButtonProps) => {

  return html`
    <s-button>${label}</s-button>
  `;
};
