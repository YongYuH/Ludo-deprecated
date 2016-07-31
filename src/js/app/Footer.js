import React from "react";

export default class Footer extends React.Component {
    render() {
        return ( 
            <div className="auto-start">
                <div className="auto-start__icon"></div>
                <div className="auto-start__text">
                    auto start
                </div>
                <input className="auto-start__searchbar" type="text" name="auto-start" placeholder="條件搜尋"/>
            </div>
        );
    }
};
