import * as React from 'react';

export interface IHeaderProps {
}

export interface IHeaderState {
}

export default class Header extends React.Component<IHeaderProps, IHeaderState> {
    constructor(props: IHeaderProps) {
        super(props);

        this.state = {
        }
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', () => {
            const elems = document.querySelector('.sidenav');
            window.M.Sidenav.init(elems, {});
        })
    }

    public render() {
        return (
            <nav className="grey darken-1">
                <div className="nav-wrapper">
                    <a className="brand-logo center"><img src={require('../assets/logo.png')} width={55} height={"auto"} /></a>
                    <a href="#" data-target="mNav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <a>Battles List</a>
                        </li>
                        <li>
                            <a>Search Battles</a>
                        </li>
                    </ul>
                    <ul className="sidenav grey darken-2" id="mNav">
                        <li>
                            <a>Battles List</a>
                        </li>
                        <li>
                            <a>Search Battles</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}


