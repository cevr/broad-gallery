import React, { Component } from 'react';

import { Image } from './Components';
import { getImages } from './Utils';
import './App.css';

class App extends Component {
    state = {
        images: []
    };
    componentDidMount() {
        this.setState({ images: getImages() });
    }
    render() {
        return (
            <div>
                <p className="header">Cristian / Velasquez</p>
                <div className="gallery-container">
                    {this.state.images.map(image => (
                        <Image author={image.author} src={image.url} key={image.index} />
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
