import { Component } from 'react';
import '../css/Frame.css'
import { Button } from './'

export class Frame extends Component {
    state = { view: this.view } 
    render() { 
        return (
            <div id="frame">
                <div id="columnsContainer">
                    <div className="columns">
                        <h1>Henrique Barbosa</h1>
                        <Button icon="fa-brands fa-github" text="Teste"/>
                    </div>
                    <div className="columns">
                        <h1>Column 2</h1>
                    </div>
                </div>
            </div>
        );
    }
}