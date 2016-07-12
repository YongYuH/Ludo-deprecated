import React from "react";

export default class Footer extends React.Component {
    render() {
        return ( 
            <div className="auto-start">
                <div className="auto-start-icon"></div>
                <div className="auto-start-text">
                    auto start
                </div>
                <input className="auto-start-searchbar" type="text" name="auto-start" placeholder="條件搜尋"/>
            </div>
        );
    }
};
