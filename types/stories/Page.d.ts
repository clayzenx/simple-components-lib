import './page.css';
export interface PageProps {
    user?: {};
    onLogin?: () => void;
    onLogout?: () => void;
    onCreateAccount?: () => void;
}
export declare const Page: ({ user, onLogin, onLogout, onCreateAccount }: PageProps) => import("lit-html").TemplateResult<1>;
