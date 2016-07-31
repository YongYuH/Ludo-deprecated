import React from 'react';

import ProfileContents from './ProfileContents.js';

export default class Playground extends React.Component {
    render() {
        return ( 
            <div className="profile">
                <ProfileContents />
            </div>
        );
    }
}
