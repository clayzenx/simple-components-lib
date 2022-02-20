import { html } from 'lit-html';
import "../s-nav";
import "../s-button";

export interface SAccordionProps {
  summary?: string
  content?: string
}

export const SAccordion = ({ summary = 'summary', content = 'content' }: SAccordionProps) => {

  return html`
    <s-accordion>
      <s-details id="1" slot="accordion-item">
        <s-button slot="summary" type="link">${summary}</s-button>
        <span slot="content">${content}</span>
      </s-details>
    </s-accordion>
  `;
};
