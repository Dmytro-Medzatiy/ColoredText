

import React, { Component, PropTypes } from 'react';
import { Panel } from 'react-bootstrap';
import BSlider from './BSlider.jsx';

class ColorPanel extends Component {

    constructor(props){
        super(props);
        const defVal = props.defaultValue;
        this.state = {red: props.defaultValue,
                      green: props.defaultValue,
                      blue: props.defaultValue,
                      color: 'rgb('+defVal+','+defVal+','+defVal+')'};
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

ColorPanel.propTypes = { defaultValue: React.PropTypes.number };
ColorPanel.defaultValue = { defaultValue: 0 };

export default ColorPanel;
