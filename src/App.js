import React, { Component } from 'react';
import './App.css';
import Upload from './components/uploader';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Upload />
            </div>
        );
    }
}

export default App;
