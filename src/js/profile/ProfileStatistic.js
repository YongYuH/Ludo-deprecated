import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class ProfileStatistic extends React.Component {
    constructor() {
        super();
        this.state = { statistic:[] }
    }

    getStatisticData() {
        this.state.statistic = this.props.data.map( (data, index) => {
            return (
                <Col className="profile-statistic__element" key={index} xs={2}>
                    <img className="profile-statistic__icon" src={data.value} />
                </Col>
            );
        });
    }

    render() {
        this.getStatisticData();
        return (
            <Grid className="profile-element">
                <div className="profile-element__title">Statistic</div>
                <Row>
                    {this.state.statistic}
                </Row>
            </Grid>
        );
    }
}