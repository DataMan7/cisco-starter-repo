import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Sextant" />
                <Exhibit name="Location 1"></Exhibit>
                <Exhibit name="Location 2"></Exhibit>
                <Exhibit name="Location 3"></Exhibit>
            </div>
        );
    }
}

export default App;
