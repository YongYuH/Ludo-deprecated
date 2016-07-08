import React from "react";

export default class SideBar extends React.Component {
    render() {
        return ( 
            <div className="right-sidebar">
                {this.getSidebar1()}
                {this.getSidebar2()}
                {this.getSidebar3()}
                {this.getSidebar4()}
                {this.getSidebar5()}
                {this.getSidebar6()}
            </div>
        );
    }

    getSidebar1() {
        return (
            <div className="right-sidebar-item color-sidebar1">
                <a href="">
                    <div className="right-sidebar-item__icon playground-icon"></div>
                </a>
            </div>
        );
    }

    getSidebar2() {
        return (
            <div className="right-sidebar-item color-sidebar2">
                <a href="">
                    <div className="right-sidebar-item__icon profile-icon"></div>
                </a>
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
