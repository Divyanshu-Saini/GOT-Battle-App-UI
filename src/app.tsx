import { hot } from "react-hot-loader/root";
import * as React from 'react';

import Header from './components/header';
import Footer from './components/footer';
interface Props {
}

class App extends React.Component<Props> {
    render() {
        return (
            <div>
                <Header />
                <p>Hello</p>
                <Footer />
            </div>
        );
    }
}

export default hot(App);
