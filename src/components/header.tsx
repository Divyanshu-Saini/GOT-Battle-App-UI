import * as React from 'react';

export interface IHeaderProps {
}

export default function Header(props: IHeaderProps) {
    return (
        <nav className="grey darken-1">
            <div className="nav-wrapper">
                <a className="brand-logo center"><img src={require('../assets/logo.png')} width={55} height={"auto"} /></a>
            </div>
        </nav>
    );
}
