import { Component } from 'react';
import '../css/Frame.css'
import pfp from '../../media/profilePhoto.jpg'
import { Button } from './'

export class Frame extends Component {
    state = { view: this.view } 
    render() { 
        return (
            <div id="frame">
                <div id="columnsContainer">
                    <div className="columns">
                        <div id="title">
                            <h1>Henrique Barbosa</h1>
                        </div>
                        <Button icon="fa-solid fa-user" text="Sobre mim"/>
                        <Button icon="fa-solid fa-folder-open" text="Projetos"/>
                        <Button icon="fa-brands fa-linkedin" text="Linkedin"/>
                        <Button icon="fa-brands fa-github" text="Github"/>
                    </div>
                    <div className="columns">
                        <div id="imageFrameBorder">
                            <div id="imageFrame">
                                <img id="image" src={pfp}/>
                            </div>
                        </div>
                        <div id="descriptionFrameBorder">
                            <div id="descriptionFrame">
                                <span id="descriptionText" className="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus volutpat senectus.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}