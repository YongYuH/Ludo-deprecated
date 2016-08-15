import React from "react";

import marblesIcon from '../../../images/header/marbles.png';

export default class HeaderMarbles extends React.Component {
    props() {
        super();
        this.state = { marblesNumber: 1000 }
    }

    getMarblesNumber() {

    }

    render() {
        return (
            <div className="header-marbles">
                <img src={marblesIcon} />
                <p>{this.state.marblesNumber}</p>
            </div>
        );
    }
}