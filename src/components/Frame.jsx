import { MAIN_BUTTONS, PROJECTS, IMAGES, SELECTIONS } from '../js/constants';

// STYLE
import './Frame.css'

// COMPONENTS
import ImageDisplay from './ImageDisplay';
import Button from './Button';
import Pad from './Pad';
import DropdownMenu from './Dropdown/DropdownMenu';

// REACT HOOKS
import { useState, useRef, useEffect } from 'react';

function Frame() {
    
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

    // EFFECT TRIGGER FUNCTIONS
        startFrameFadeAnimation = newFrame => {
            CURRENT_FRAME_PERSISTENT.current = newFrame
            setFrameVisibilityClass("hidden")
        },
        startImageFadeAnimation = newSelection => {
            CURRENT_SELECTION_PERSISTENT.current = newSelection
            if(SELECTIONS[currentSelection]["Description Image"] != SELECTIONS[newSelection]["Description Image"]){
                setFrameImageVisibilityClass("hidden")
            }else{
                setcurrentSelection(newSelection)
            }
        },

    // EFFECT FUNCTIONS
        imageFadeAnimation = () => {
            if (frameImageVisibilityClass == "hidden") {
                IMAGE_ANIMATION_TIMER.current = setTimeout(() => { 
                    setFrameImageVisibilityClass("") 
                }, 150)
            } else if (frameImageVisibilityClass == ""){
                setcurrentSelection(CURRENT_SELECTION_PERSISTENT.current)
            }
        },
        frameFadeAnimation = () => {
            if (frameVisibilityClass == "hidden") {
                setTimeout(() => { setFrameVisibilityClass("") }, 300)
            } else if (frameVisibilityClass == ""){
                setCurrentFrame(CURRENT_FRAME_PERSISTENT.current)
                CURRENT_SELECTION_PERSISTENT.current = `None (${CURRENT_FRAME_PERSISTENT.current})`
                setcurrentSelection(`None (${CURRENT_FRAME_PERSISTENT.current})`)
            }
        },
        clearTextAnimation = () => {
            clearTimeout(TEXT_ANIMATION_TIMER.current)
            TEXT_INDEX.current = 2;
            setDescriptionPadText(SELECTIONS[currentSelection]["Description Text"][0]);
        },
        tickTextAnimation = () => {
            if (descriptionPadText != SELECTIONS[currentSelection]["Description Text"]) {
                let timeoutMs = 0
                if (currentFrame == "About Me"){
                    timeoutMs = 15
                } else{
                    timeoutMs = 20
                }
                TEXT_ANIMATION_TIMER.current = setTimeout(() => {
                    setDescriptionPadText(SELECTIONS[currentSelection]["Description Text"].substring(0, TEXT_INDEX.current));
                    TEXT_INDEX.current++;
                }, timeoutMs);
            }else{
                TEXT_INDEX.current = 1;
            }
        },
        togglePadCursor = () => {
            setTimeout(() => {
                setpadCursor(padCursor == "█" ? "" : "█");
            }, 500)
        };

    // EFFECTS
    useEffect(frameFadeAnimation, [frameVisibilityClass]);
    useEffect(imageFadeAnimation, [frameImageVisibilityClass]);
    useEffect(clearTextAnimation, [currentSelection]);
    useEffect(tickTextAnimation, [descriptionPadText]);
    useEffect(togglePadCursor, [padCursor]);

    // COMPONENT
    return <section className="frame">
        {imageDisplayIsVisible &&
            <ImageDisplay 
                imgName={IMAGES[SELECTIONS[currentSelection]["Description Image"]]["File Name"]}
                imgDescription={IMAGES[SELECTIONS[currentSelection]["Description Image"]]["Alt Text"]}
                closeEvent={() => setImageDisplayIsVisible(false)}
            />
        }
        <div className={`frame__content ${frameVisibilityClass}`}>
            <header className='frame__head'>
                <div className="frame__head--l-side">
                    {(currentFrame == "About Me" || currentFrame == "Projects") &&
                        <Button
                            buttonType="Icon"
                            iconName="backArrow" 
                            onClick={() => startFrameFadeAnimation("Main")}
                        />
                    }
                </div>
                <div className='frame__head--center'>
                    {currentFrame == "Main" &&     <h5>HENRIQUE BARBOSA</h5> }
                    {currentFrame == "About Me" && <div className='subheading3'>Sobre Mim</div>}
                    {currentFrame == "Projects" && <div className='subheading3'>Projetos</div>}
                </div>
                <div className="frame__head--r-side"></div>
            </header>
            <div className={`frame__body ${currentFrame == "About Me" ? "expand-vertically" : ""}`}>
                {currentFrame != "About Me" && (
                    <nav className={`frame__body__column ${currentFrame == "Projects" ? "frame__body__column--projects" : "frame__body__column--main"}`}>
                        {currentFrame == "Main" && (<>
                            {Object.keys(MAIN_BUTTONS).map((buttonName, index) => <Button
                                key={index}
                                buttonType="Text"
                                onHover={() => startImageFadeAnimation(`${buttonName} Button (${currentFrame})`)}
                                onClick={() => {
                                    if(Object.prototype.hasOwnProperty.call(MAIN_BUTTONS[buttonName], 'Frame Name')){
                                        startFrameFadeAnimation(MAIN_BUTTONS[buttonName]["Frame Name"])
                                    }
                                    if(Object.prototype.hasOwnProperty.call(MAIN_BUTTONS[buttonName], 'Link')){
                                        window.open(MAIN_BUTTONS[buttonName]["Link"], '_blank', "noreferrer")
                                    }
                                }}
                                iconName={MAIN_BUTTONS[buttonName]["Icon"]}
                                text={MAIN_BUTTONS[buttonName]["Text"]}
                                link={Object.prototype.hasOwnProperty.call(MAIN_BUTTONS[buttonName], 'Link') ? MAIN_BUTTONS[buttonName]["Link"] : ""}
                            />)}
                        </>)}
                        {currentFrame == "Projects" && (<>
                            {Object.keys(PROJECTS).map((areaName, index) => <DropdownMenu
                                key={index}
                                menuName={areaName}
                                rows={PROJECTS[areaName]}
                                onRowHover={rowName => startImageFadeAnimation(`${rowName} Row (${currentFrame})`)}
                                onRowClick={rowName => window.open(PROJECTS[areaName][rowName]["Link"], '_blank', "noreferrer").focus()}
                            />)}
                            <div className='body2 more-projects-label'>E expandindo...</div>
                        </>)}
                    </nav>
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
                            IMAGES[SELECTIONS[currentSelection]["Description Image"]]["File Name"]
                        ) || (currentFrame == "About Me" && 
                            ""
                        )
                    }
                    imgDescription={
                        ((currentFrame == "Main" || currentFrame == "Projects") && 
                            IMAGES[SELECTIONS[currentSelection]["Description Image"]]["Alt Text"]
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
                            setDescriptionPadText(SELECTIONS[currentSelection]["Description Text"])
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
                            setDescriptionPadText(SELECTIONS[currentSelection]["Description Text"])
                        }}
                    />
                </div>
            }
        </div>
    </section>
}
 
export default Frame;