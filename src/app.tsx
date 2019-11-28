import { hot } from "react-hot-loader/root";
import * as React from 'react';

import Header from './components/header';
import Footer from './components/footer';
import BattleList from './components/battle-list';
import Search from "./components/search";

declare global {
    interface Window {
        M: any;
    }
}
interface Props {
}

class App extends React.Component<Props> {
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col m6 s12">
                        <Search />
                    </div>
                    <div className="col m6 s12">
                        <BattleList />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default hot(App);
