import * as React from 'react';

export interface ISearchProps {
}

export interface ISearchState {
}

export default class Search extends React.Component<ISearchProps, ISearchState> {

    constructor(props: ISearchProps) {
        super(props);

        this.state = {
        };
    }

    handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value)

    }

    public render() {
        return (
            <div className="pad-top">
                <div className="row">
                    <nav className="grey">
                        <div className="nav-wrapper">
                            <div className="input-field">
                                <input id="search" type="text" onChange={this.handleInputChange} />
                                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                                <i className="material-icons">close</i>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="row">

                </div>
            </div>
        );
    }
}
