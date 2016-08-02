import React from "react";

export default class Search extends React.Component {
    render() {
        return (
            <div className="search">
                <div className="search__icon"></div>
                <div className="search__title">
                    Auto start
                </div>
                <input className="search__textfield" type="text" name="search" placeholder="條件搜尋"/>
            </div>
        );
    }
};
