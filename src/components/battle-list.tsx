import * as React from 'react';
import axios from 'axios';

import Battle from './battle';

export interface IBattleListProps {
}

export interface IBattleListState {
    BattleList: [],
    TotalBattle: number
}

export default class BattleList extends React.Component<IBattleListProps, IBattleListState> {
    constructor(props: IBattleListProps) {
        super(props);

        this.state = {
            BattleList: [],
            TotalBattle: 0
        }
    }

    componentDidMount() {
        // fetch list of battles.
        axios
            .get('https://prdxn-got-battle-api.herokuapp.com/list')
            .then(res => {
                let battleList = res.data.filter((filterData: any) => filterData != '');
                this.setState({ BattleList: battleList })
                console.log(this.state.BattleList);
            })
        // fetching Battle count
        axios
            .get('https://prdxn-got-battle-api.herokuapp.com/count')
            .then(res => {
                this.setState({ TotalBattle: res.data.totalBattle })
            })

    }

    public render() {
        const { TotalBattle, BattleList } = this.state;
        return (
            <div>
                <ul className="collection with-header ">
                    <li className="collection-header grey lighten-1">
                        <h5> {`${TotalBattle} Battle Occure in Game Of Throne`}</h5>
                    </li>
                    {BattleList.map((battleNmae: string) => {
                        return <Battle BattleName={battleNmae} />
                    })}
                </ul>
            </div>
        );
    }
}
