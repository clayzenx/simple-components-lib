import { html } from 'lit-html';
import "../s-nav";
import "../s-button";

export interface SNavProps {
  direction?: 'row' | 'column'
}

export const SNav = ({ direction }: SNavProps) => {

  return direction === "row" ? html`
    <style>
      [active] {
        color: green
      }
      s-button {
        padding: 5px;
        cursor: pointer;
      }
      s-button[active] {
        border-bottom: 2px solid green
      }
    </style>
    <s-nav direction="row">
      <s-button slot="nav-item" id="/home" type="link" class="tab" active>Home</s-button>
      <s-button slot="nav-item" id="/catalog" type="link" class="tab">Catalog</s-button>
      <s-button slot="nav-item" id="/about" type="link" class="tab">About</s-button>
    </s-nav>
  `:
    html`
    <style>
      [active] {
        color: green
      }
      s-button {
        padding: 5px;
        cursor: pointer;
      }
      s-button[active] {
        border-bottom: 2px solid green
      }

    </style>
    <s-nav direction="column">
      <s-button slot="nav-item" id="/home" type="link" class="tab" active>Home</s-button>
      <s-button slot="nav-item" id="/catalog" type="link" class="tab">Catalog</s-button>
      <s-button slot="nav-item" id="/about" type="link" class="tab">About</s-button>
    </s-nav>
  `
};
