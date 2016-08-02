import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import avatar_photo from '../../images/profile.png';
import pie_chart_blue from '../../images/pie_chart_blue.png';
import pie_chart_yellow from '../../images/pie_chart_yellow.png';
import pie_chart_red from '../../images/pie_chart_red.png';

export default class ProfileContent extends React.Component {
    render() {
        return (
            /* Todo: Add webpack include bootstrap css */
            <Grid className="profileContent">
                <Row>
                    <Col xs={6} className="profileContent-avatar">
                        <div className="profileContent-avatar__photo">
                            <img src={avatar_photo} />
                        </div>
                    </Col>
                    <Col xs={6} className="profileContent-information">
                        <div className="profileContent-information__element profileContent-information__name">name</div>
                        <div className="profileContent-information__element profileContent-information__birth">birth</div>
                        <div className="profileContent-information__element profileContent-information__language">language</div>
                        <div className="profileContent-information__element profileContent-information__habit">habit</div>
                    </Col>
                </Row>
                <Row className="profileContent-detail">
                    <Col xs={2}><div className="profileContent-detail__element ludoing">Ludoing</div></Col>
                    <Col xs={2}><div className="profileContent-detail__element prize">Prize</div></Col>
                    <Col xs={2}><div className="profileContent-detail__element history">History</div></Col>
                    <Col xs={2}><div className="profileContent-detail__element state">State</div></Col>
                    <Col xs={3} xsOffset={1}><div className="profileContent-detail__element showAll">Show All</div></Col>
                </Row>
                <Row className="profileContent-chart">
                    <Col xs={4}><div className="profileContent-chart__element"><img src={pie_chart_blue} /></div></Col>
                    <Col xs={4}><div className="profileContent-chart__element"><img src={pie_chart_yellow} /></div></Col>
                    <Col xs={4}><div className="profileContent-chart__element"><img src={pie_chart_red} /></div></Col>
                </Row>
            </Grid>
        );
    }
}
