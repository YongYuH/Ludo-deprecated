import React from "react";
import { Link } from "react-router";

export default class SideBar extends React.Component {
    render() {
        return ( 
            <div className="right-sidebar">
                {this.getPlayground()}
                {this.getProfile()}
                {this.getSidebar3()}
                {this.getSidebar4()}
                {this.getSidebar5()}
                {this.getSidebar6()}
            </div>
        );
    }

    getPlayground() {
        return (
            <div className="right-sidebar-item color-sidebar1">
                <Link to="playground">
                    <div className="right-sidebar-item__icon playground-icon"></div>
                </Link>
            </div>
        );
    }

    getProfile() {
        return (
            <div className="right-sidebar-item color-sidebar2">
                <Link to="profile">
                    <div className="right-sidebar-item__icon profile-icon"></div>
                </Link>
            </div>
        );
    }

    getSidebar3() {
        return (
            <div className="right-sidebar-item color-sidebar3">
                <a href="">
                    <div className="right-sidebar-item__icon start-ludo-icon"></div>
                </a>
            </div>
        );
    }

    getSidebar4() {
        return (
            <div className="right-sidebar-item color-sidebar4">
                <a href="">
                    <div className="right-sidebar-item__icon freinds-icon"></div>
                </a>
            </div>
        );
    }

    getSidebar5() {
        return (
            <div className="right-sidebar-item color-sidebar5">
                <a href="">
                    <div className="right-sidebar-item__icon ludo-sports-icon"></div>
                </a>
            </div>
        );
    }

    getSidebar6() {
        return (
            <div className="right-sidebar-item color-sidebar6">
                <a href="">
                    <div className="right-sidebar-item__icon ludo-read-icon"></div>
                </a>
            </div>
        );
    }
};
