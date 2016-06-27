

import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import ColorPanel from './ColorPanel.jsx';
import text from '../../data/content';

class ColoredText extends Component {

    constructor(props){
        super(props);
        this.state = { textColor: 'rgb(127,127,127',
                       backgroundColor: 'rgb(255,255,255)'};
        this.onColorChange = this.onColorChange.bind(this);
    }

    onColorChange() {
        this.setState({textColor: this.refs.colorPanel.state.color});
        this.setState({backgroundColor: this.refs.colorPanelBack.state.color});
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
                        <textarea params={this.props.params}
                                  style={{ color: this.state.textColor,
                                           backgroundColor: this.state.backgroundColor,
                                           width: '100%' }}
                                  rows={11}
                                  defaultValue={text}
                        >
                        </textarea>
                    </Panel>
                    </Col>
                    <Col xs={12}
                         md={4}
                         sm={4}
                         lg={4}
                         params={this.props.params}
                         /*onChange={this.onColorChange}*/>
                        <label>Text Color</label>
                    <ColorPanel min={0}
                                max={255}
                                step={1}
                                defaultValue={0}
                                ref="colorPanel" 
                                onTextChanged={this.onColorChange} />
                        <label>Background Color</label>
                    <ColorPanel min={0}
                                max={255}
                                step={1}
                                defaultValue={255}
                                ref="colorPanelBack"
                                onTextChanged={this.onColorChange} />
                    </Col>
                </Row>
            </Grid>
            );
    }
}

export default ColoredText;
