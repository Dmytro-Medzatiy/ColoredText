

import React, { Component, PropTypes } from 'react';
import { Panel } from 'react-bootstrap';
import BSlider from './BSlider.jsx';

class ColorPanel extends Component {

    constructor(props){
        super(props);
        this.state = {red: 127,
                      green: 127,
                      blue: 127,
                      color: 'rgb(127,127,127)'};
        this.onPanelChange = this.onPanelChange.bind(this);
    }

    onPanelChange(){
        this.setState({red: this.refs.red.state.value,
                       green: this.refs.green.state.value,
                       blue: this.refs.blue.state.value});
        const color = 'rgb('+this.state.red+','+this.state.green+','+this.state.blue+')';
        this.setState({color: color});

    }

    render() {
        return (
            <Panel style={{ backgroundColor: this.state.color }}
                   onChange={this.onPanelChange} >
                <BSlider {...this.props}
                         ref="red"
                />
                <BSlider {...this.props}
                         ref="green"
                />

                <BSlider {...this.props}
                         ref="blue"
                />
            </Panel>
            );
    }
}

export default ColorPanel;
