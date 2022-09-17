import { Component } from 'react';
import '../css/IconButton.css'

export class IconButton extends Component { 
    render() { 
        return (
            <div className="buttonBorder">
                <div className="button">
                    <i className={this.props.icon + " buttonIcon"}></i>
                </div>
            </div>
        );
    }
}