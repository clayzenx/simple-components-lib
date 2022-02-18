import { html } from 'lit-html';
import "../s-tabs";
import "../s-button";

export interface STabsProps {
  tab?: string
  view?: string
}

export const STabs = ({ tab = 'tab1', view = 'view' }: STabsProps) => {

  return html`
    <s-tabs>
      <s-button slot="tab" type="link">${tab}</s-button>

      <div slot="view">${view}</div>
    </s-tabs>
  `;
};
