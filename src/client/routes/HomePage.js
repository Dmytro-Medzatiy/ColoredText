
import React, { Component, PropTypes } from 'react';

import ColoredText from '../views/Test/ColoredText.jsx';


class HomePage extends Component {

    render() {
        return (
            <div>
                <div style={ { textAlign: 'center' } }
                     params={ this.props.params }
                     location={ this.props.location }>
                    <span params={ this.props.params } location={ this.props.location }>Colored Text</span>
                </div>
                <ColoredText params={ this.props.params } location={ this.props.location }></ColoredText>
            </div>
            );
    }
}

export default HomePage;

