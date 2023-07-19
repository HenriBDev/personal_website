import './Frame.css'
import Button from './Button';
import Pad from './Pad';
import { useState, useRef, useEffect } from 'react';

function Frame() {

    const ABOUT_ME_TEXT = 
        "Desenvolvendo desde 2018, criei uma aplicação web que facilita a integração de processos automatizados de diversas seções da empresa. " +
        "Auxilio meus colegas de trabalho sendo referência e sempre com foco em atingir nossas metas. " +
        "Possuo também projetos para uso pessoal que demonstram minhas habilidades com determinadas tecnologias. " +
        "Continuo sempre em busca de resolver problemas e vir com novas ideias."
    
    // STATES
    let [descriptionPadText, setDescriptionPadText] = useState(""),
        [currentSelection, setcurrentSelection] = useState("None (Main)"),
        [currentFrame, setCurrentFrame] = useState("Main"),
        [frameImageVisibilityClass, setFrameImageVisibilityClass] = useState(""),
        [frameVisibilityClass, setFrameVisibilityClass] = useState(""),
        [padCursor, setpadCursor] = useState("");

    // PERSISTENT VALUES
    const TEXT_INDEX = useRef(1),
          TEXT_ANIMATION_TIMER = useRef(0),
          IMAGE_ANIMATION_TIMER = useRef(0),
          CURRENT_SELECTION_PERSISTENT = useRef(currentSelection),
          CURRENT_FRAME_PERSISTENT = useRef(currentFrame),

    // SELECTION VALUES
        SELECTIONS = {
            "None (Main)": {
                "img": "myPhoto.jpg",
                "text": "Desejo boas-vindas ao meu site! Espero que goste da estadia ;)"  
            },
            "None (About Me)": {
                "img": "",
                "text": ABOUT_ME_TEXT
            },
            "None (Projects)": {
                "img": "",
                "text": "Selecione um projeto para ver mais sobre ele."
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

    // EFFECT TRIGGER FUNCTIONS
        START_FRAME_FADE_ANIMATION = newFrame => {
            CURRENT_FRAME_PERSISTENT.current = newFrame
            setFrameVisibilityClass("hidden")
        },
        START_IMAGE_FADE_ANIMATION = newSelection => {
            CURRENT_SELECTION_PERSISTENT.current = newSelection
            if(SELECTIONS[currentSelection]['img'] != SELECTIONS[newSelection]['img']){
                setFrameImageVisibilityClass("hidden")
            }else{
                setcurrentSelection(newSelection)
            }
        },

    // EFFECT FUNCTIONS
        IMAGE_FADE_ANIMATION = () => {
            if (frameImageVisibilityClass == "hidden") {
                IMAGE_ANIMATION_TIMER.current = setTimeout(() => { 
                    setFrameImageVisibilityClass("") 
                }, 150)
            } else if (frameImageVisibilityClass == ""){
                setcurrentSelection(CURRENT_SELECTION_PERSISTENT.current)
            }
        },
        FRAME_FADE_ANIMATION = () => {
            if (frameVisibilityClass == "hidden") {
                setTimeout(() => { setFrameVisibilityClass("") }, 300)
            } else if (frameVisibilityClass == ""){
                setCurrentFrame(CURRENT_FRAME_PERSISTENT.current)
                CURRENT_SELECTION_PERSISTENT.current = `None (${CURRENT_FRAME_PERSISTENT.current})`
                setcurrentSelection(`None (${CURRENT_FRAME_PERSISTENT.current})`)
            }
        },
        CLEAR_TEXT_ANIMATION = () => {
            clearTimeout(TEXT_ANIMATION_TIMER.current)
            TEXT_INDEX.current = 2;
            setDescriptionPadText(SELECTIONS[currentSelection]['text'][0]);
        },
        TICK_TEXT_ANIMATION = () => {
            if (descriptionPadText != SELECTIONS[currentSelection]['text']) {
                let timeoutMs = 0
                if (currentFrame == "About Me"){
                    timeoutMs = 15
                } else{
                    timeoutMs = 20
                }
                TEXT_ANIMATION_TIMER.current = setTimeout(() => {
                    setDescriptionPadText(SELECTIONS[currentSelection]['text'].substring(0, TEXT_INDEX.current));
                    TEXT_INDEX.current++;
                }, timeoutMs);
            }else{
                TEXT_INDEX.current = 1;
            }
        },
        TOGGLE_PAD_CURSOR = () => {
            setTimeout(() => {
                setpadCursor(padCursor == "█" ? "" : "█");
            }, 500)
        };

    // EFFECTS
    useEffect(FRAME_FADE_ANIMATION, [frameVisibilityClass]);
    useEffect(IMAGE_FADE_ANIMATION, [frameImageVisibilityClass]);
    useEffect(CLEAR_TEXT_ANIMATION, [currentSelection]);
    useEffect(TICK_TEXT_ANIMATION, [descriptionPadText]);
    useEffect(TOGGLE_PAD_CURSOR, [padCursor]);

    // COMPONENT
    return <div className="frame">
        <div className={`frame__content ${frameVisibilityClass}`}>
            <div className='frame__head'>
                <div className="frame__head--l-side">
                    {(currentFrame == "About Me" || currentFrame == "Projects") &&
                        <Button
                            buttonType="Icon"
                            iconName="backArrow" 
                            onClick={() => START_FRAME_FADE_ANIMATION("Main")}
                        />
                    }
                </div>
                <div className='frame__head--center'>
                    {currentFrame == "Main" &&     <h5>HENRIQUE BARBOSA</h5> }
                    {currentFrame == "About Me" && <div className='subheading3'>Sobre Mim</div>}
                    {currentFrame == "Projects" && <div className='subheading3'>Projetos</div>}
                </div>
                <div className="frame__head--r-side"></div>
            </div>
            <div className={`frame__body ${currentFrame == "About Me" ? "expand-vertically" : ""}`}>
                {currentFrame != "About Me" && (
                    <div className="frame__body__column">
                        {currentFrame == "Main" && (<>
                            <Button
                                buttonType="Text"
                                onHover={() => START_IMAGE_FADE_ANIMATION("About Me")} 
                                onClick={() => START_FRAME_FADE_ANIMATION("About Me")}
                                iconName="user" 
                                text="Sobre Mim" 
                            />
                            <Button
                                buttonType="Text"
                                onHover={() => START_IMAGE_FADE_ANIMATION("Projects")} 
                                onClick={() => START_FRAME_FADE_ANIMATION("Projects")}
                                iconName="folder" 
                                text="Projetos" 
                            />
                            <a href="https://www.linkedin.com/in/henribdev/" target='_blank' rel='noreferrer'>
                                <Button
                                    buttonType="Text"
                                    onHover={() => START_IMAGE_FADE_ANIMATION("LinkedIn")} 
                                    iconName="linkedin" 
                                    text="LinkedIn" 
                                />
                            </a>
                            <a href="https://github.com/HenriBDev" target='_blank' rel='noreferrer'>
                                <Button
                                    buttonType="Text"
                                    onHover={() => START_IMAGE_FADE_ANIMATION("GitHub")} 
                                    iconName="github" 
                                    text="GitHub" 
                                />
                            </a>
                        </>)}
                    </div>
                )}
                <Pad 
                    type={
                        ((currentFrame == "Main" || currentFrame == "Projects") && 
                            "image"
                        ) || (currentFrame == "About Me" && 
                            "text-paragraph"
                        )
                    } 
                    visibilityClass={frameImageVisibilityClass} 
                    imgName={SELECTIONS[currentSelection]['img']}
                    padText={
                        ((currentFrame == "Main" || currentFrame == "Projects") && 
                            ""
                        ) || (currentFrame == "About Me" && 
                            descriptionPadText
                        )
                    }
                    cursor={padCursor}
                    onClick={() => {
                        if (currentFrame == "About Me"){ 
                            clearTimeout(TEXT_ANIMATION_TIMER.current)
                            setDescriptionPadText(SELECTIONS[currentSelection]['text'])
                        }
                    }}
                />
            </div>
            {currentFrame != "About Me" &&
                <div className="frame__foot">
                    <Pad 
                        type="text-line" 
                        padText={descriptionPadText} 
                        cursor={padCursor}
                        onClick={() => {
                            clearTimeout(TEXT_ANIMATION_TIMER.current)
                            setDescriptionPadText(SELECTIONS[currentSelection]['text'])
                        }}
                    />
                </div>
            }
        </div>
    </div>
}
 
export default Frame;