import { Component, Fragment } from 'react';
import '../css/Button.css'

export class Button extends Component { 
    render() { 
        return (
            <div className="buttonBorder">
                <div className="button">
                    <i class={this.props.icon + " buttonIcon"}></i><span className="subHeading1">{this.props.text}</span>
                </div>
            </div>
        );
    }
}