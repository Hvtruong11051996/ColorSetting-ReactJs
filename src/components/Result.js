import React, { Component } from 'react';

class Result extends Component {

    setColor = () => {
        return {
            color: this.props.color,
            fontSize: this.props.fontSize
        }
    };

    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 resize_boder">
                <p>Color : {this.props.color} - Fontsize : {this.props.fontSize}px</p>
                <div id="content" style={this.setColor()}>
                    Nội dung setting
                </div>
            </div>
        );
    };
}

export default Result;
