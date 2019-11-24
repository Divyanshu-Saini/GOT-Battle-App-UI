import * as React from 'react';

export interface IHeaderProps {
}

export default function Header(props: IHeaderProps) {
    return (
        <nav>
            <div className="nav-wrapper">
                <a className="brand-logo"><img src={require('../assets/logo.png')} width={55} height={"auto"} /></a>
                <ul className="right hide-on-med-and-down">
                </ul>
            </div>
        </nav>
    );
}

