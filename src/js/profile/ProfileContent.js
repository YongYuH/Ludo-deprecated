import React from 'react';
import '../../stylesheets/vendor/bootstrap/css/bootstrap-3.3.7.min.css';
import { Grid, Row, Col } from 'react-bootstrap';

import avatar_photo from '../../images/profile-content/profile.png';
import pie_chart_blue from '../../images/profile-content/pie_chart_blue.png';
import pie_chart_yellow from '../../images/profile-content/pie_chart_yellow.png';
import pie_chart_red from '../../images/profile-content/pie_chart_red.png';

export default class ProfileContent extends React.Component {
    render() {
        return (
            <Grid className="profile-content">
                <Row>
                    <Col xs={6} className="profile-content-avatar">
                        <div className="profile-content-avatar__photo">
                            <img src={avatar_photo} />
                        </div>
                    </Col>
                    <Col xs={6} className="profile-content-information">
                        <div className="profile-content-information__element">name</div>
                        <div className="profile-content-information__element">birth</div>
                        <div className="profile-content-information__element">language</div>
                        <div className="profile-content-information__element">habit</div>
                    </Col>
                </Row>
                <Row className="profile-content-detail">
                    <Col xs={2}><div className="profile-content-detail__element">Ludoing</div></Col>
                    <Col xs={2}><div className="profile-content-detail__element">History</div></Col>
                    <Col xs={2}><div className="profile-content-detail__element">Prize</div></Col>
                    <Col xs={2}><div className="profile-content-detail__element">Statistic</div></Col>
                    <Col xs={3} xsOffset={1}><div className="profile-content-detail__element">Show All</div></Col>
                </Row>
                <Row className="profile-content-chart">
                    <Col xs={4}><div className="profile-content-chart__element"><img src={pie_chart_blue} /></div></Col>
                    <Col xs={4}><div className="profile-content-chart__element"><img src={pie_chart_yellow} /></div></Col>
                    <Col xs={4}><div className="profile-content-chart__element"><img src={pie_chart_red} /></div></Col>
                </Row>
            </Grid>
        );
    }
}
