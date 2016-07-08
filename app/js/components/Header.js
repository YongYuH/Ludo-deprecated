import React from "react";
import imageLogo from '../../images/logo.png';
import clockIcon from '../../images/clock_icon.jpg';

export default class Header extends React.Component {
    render() {
        return ( 
            <div className="header">
                {this.getLogo()}
                {this.getSchematicIcon()}
                {this.getRateDiv()}
            </div>
        );
    }

    getLogo() {
        return (
            <div className="header-logo-div">
                <a href=""><img src={imageLogo} className="header-logo"/></a>
            </div>
        );
    }

    getSchematicIcon() {
        return (
            <div className="schematic-icon-div">
                <div className="schematic-icon-text">Playground</div>
                <div className="schematic-icon"></div>
            </div>
        );
    }

    getRateDiv() {
        return (
            <div className="rate-div">
                {this.getFinishRate()}
                {this.getWinRate()}
                {this.getClock()}
            </div>
        );
    }

    getFinishRate() {
        return (
            <div className="personal-data finish-rate">
                <svg className="pesonal-data__svg" width="80px" height="100%">
                    <circle 
                        className="pesonal-data__circle finish-rate__circle" 
                        cx="50%" cy="50%" r="21px" strokeDasharray="251.33" strokeDashoffset="0">
                    </circle>
                    <text className="pesonal-data__number finish-rate__text" x="15%" y="45%">Complete</text>
                    <text className="pesonal-data__number finish-rate__number" x="30%" y="66%">100%</text>
                </svg>
            </div>
        );
    }

    getWinRate() {
        return (
            <div className="personal-data win-rate">
                <svg className="pesonal-data__svg" width="80px" height="100%">
                    <circle 
                        className="pesonal-data__circle win-rate__circle" 
                        cx="50%" cy="50%" r="21px" strokeDasharray="251.33" strokeDashoffset="0">
                    </circle>
                    <text className="pesonal-data__number win-rate__text" x="32%" y="45%">Win</text>
                    <text className="pesonal-data__number win-rate__number" x="30%" y="66%">100%</text>
                </svg>
            </div>
        );
    }

    getClock() {
        return (
            <div className="clock-icon-div">
                <img className="clock-icon" src={clockIcon}/>
            </div>
        );
    }
};
