import "../s-nav";
import "../s-button";
export interface SNavProps {
    navItem?: string;
    direction?: string;
    id?: number;
}
export declare const SNav: ({ navItem, id, direction }: SNavProps) => import("lit-html").TemplateResult<1>;
