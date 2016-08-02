import React from "react";
import { Link } from "react-router";

import Playground from '../playground/Playground';
import Profile from '../profile/Profile';

export default class SideBar extends React.Component {
    render() {
        return ( 
            <div className="right-sidebar">
                {this.getPlayground()}
                {this.getProfile()}
                {this.getSidebar3()}
                {this.getSidebar4()}
                {this.getSportsPlayground()}
                {this.getReadingPlayground()}
            </div>
        );
    }

    getPlayground() {
        return (
            <div className="right-sidebar-item color-sidebar1">
                <Link to="Playground">
                    <div className="right-sidebar-item__icon playground-icon"></div>
                </Link>
            </div>
        );
    }

    getProfile() {
        return (
            <div className="right-sidebar-item color-sidebar2">
                <Link to="Profile">
                    <div className="right-sidebar-item__icon profile-icon"></div>
                </Link>
            </div>
        );
    }

    getSidebar3() {
        return (
            <div className="right-sidebar-item color-sidebar3">
                <Link to="">
                    <div className="right-sidebar-item__icon start-ludo-icon"></div>
                </Link>
            </div>
        );
    }

    getSidebar4() {
        return (
            <div className="right-sidebar-item color-sidebar4">
                <Link to="">
                    <div className="right-sidebar-item__icon freinds-icon"></div>
                </Link>
            </div>
        );
    }

    getSportsPlayground() {
        return (
            <div className="right-sidebar-item color-sidebar5">
                <Link to="Playground">
                    <div className="right-sidebar-item__icon ludo-sports-icon"></div>
                </Link>
            </div>
        );
    }

    getReadingPlayground() {
        return (
            <div className="right-sidebar-item color-sidebar6">
                <Link to="Playground">
                    <div className="right-sidebar-item__icon ludo-read-icon"></div>
                </Link>
            </div>
        );
    }
};
