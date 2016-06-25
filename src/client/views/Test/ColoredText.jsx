

import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import ColorPanel from './ColorPanel.jsx';
import text from '../../data/content';

class ColoredText extends Component {

    constructor(props){
        super(props);
        this.state = { textColor: 'rgb(117,117,117' };
        this.onColorChange = this.onColorChange.bind(this);
    }

    onColorChange() {
        this.setState({textColor: this.refs.colorPanel.state.color});
    }

    render() {
        return (
            <Grid fluid={true}>
                <Row params={this.props.params}>
                    <Col xs={12}
                         md={8}
                         sm={8}
                         lg={8}
                         params={this.props.params}>

                    <Panel params={this.props.params}>
                        <p params={this.props.params} style={{ color: this.state.textColor }}>
                            <span params={this.props.params}>{text}</span>
                        </p>
                    </Panel>
                    </Col>
                    <Col xs={12}
                         md={4}
                         sm={4}
                         lg={4}
                         style={{ paddingTop: '1em' }}
                         params={this.props.params}
                         onChange={this.onColorChange}>
                    <ColorPanel min={5}
                                max={240}
                                step={1}
                                ref="colorPanel" />
                    </Col>
                </Row>
            </Grid>
            );
    }
}

export default ColoredText;
