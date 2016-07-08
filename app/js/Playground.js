import React from 'react';
import Header from './components/Header.js';
import SideBar from './components/SideBar.js';
import Footer from './components/Footer.js';

export default class Playground extends React.Component {
    render() {
        return ( 
            <div className="playground">
                <Header />
                <SideBar />
                <Footer />
            </div>
        );
    }
}
