// STYLE
import './Frame.css'

// COMPONENTS
import ImageDisplay from './ImageDisplay';
import Button from './Button';
import Pad from './Pad';
import DropdownMenu from './Dropdown/DropdownMenu';

// REACT HOOKS
import {useTranslation} from 'react-i18next'
import { useState, useRef, useEffect } from 'react';

function Frame() {
    
    const { t, i18n } = useTranslation();

    // IMAGES AND THEIR DESCRIPTIONS
    const IMAGES = {
        "Henrique": {
            "File Name": "myPhoto.jpg",
            "Alt Text": t('images.me.altText')
        },
        "Bug Hunter":{
            "File Name": "bugHunter.png",
            "Alt Text": t('images.bugHunter.altText')
        },
        "DocWriter": {
            "File Name": "docwriter.png",
            "Alt Text": t('images.docWriter.altText')
        },
        "Warehouse": {
            "File Name": "warehouse.png",
            "Alt Text": t('images.warehouse.altText')
        },
        "Projects": {
            // Photo by Stanley Dai on Unsplash. Link: https://unsplash.com/photos/73OZYNjVoNI
            "File Name": "projects.jpg",
            "Alt Text": t('images.projects.altText')
        },
        "Emoji Face": {
            "File Name": "emojiFace.png",
            "Alt Text": t('images.emojiFace.altText')
        }
    };

    // MAIN BUTTONS (SECTION CHANGING)
    const MAIN_BUTTONS = {
        "About Me": {
            "Description Image": "Henrique",
            "Description Text": t('buttons.main.aboutMe.descriptionText'),
            "Text": t('buttons.main.aboutMe.buttonText'),
            "Icon": "user",
            "Frame Name": "About Me"
        },
        "Projects": {
            "Description Image": "Bug Hunter",
            "Description Text": t('buttons.main.projects.descriptionText'),
            "Text": t('buttons.main.projects.buttonText'),
            "Icon": "folder",
            "Frame Name": "Projects"
        },
        "LinkedIn": {
            "Description Image": "Henrique",
            "Description Text": t('buttons.main.linkedin.descriptionText'),
            "Text": t('buttons.main.linkedin.buttonText'),
            "Icon": "linkedin",
            "Link": "https://www.linkedin.com/in/henribdev/"
        },
        "GitHub": {
            "Description Image": "Henrique",
            "Description Text": t('buttons.main.github.descriptionText'),
            "Text": t('buttons.main.github.buttonText'),
            "Icon": "github",
            "Link": "https://github.com/HenriBDev"
        }
    };

    // DROPDOWN MENUS (PROJECTS SEPARATED BY AREA)
    let webDevelopementLabel = t('dropdownMenus.webDevelopment'),
        gameDevelopmentLabel = t('dropdownMenus.gameDevelopment');

    const PROJECTS = {}
    PROJECTS[webDevelopementLabel] = {}
    PROJECTS[webDevelopementLabel][t('buttons.projects.webDevelopment.personalWebsite.buttonText')] = {
        "Description Image": "Emoji Face",
        "Description Text": t('buttons.projects.webDevelopment.personalWebsite.descriptionText'),
        "Link": window.location.href
    }
    PROJECTS[webDevelopementLabel][t('buttons.projects.webDevelopment.docWriter.buttonText')] = {
        "Description Image": "DocWriter",
        "Description Text": t('buttons.projects.webDevelopment.docWriter.descriptionText'),
        "Link": "https://github.com/HenriBDev/DocWriter"
    }
    PROJECTS[webDevelopementLabel][t('buttons.projects.webDevelopment.bugHunter.buttonText')] = {
        "Description Image": "Bug Hunter",
        "Description Text": t('buttons.projects.webDevelopment.bugHunter.descriptionText'),
        "Link": "https://henribdev.github.io/Bug-Hunter/"
    }
    PROJECTS[webDevelopementLabel][t('buttons.projects.webDevelopment.warehouse.buttonText')] = {
        "Description Image": "Warehouse",
        "Description Text": t('buttons.projects.webDevelopment.warehouse.descriptionText'),
        "Link": "https://github.com/Vichiat0/Warehouse"
    }
    PROJECTS[gameDevelopmentLabel] = {}
    PROJECTS[gameDevelopmentLabel][t('buttons.projects.gameDevelopment.bugHunter.buttonText')] = {
        "Description Image": "Bug Hunter",
        "Description Text": t('buttons.projects.gameDevelopment.bugHunter.descriptionText'),
        "Link": "https://henribdev.github.io/Bug-Hunter/"
    }

    // SELECTION VALUES
    const SELECTIONS = {
        "None (Main)": {
            "Description Image": "Henrique",
            "Description Text": t('descriptionPads.main')
        },
        "None (About Me)": {
            "Description Image": "",
            "Description Text": t('descriptionPads.aboutMe')
        },
        "None (Projects)": {
            "Description Image": "Projects",
            "Description Text": t('descriptionPads.projects')
        },
    };

    // Adds main's buttons as selections
    Object.keys(MAIN_BUTTONS).forEach(buttonName => {
        SELECTIONS[buttonName + " Button (Main)"] = {
            "Description Image": MAIN_BUTTONS[buttonName]["Description Image"],
            "Description Text": MAIN_BUTTONS[buttonName]["Description Text"]
        }
    });

    // Adds projects as selections
    Object.keys(PROJECTS).forEach(areaName => {
        Object.keys(PROJECTS[areaName]).forEach(projectName => {
            SELECTIONS[projectName + " Row (Projects)"] = PROJECTS[areaName][projectName]
        })
    });

    // LANGUAGES
    const LNGS = {
        "pt-BR": { nativeName: 'Português (Brasil)' },
        "en": { nativeName: 'English' }
    };
    
    // STATES
    let [descriptionPadText, setDescriptionPadText] = useState(""),
        [currentSelection, setcurrentSelection] = useState("None (Main)"),
        [currentFrame, setCurrentFrame] = useState("Main"),
        [frameImageVisibilityClass, setFrameImageVisibilityClass] = useState(""),
        [frameVisibilityClass, setFrameVisibilityClass] = useState(""),
        [padCursor, setpadCursor] = useState(""),
        [imageDisplayIsVisible, setImageDisplayIsVisible] = useState(false),
        [languageSelected, setLanguageSelected] = useState(i18n.resolvedLanguage);
        
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
        },
        changeLanguageSelected = () => {
            i18n.changeLanguage(languageSelected)
            clearTextAnimation()
        };

    // EFFECTS
    useEffect(frameFadeAnimation, [frameVisibilityClass]);
    useEffect(imageFadeAnimation, [frameImageVisibilityClass]);
    useEffect(clearTextAnimation, [currentSelection]);
    useEffect(tickTextAnimation, [descriptionPadText]);
    useEffect(togglePadCursor, [padCursor]);
    useEffect(changeLanguageSelected, [languageSelected]);

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
                    {currentFrame == "About Me" && <div className='subheading3'>{t('buttons.main.aboutMe.buttonText')}</div>}
                    {currentFrame == "Projects" && <div className='subheading3'>{t('buttons.main.projects.buttonText')}</div>}
                </div>
                <div className="frame__head--r-side body2">
                    {t('languageSelectLabel')}: <select className='language_selection body3' defaultValue={i18n.resolvedLanguage} onChange={e => setLanguageSelected(e.target.value)}>
                        {Object.keys(LNGS).map(lng => <option 
                            key={lng} 
                            value={lng}
                        >
                            {LNGS[lng]["nativeName"]}
                        </option>)}
                    </select>
                </div>
            </header>
            <div className={`frame__body`}>
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
                            <div className='body2 more-projects-label'>{t('projectsMenuText')}</div>
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