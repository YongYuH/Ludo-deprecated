import React from 'react';
import '../../stylesheets/vendor/bootstrap/css/bootstrap-3.3.7.min.css';
import { Grid, Row, Col } from 'react-bootstrap';

export default class CreateContent extends React.Component {
    render() {
        return (
            <div className="grid-item grid-item--half">
                <Grid className="create-content">
                    <Row>
                        <Col xs={6} className="create-content-icon">
                            <div className="create-content-icon__icon"></div>
                        </Col>
                        <Col xs={6} className="create-content-information">
                            <div className="create-content-information__element">Type</div>
                            <div className="create-content-information__element">Date</div>
                            <div className="create-content-information__element">Report</div>
                            <div className="create-content-information__element">#tag</div>
                        </Col>
                    </Row>
                    <div className="create-content-invitation">invitation</div>
                    <div className="create-content-calendar"></div>
                </Grid>
            </div>
        );
    }
}