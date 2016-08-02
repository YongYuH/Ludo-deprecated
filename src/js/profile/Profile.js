import React from 'react';

import Ludoing from './Ludoing';

export default class Profile extends React.Component {
    getProfileContent() {
        return (
            <div className="profileContent">
                <div className="profileContent-avatar">
                    <div className="profileContent-avatar__photo"></div>
                </div>
                <div className="profileContent-information">
                    <div className="profileContent-information__name">name</div>
                    <div className="profileContent-information__birth">birth</div>
                    <div className="profileContent-information__language">language</div>
                    <div className="profileContent-information__habit">habit</div>
                </div>
                <div className="profileContent-detail">
                    <div className="ludoing">Ludoing</div>
                    <div className="prize">Prize</div>
                    <div className="history">History</div>
                    <div className="state">State</div>
                    <div className="showAll">Show All</div>
                </div>
                <div className="profileContent-chart">
                </div>
            </div>
        );
    }

    render() {
        return ( 
            <div className="profile">
                {this.getProfileContent()}
            </div>
        );
    }
}
