import React from 'react';
import Header from '../components/Header.js';
import SideBar from '../components/SideBar.js';
import PlaygroundContents from '../components/PlaygroundContents.js';
import Footer from '../components/Footer.js';

export default class Playground extends React.Component {
    render() {
        return ( 
            <div className="playground">
                <Header />
                <SideBar />
                <PlaygroundContents />
                <Footer />
            </div>
        );
    }
}
