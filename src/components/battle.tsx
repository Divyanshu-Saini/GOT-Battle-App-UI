import * as React from 'react';

export interface IBattleProps {
    BattleName: string
}

export default function Battle(props: IBattleProps) {
    const { BattleName } = props;
    return (
        <li className="collection-item grey lighten-2">{BattleName} Battle</li>
    );
}
