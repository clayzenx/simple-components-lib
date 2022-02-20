import { html } from 'lit-html';
import "../s-nav";
import "../s-button";

export interface SNavProps {
  navItem?: string
  direction?: string
  id?: number
}

export const SNav = ({ navItem = 'nav1', id = 1, direction = 'column' }: SNavProps) => {

  return html`
    <s-nav direction=${direction}>
      <s-button slot="nav-item" id="${id}" type="link" class="tab" active>${navItem}</s-button>
    </s-nav>
  `;
};
