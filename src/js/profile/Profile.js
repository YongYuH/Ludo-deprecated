import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import 'masonry-layout';
import ProfileContent from './ProfileContent';
import ProfileLudoing from './ProfileLudoing';
import ProfileHistory from './ProfileHistory';
import ProfileStatistic from './ProfileStatistic';
import ProfilePrize from './ProfilePrize';

export default class Profile extends React.Component {
    render() {
        return ( 
            <div className="profile">
                <div className="grid" data-masonry='{ "itemSelector": ".grid-item--half", "columnWidth": 465, "fitWidth": true }'>
                    <div className="grid-item--half">
                        <ProfileContent />
                    </div>
                    <div className="grid-item--half">
                        <ProfileLudoing />
                        <ProfileHistory />
                        <ProfileStatistic />
                        <ProfilePrize />
                    </div>
                </div>
            </div>
        );
    }
}
