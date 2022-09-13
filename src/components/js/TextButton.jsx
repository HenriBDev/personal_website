import { Component, Fragment } from 'react';
import '../css/TextButton.css'

export class TextButton extends Component { 
    render() { 
        return (
            <div className="buttonBorder">
                <div className="button">
                    <i className={this.props.icon + " buttonIcon"}></i><span className="subHeading1">{this.props.text}</span>
                </div>
            </div>
        );
    }
}