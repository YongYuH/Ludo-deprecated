import React from 'react';
import '../../stylesheets/vendor/bootstrap/css/bootstrap-3.3.7.min.css';
import { Grid, Row, Col } from 'react-bootstrap';

export default class ProfilePrize extends React.Component {
    constructor() {
        super();
        this.state = { prize:[] }
    }

    getPrizeData() {
        this.state.prize = this.props.data.map( (data, index) => {
            return (
                <Col className="profile-prize__element" key={index} xs={2}>
                    <img className="profile-prize__icon" src={data.value} />
                </Col>
            );
        });
    }

    render() {
        this.getPrizeData();
        return (
            <Grid className="profile-element">
                <div className="profile-element__title">Prize</div>
                <Row>
                    {this.state.prize}
                </Row>
            </Grid>
        );
    }
}