import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class ProfileLudoing extends React.Component {
    constructor() {
        super();
        this.state = { ludoing:[] };
    }

    getLudoingData() {
        this.state.ludoing = this.props.data.map( (data, index) => {
            return (
                <Col className="profile-ludoing__element" key={index} xs={2}>
                    <img className="profile-ludoing__icon" src={data.value} />
                </Col>
            );
        });
    }

    render() {
        this.getLudoingData();
        return (
            <Grid className="profile-element">
                <div className="profile-element__title">Ludoing</div>
                <Row>
                    {this.state.ludoing}
                </Row>
            </Grid>
        );
    }
}