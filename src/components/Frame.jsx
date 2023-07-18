import './Frame.css'
import Button from './Button';
import Pad from './Pad';
import { useState, useRef, useEffect } from 'react';

function Frame() {
    
    // STATES
    let [displayedPadText, setDisplayedPadText] = useState(""),
        [highlightedButton, sethighlightedButton] = useState("None"),
        [currentFrame, setCurrentFrame] = useState("main"),
        [frameImageVisibility, setFrameImageVisibility] = useState("Visible");

    // PERSISTENT VALUES
    const TEXT_INDEX = useRef(1),
          TEXT_ANIMATION_TIMER = useRef(0),
          IMAGE_ANIMATION_TIMER = useRef(0),
          CURRENT_SELECTION = useRef(highlightedButton),

    // SELECTION VALUES
          SELECTIONS = {
              "None": {
                  "img": "myPhoto.jpg",
                  "text": "Desejo boas-vindas ao meu site! Espero que goste da estadia ;)"  
              },
              "About Me": {
                  "img": "myPhoto.jpg",
                  "text": "Conheça mais sobre mim."
              },
              "Projects": {
                  "img": "bugHunter.png",
                  "text": "Veja meus trabalhos e projetos pessoais."
              },
              "LinkedIn": {
                  "img": "myPhoto.jpg",
                  "text": "Veja meu perfil no LinkedIn."
              },
              "GitHub": {
                  "img": "myPhoto.jpg",
                  "text": "Veja meu portfolio de códigos no GitHub."
              }
          },

    // EFFECT FUNCTIONS
          CHANGE_FRAME_SELECTION = newSelection => {
              CURRENT_SELECTION.current = newSelection
              if(SELECTIONS[highlightedButton]['img'] != SELECTIONS[newSelection]['img']){
                  setFrameImageVisibility("Hidden")
              }else{
                  sethighlightedButton(newSelection)
              }
          },
          IMAGE_FADE_ANIMATION = () => {
              if (frameImageVisibility == "Hidden") {
                  IMAGE_ANIMATION_TIMER.current = setTimeout(() => { 
                      setFrameImageVisibility("Visible") 
                  }, 150)
              } else if (frameImageVisibility == "Visible"){
                  sethighlightedButton(CURRENT_SELECTION.current)
              }
          },
          CLEAR_TEXT_ANIMATION = () => {
              clearTimeout(TEXT_ANIMATION_TIMER.current)
              TEXT_INDEX.current = 2;
              setDisplayedPadText(SELECTIONS[highlightedButton]['text'][0]);
          },
          TICK_TEXT_ANIMATION = () => {
              if (displayedPadText != SELECTIONS[highlightedButton]['text']) {
                  TEXT_ANIMATION_TIMER.current = setTimeout(() => {
                      setDisplayedPadText(SELECTIONS[highlightedButton]['text'].substring(0, TEXT_INDEX.current));
                      TEXT_INDEX.current++;
                  }, 20);
              }else{
                  TEXT_INDEX.current = 1;
              }
          }

    // EFFECTS
    useEffect(IMAGE_FADE_ANIMATION, [frameImageVisibility])
    useEffect(CLEAR_TEXT_ANIMATION, [highlightedButton])
    useEffect(TICK_TEXT_ANIMATION, [displayedPadText]);

    // COMPONENT
    return <div className="frame">
        <div className='frame__head'>
            {/* <Button
                buttonType="Icon"
                iconName="backArrow" 
            /> */}
            <h5>HENRIQUE BARBOSA</h5>
            <div></div>
        </div>
        <div className='frame__body'>
            <div className="buttons-container">
                <Button
                    buttonType="Text"
                    onHover={() => CHANGE_FRAME_SELECTION("About Me")} 
                    onLeaving={() => CHANGE_FRAME_SELECTION("None")} 
                    iconName="user" 
                    text="Sobre Mim" 
                />
                <Button
                    buttonType="Text"
                    onHover={() => CHANGE_FRAME_SELECTION("Projects")} 
                    onLeaving={() => CHANGE_FRAME_SELECTION("None")} 
                    iconName="folder" 
                    text="Projetos" 
                />
                <a href="https://www.linkedin.com/in/henribdev/" target='_blank' rel='noreferrer'>
                    <Button
                        buttonType="Text"
                        onHover={() => CHANGE_FRAME_SELECTION("LinkedIn")} 
                        onLeaving={() => CHANGE_FRAME_SELECTION("None")} 
                        iconName="linkedin" 
                        text="LinkedIn" 
                    />
                </a>
                <a href="https://github.com/HenriBDev" target='_blank' rel='noreferrer'>
                    <Button
                        buttonType="Text"
                        onHover={() => CHANGE_FRAME_SELECTION("GitHub")} 
                        onLeaving={() => CHANGE_FRAME_SELECTION("None")} 
                        iconName="github" 
                        text="GitHub" 
                    />
                </a>
            </div>
            <Pad type="image" imgVisibility={frameImageVisibility} imgName={SELECTIONS[highlightedButton]['img']} />
        </div>
        <div className="frame__foot">
            <Pad type="text" padText={displayedPadText} />
        </div>
    </div>
}
 
export default Frame;