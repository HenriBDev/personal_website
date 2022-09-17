import { Component, Fragment } from 'react';
import '../css/Frame.css'
import pfp from '../../media/profilePhoto.jpg'
import { TextButton, IconButton } from './'

export class Frame extends Component {
    changeMenu(menu){
        this.setState({view: menu});
    }
    state = { view: "mainMenu" };
    render() {
        return (
            <div id="frame">

                <header>
                    
                    {this.state.view == "aboutMe" || this.state.view == "projects" ? 

                    // About Me and Projects header
                    <Fragment>
                        <IconButton icon="fa-solid fa-arrow-left"/>
                        <h2>{this.state.view == "aboutMe" ? "About Me" : "Projects"}</h2>
                    </Fragment> : 

                    // Main Menu header
                    <div className="title">
                        <h2>Henrique Barbosa</h2>
                    </div>}

                </header>

                {/* Columns */}
                <main>

                    {// Main Menu Main Content
                    (this.state.view == "mainMenu") ? <Fragment>

                        {/* Left column */}
                        <div className="columns">
                            <div className="title">
                                <h1>Henrique Barbosa</h1>
                            </div>
                            <a onClick={() => this.changeMenu("aboutMe")}><TextButton icon="fa-solid fa-user" text="Sobre mim" /></a>
                            <a onClick={() => this.changeMenu("projects")}><TextButton icon="fa-solid fa-folder-open" text="Projetos" /></a>
                            <a href="https://www.linkedin.com/in/henribdev/" target="_blank"><TextButton icon="fa-brands fa-linkedin" text="Linkedin"/></a>
                            <a href="https://github.com/HenriBDev" target="_blank"><TextButton icon="fa-brands fa-github" text="Github"/></a>
                        </div>

                        {/* Right column */}
                        <div className="columns">
                            <div id="imageFrameBorder">
                                <div id="imageFrame">
                                    <img id="image" src={pfp}/>
                                </div>
                            </div>
                            <div className="descriptionFrameBorder">
                                <div className="descriptionFrame body1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus volutpat senectus.
                                </div>
                            </div>
                        </div>

                    </Fragment> : null}

                    {// About Me Main Content
                    (this.state.view == "aboutMe") ? 
                        <div id="aboutMeContentFrame">

                        </div>
                    : null}

                    {// Projects Main Content
                    (this.state.view == "projects") ? 
                    <div id="projectsContentFrame">

                    </div>
                : null}
                    

                </main>

                <footer>
                    <div className="descriptionFrameBorder">
                        <div className="descriptionFrame body1">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus volutpat senectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus volutpat senectus.</span>
                        </div>
                    </div>
                </footer>

            </div>
        );
    };
}