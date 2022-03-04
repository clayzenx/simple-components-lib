import { html } from 'lit-html';
import "../s-nav";
import "../s-button";
import "../s-details";

export interface SDetailsProps {
  summary?: string
  content?: string
  isOpen?: boolean
}

export const SDetails = ({ summary, content, isOpen }: SDetailsProps) => {
  return isOpen ?
    html`
    <style>
      [open] s-button {
        color: green;
      }
    </style>
    
    <s-details open>
      <s-button slot="summary" type="link">${summary}</s-button>
      <span slot="content">${content}</span>
    </s-details>
  `:
    html`
    <s-details>
      <s-button slot="summary" type="link">${summary}</s-button>
      <span slot="content">${content}</span>
    </s-details>
  `
}; 
