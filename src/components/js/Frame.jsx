import { Component } from 'react';
import '../css/Frame.css'

export class Frame extends Component {
    state = { view: this.view } 
    render() { 
        return (
            <div id="frame">
                <div id="columnsContainer">
                    <div className="columns">
                        <h1>Column 1</h1>
                    </div>
                    <div className="columns">
                        <h1>Column 2</h1>
                    </div>
                </div>
            </div>
        );
    }
}