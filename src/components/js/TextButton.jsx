import { Component } from 'react';
import '../css/TextButton.css'

export class TextButton extends Component { 
    render() { 
        return (
            <div className="textButtonBorder">
                <div className="textButton">
                    <i className={this.props.icon + " buttonIcon"}></i><span className="subHeading1">{this.props.text}</span>
                </div>
            </div>
        );
    }
}