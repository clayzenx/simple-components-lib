import { html } from 'lit-html';
import "../s-nav";
import "../s-button";

export interface SDetailsProps {
  summary?: string
  content?: string
}

export const SDetails = ({ summary = 'summary', content = 'content' }: SDetailsProps) => {

  return html`
    <s-details>
      <s-button slot="summary" type="link">${summary}</s-button>
      <span slot="content">${content}</span>
    </s-details>
  `;
};
