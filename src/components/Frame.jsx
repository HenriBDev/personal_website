import './Frame.css'
import ImageDisplay from './ImageDisplay';
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
        [padCursor, setpadCursor] = useState(""),
        [imageDisplayIsVisible, setImageDisplayIsVisible] = useState(false);

    // PERSISTENT VALUES
    const TEXT_INDEX = useRef(1),
          TEXT_ANIMATION_TIMER = useRef(0),
          IMAGE_ANIMATION_TIMER = useRef(0),
          CURRENT_SELECTION_PERSISTENT = useRef(currentSelection),
          CURRENT_FRAME_PERSISTENT = useRef(currentFrame),

    // IMAGES AND THEIR DESCRIPTIONS
        IMAGES = {
            "Henrique": {
                "filename": "myPhoto.jpg",
                "description": "Sou eu! Henrique Barbosa, um homem jovem de óculos, cabelo encaracolado usando uma jaqueta."
            },
            "Bug Hunter":{
                "filename": "bugHunter.png",
                "description": "Projeto: Bug-Hunter, jogo estilo bomberman tematizado em bugs, o campo tem ladrilhos pisáveis, bloqueados e infectados. Há um inseto inimigo e seu personagem, um escudo com uma carinha feliz."
            }
        },

    // SELECTION VALUES
        SELECTIONS = {
            "None (Main)": {
                "img": "Henrique",
                "text": "Desejo boas-vindas ao meu site! Espero que goste da estadia ;)"
            },
            "None (About Me)": {
                "img": "",
                "text": ABOUT_ME_TEXT
            },
            "None (Projects)": {
                "img": "Bug Hunter",
                "text": "Selecione um projeto para ver mais sobre ele."
            },
            "About Me": {
                "img": "Henrique",
                "text": "Conheça mais sobre mim."
            },
            "Projects": {
                "img": "Bug Hunter",
                "text": "Veja meus trabalhos e projetos pessoais."
            },
            "LinkedIn": {
                "img": "Henrique",
                "text": "Veja meu perfil no LinkedIn."
            },
            "GitHub": {
                "img": "Henrique",
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
        {imageDisplayIsVisible &&
            <ImageDisplay 
                imgName={IMAGES[SELECTIONS[currentSelection]['img']]["filename"]}
                imgDescription={IMAGES[SELECTIONS[currentSelection]['img']]["description"]}
                closeEvent={() => setImageDisplayIsVisible(false)}
            />
        }
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
                    <div className={`frame__body__column ${currentFrame == "Projects" ? "frame__body__column--projects" : "frame__body__column--main"}`}>
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
                        {currentFrame == "Projects" && (<>
                            
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
                    imgName={
                        ((currentFrame == "Main" || currentFrame == "Projects") && 
                            IMAGES[SELECTIONS[currentSelection]['img']]["filename"]
                        ) || (currentFrame == "About Me" && 
                            ""
                        )
                    }
                    imgDescription={
                        ((currentFrame == "Main" || currentFrame == "Projects") && 
                            IMAGES[SELECTIONS[currentSelection]['img']]["description"]
                        ) || (currentFrame == "About Me" && 
                            ""
                        )
                    }
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
                        }else{
                            setImageDisplayIsVisible(true)
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