import React from 'react';
import Header from '../components/Header.js';
import SideBar from '../components/SideBar.js';
import ProfileContents from '../components/ProfileContents.js';
import Footer from '../components/Footer.js';

export default class Playground extends React.Component {
    render() {
        return ( 
            <div className="playground">
                <Header />
                <SideBar />
                <ProfileContents />
                <Footer />
            </div>
        );
    }
}
