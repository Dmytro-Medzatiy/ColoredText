

import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class BSlider extends Component {

    constructor(props) {
        super(props);
        this.state = { value: Math.trunc((props.max - props.min)/2)};
        this.onSliderChange = this.onSliderChange.bind(this);
    }

    onSliderChange() {
        const range = this.refs.slider.value;
        this.setState({value: range});
    }

    render() {
        return (
            <Grid fluid={true}>
                <Row params={this.props.params}>
                    <Col xs={9}
                         md={9}
                         sm={9}
                         lg={9}
                         params={this.props.params}>
                    <div params={this.props.params}>
                        <input type="range"
                               min={this.props.min}
                               max={this.props.max}
                               step={this.props.step}
                               ref="slider"
                               onChange = {this.onSliderChange}
                        />
                    </div>
                    </Col>
                    <Col xs={3}
                         md={3}
                         sm={3}
                         lg={3}
                         params={this.props.params}>
                    <div style={{ textAlign: 'center' }}
                         params={this.props.params}>
                        <span params={this.props.params}>
                            {this.state.value}
                        </span>
                    </div>
                    </Col>
                </Row>
            </Grid>
            );
    }
}

BSlider.propTypes = { min: React.PropTypes.number,
                      max: React.PropTypes.number,
                      step: React.PropTypes.number};

BSlider.defaultProps = { min: 0,
                         max: 100,
                         step: 1 };

export default BSlider;
