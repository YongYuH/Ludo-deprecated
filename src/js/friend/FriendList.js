import React from 'react';
import 'masonry-layout';
// import { Grid, Row, Col } from 'react-bootstrap';

import { rawFriendData } from './FriendData';

export default class Friend extends React.Component {
    constructor() {
        super();
        this.state = { friendList: [] };
    }

    getFriendList() {
        this.state.friendList = this.props.data.map( (data, index) => {
            return (
                <div className="grid-item--friend" key={index}>
                    <div className="friend-list__element">
                        <img className="friend-list__icon" src={data.value} />
                    </div>
                </div>
            );
        });
    }

    render() {
        this.getFriendList();
        return (
            <div className="grid" data-masonry='{ "itemSelector": ".grid-item--friend", "columnWidth": 185, "fitWidth": true }'>
                {this.state.friendList}
            </div>
        );
    }
}