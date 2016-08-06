import React from 'react';
import '../../stylesheets/vendor/bootstrap/css/bootstrap-3.3.7.min.css';
import { Grid, Row, Col } from 'react-bootstrap';

export default class ProfileHistory extends React.Component {
    constructor() {
        super();
        this.state = { history:[] }
    }

    getHistoryData() {
        this.state.history = this.props.data.map( (data, index) => {
            let condition_color = '';
            if (data.condition === 'W') {
                condition_color = 'win';
            } else if (data.condition === 'L') {
                condition_color = 'lose';
            } else {
                condition_color = 'deuce';
            }
            return (
                <Col className="profile-history__element" key={index} xs={2}>
                <span className="profile-history__condition">
                    <span className={`${condition_color}`}>
                        {data.condition}
                    </span>
                </span>
                    <img className="profile-history__icon" src={data.img} />
                </Col>
            );
        });
    }

    render() {
        this.getHistoryData();
        return (
            <Grid className="profile-element">
                <div className="profile-element__title">History</div>
                <Row>
                    {this.state.history}
                </Row>
            </Grid>
        );
    }
}