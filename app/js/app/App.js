import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Footer />
                <SideBar />
                {this.props.children}
            </div>
        );
    }
};
