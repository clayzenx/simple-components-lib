import './header.css';
export interface HeaderProps {
    user?: {};
    onLogin?: () => void;
    onLogout?: () => void;
    onCreateAccount?: () => void;
}
export declare const Header: ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => import("lit-html").TemplateResult<1>;
