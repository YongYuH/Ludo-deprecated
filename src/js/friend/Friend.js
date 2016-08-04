import React from 'react';
import 'masonry-layout';

import FriendList from './FriendList';

import { rawFriendData } from './FriendData';

export default class Friend extends React.Component {
    render() {
        return (
            <FriendList data={rawFriendData}/>
        );
    }
}