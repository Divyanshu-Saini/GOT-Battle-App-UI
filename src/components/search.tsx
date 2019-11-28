import * as React from 'react';
import Axios from 'axios';
import Battle from './battle';

export interface ISearchProps {

}

export interface ISearchState {
    query: any,
    BattleList: [],
}

export default class Search extends React.Component<ISearchProps, ISearchState> {

    constructor(props: ISearchProps) {
        super(props);

        this.state = {
            query: 'king=Robb Stark&location=Riverrun&type=siege',
            BattleList: []
        };
    }

    handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const q = e.target.value;
        this.setState({ query: q })
    }

    handleClick(e: any) {
        const { query } = this.state;
        Axios
            .get(`https://got-battle-api-ds.herokuapp.com/search?${query}`)
            .then(res => {
                let battleList = res.data.filter((filterData: any) => filterData != '');
                this.setState({ BattleList: battleList })
            })
    }

    public render() {
        const { query, BattleList } = this.state;
        return (
            <div className="pad-top">
                <div className="row">
                    <div className="col s12">
                        <div className="row">
                            <div className="input-field col s10">
                                <input type="text" className="validate" id="Search" value={query} onChange={e => this.handleInputChange(e)} />
                                <label htmlFor="Search">Search</label>
                            </div>
                            <div className="search-margin-top col s2">
                                <button className="waves-effect waves-light btn-small brown lighten-2" onClick={e => this.handleClick(e)}>
                                    <i className="material-icons prefix">search</i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        {BattleList.length > 0 ?
                            (<ul className="collection with-header ">
                                <li className="collection-item brown lighten-1">
                                    <h6> {` Search Result `}</h6>
                                </li>
                                {BattleList.map((battleNmae: string, key: any) => {
                                    return <Battle BattleName={battleNmae} key={key} />
                                })}
                            </ul>) : null}
                    </div>
                    <div className="col s12">
                        <img className="responsive-img" src={require('../assets/bg.png')} alt="bg" />
                    </div>
                </div>
            </div>
        );
    }
}
