import React from 'react';
import '../../stylesheets/vendor/bootstrap/css/bootstrap-3.3.7.min.css';
import { Grid, Row, Col } from 'react-bootstrap';
import Masonry from 'react-masonry-component';

import ProfileContent from './ProfileContent';
import ProfileLudoing from './ProfileLudoing';
import ProfileHistory from './ProfileHistory';
import ProfileStatistic from './ProfileStatistic';
import ProfilePrize from './ProfilePrize';

import { rawLudoingData } from './LudoingData';
import { rawHistoryData } from './HistoryData';
import { rawPrizeData } from './PrizeData';
import { rawStatisticData } from './StatisticData';

const masonryOptions = {
    itemSelector: ".grid-item--half",
    columnWidth: ".grid-item--half"
}

export default class Profile extends React.Component {
    render() {
        return ( 
            <div className="profile">
                <Masonry
                    options={masonryOptions}>
                    <div className="grid-item--half">
                        <ProfileContent />
                    </div>
                    <div className="grid-item--half">
                        <ProfileLudoing data={rawLudoingData} />
                    </div>
                    <div className="grid-item--half">
                        <ProfileHistory data={rawHistoryData} />
                    </div>
                    <div className="grid-item--half">
                        <ProfilePrize data={rawPrizeData} />
                    </div>
                    <div className="grid-item--half">
                        <ProfileStatistic data={rawStatisticData} />
                    </div>
                </Masonry>
            </div>
        );
    }
}
