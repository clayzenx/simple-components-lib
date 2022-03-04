import { html } from 'lit-html';
import "../s-nav";
import "../s-button";
import "../s-accordion";
import "../s-details";

export const SAccordion = () => {

  return html`
  <s-accordion>
    <s-details id="1" slot="accordion-item">
      <s-button slot="summary" type="link">Delivery</s-button>
      <span slot="content">Delivery help</span>
    </s-details>
    <s-details id="2" slot="accordion-item">
      <s-button slot="summary" type="link">Location</s-button>
      <span slot="content">Location help</span>
    </s-details>
    <s-details id="3" slot="accordion-item">
      <s-button slot="summary" type="link">Privacy polcy</s-button>
      <span slot="content">Privacy policy help</span>
    </s-details>
  </s-accordion>
  `;
};
