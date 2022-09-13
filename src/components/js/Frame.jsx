import { Component, Fragment } from 'react';
import '../css/Frame.css'
import pfp from '../../media/profilePhoto.jpg'
import { TextButton } from './'

export class Frame extends Component {
    changeMenu(menu){
        this.setState({view: menu});
    }
    state = { view: "mainMenu" };
    render() {
        return (
            <div id="frame">

                <header style={this.state.view == "aboutMe" || this.state.view == "projects" ? {} : {display: "none"}}>
                    
                </header>

                {/* Columns */}
                <main id="columnsContainer">

                    {// Main Menu Main Content
                    (this.state.view == "mainMenu") ? <Fragment>

                        {/* Left column */}
                        <div className="columns">
                            <div id="title">
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
                            <div id="descriptionFrameBorder">
                                <div id="descriptionFrame">
                                    <span id="descriptionText" className="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus volutpat senectus.</span>
                                </div>
                            </div>
                        </div>

                    </Fragment> : null}

                    {// About Me Main Content
                    (this.state.view == "aboutMe") ? 
                        <div id="aboutMeContentFrame">
                            <h1>About me</h1>
                        </div>
                    : null}

                    {// Projects Main Content
                    (this.state.view == "projects") ? 
                    <div id="projectsContentFrame">
                        <h1>Projects</h1>
                    </div>
                : null}
                    

                </main>

                <footer style={{display: "none"}}>

                </footer>

            </div>
        );
    };
}