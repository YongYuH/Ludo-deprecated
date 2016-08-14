import React from "react";

import imageLogo from '../../images/Ludo_logo.png';
import clockIcon from '../../images/clock_icon.jpg';

export default class Header extends React.Component {
    getClock() {
        return (
            <div className="header-clock">
                <img className="header-clock__icon" src={clockIcon}/>
            </div>
        );
    }

    getFinishRate() {
        return (
            <div className="header-finish-rate">
                <svg width="80px" height="100%">
                    <circle 
                        className="header-rate__circle header-finish-rate__circle" 
                        cx="50%" cy="50%" r="21px" strokeDasharray="251.33" strokeDashoffset="0">
                    </circle>
                    <text className="header-finish-rate__text" x="15%" y="45%">Complete</text>
                    <text className="header-rate__number header-finish-rate__number" x="30%" y="66%">100%</text>
                </svg>
            </div>
        );
    }

    getLogo() {
        return (
            <a href="">
                <div className="header-Ludo-logo">
                    <img src={imageLogo} className="header-Ludo-logo__icon"/>
                </div>
            </a>
        );
    }

    getRate() {
        return (
            <div className="header-rate">
                {this.getFinishRate()}
                {this.getWinRate()}
            </div>
        );
    }

    getWinRate() {
        return (
            <div className="header-win-rate">
                <svg width="80px" height="100%">
                    <circle 
                        className="header-rate__circle header-win-rate__circle" 
                        cx="50%" cy="50%" r="21px" strokeDasharray="251.33" strokeDashoffset="0">
                    </circle>
                    <text className="header-win-rate__text" x="32%" y="45%">Win</text>
                    <text className="header-rate__number header-win-rate__number" x="30%" y="66%">100%</text>
                </svg>
            </div>
        );
    }

    render() {
        return ( 
            <div className="header">
                {this.getLogo()}
                {this.getRate()}
                {this.getClock()}
            </div>
        );
    }
};
