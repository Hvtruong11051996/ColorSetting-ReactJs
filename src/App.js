import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import Result from './components/Result';
import SizeSetting from './components/SizeSetting';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            fontSize: 15
        };
    }
    // Nhận dữ liệu từ con ->  cha thông qua function
    onSetColor = (params) => {
        this.setState({
            color: params
        });
    }

    onChangSize = (value) => {
        if (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) {
            this.setState({
                fontSize: this.state.fontSize + value
            });
        }
    }

    onSettingDefault = (value) => {
        this.setState({
            color: 'red',
            fontSize: 15
        });

    }

    render() {
        return (
            <div className='container mt-50'>
                <div className='row'>
                    <ColorPicker color={this.state.color} onReciveColor={this.onSetColor}></ColorPicker>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <SizeSetting
                            fontSize={this.state.fontSize}
                            onChangSize={this.onChangSize}
                        ></SizeSetting>
                        <Reset onSettingDefault={this.onSettingDefault}></Reset>
                    </div>
                    <Result color={this.state.color} fontSize={this.state.fontSize}></Result>
                </div>
            </div>
        );
    };
}

export default App;
