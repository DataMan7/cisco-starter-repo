import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Sextant" />
                <Exhibit name="Public IPv4 Address"></Exhibit>
                <Exhibit name="Public IPv6 Address"></Exhibit>
                <Exhibit name="Pylon Packet Latency"></Exhibit>
            </div>
        );
    }
}

export default App;
