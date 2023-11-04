// PROJECT DATA
import { SUPPORTED_LANGUAGES, PROJECT_CATEGORIES } from "../js/constants";

// STYLE
import "./Frame.css"

// COMPONENTS
import ImageDisplay from "./ImageDisplay";
import Button from "./Button";
import Pad from "./Pad";
import DropdownMenu from "./Dropdown/DropdownMenu";

// REACT HOOKS
import { useTranslation } from "react-i18next"
import { useState, useRef, useEffect } from "react";
import { getProjects } from "../js/utils";

function Frame() {
    
    const { t, i18n } = useTranslation();

    // MAIN BUTTONS (SECTION CHANGING)
    const MAIN_BUTTONS = {
        "main.aboutMe": {
            "text": t("mainButtons.aboutMe.buttonText"),
            "icon": "user",
            "frameName": "aboutMe"
        },
        "main.projects": {
            "text": t("mainButtons.projects.buttonText"),
            "icon": "folder",
            "frameName": "projects"
        },
        "main.linkedin": {
            "text": t("mainButtons.linkedin.buttonText"),
            "icon": "linkedin",
            "link": "https://www.linkedin.com/in/henribdev/"
        },
        "main.github": {
            "text": t("mainButtons.github.buttonText"),
            "icon": "github",
            "link": "https://github.com/HenriBDev"
        }
    };
    
    // STATES
    let [descriptionPadText, setDescriptionPadText] = useState(""),
        [currentSelection, setCurrentSelection] = useState("main"),
        [currentFrame, setCurrentFrame] = useState("main"),
        [frameImageVisibilityClass, setFrameImageVisibilityClass] = useState(""),
        [frameVisibilityClass, setFrameVisibilityClass] = useState(""),
        [padCursor, setpadCursor] = useState(""),
        [imageDisplayIsVisible, setImageDisplayIsVisible] = useState(false),
        [languageSelected, setLanguageSelected] = useState(i18n.resolvedLanguage);
        
    // PERSISTENT VALUES
    const HENRIBDEV_PROJECTS = useRef({}),
        IMAGES = useRef({
            "me": {
                "image": "myPhoto.jpg",
                "altTextKey": "imagesAltText.me"
            },
            "projects": {
                "image": "bugHunter.png",
                "altTextKey": "imagesAltText.projects"
            },
            "projectsPlaceholder": {
                // Photo by Stanley Dai on Unsplash. Link: https://unsplash.com/photos/73OZYNjVoNI
                "image": "projects.jpg",
                "altTextKey": "imagesAltText.projectPlaceholder"
            }
        }),
        DESCRIPTIONS = useRef({
            "main": {
                "descriptionImage": "me",
                "descriptionTextKey": "descriptionPads.main"
            },
            "main.aboutMe": {
                "descriptionImage": "me",
                "descriptionTextKey": "mainButtons.aboutMe.descriptionText",
            },
            "main.projects": {
                "descriptionImage": "projects",
                "descriptionTextKey": "mainButtons.projects.descriptionText",
            },
            "main.linkedin": {
                "descriptionImage": "me",
                "descriptionTextKey": "mainButtons.linkedin.descriptionText",
            },
            "main.github": {
                "descriptionImage": "me",
                "descriptionTextKey": "mainButtons.github.descriptionText",
            },
            "aboutMe": {
                "descriptionImage": "projects",
                "descriptionTextKey": "descriptionPads.aboutMe"
            },
            "projects": {
                "descriptionImage": "projectsPlaceholder",
                "descriptionTextKey": "descriptionPads.projects"
            },
        }),
        TEXT_INDEX = useRef(1),
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
            if(DESCRIPTIONS.current[currentSelection]["descriptionImage"] != DESCRIPTIONS.current[newSelection]["descriptionImage"]){
                setFrameImageVisibilityClass("hidden")
            }else{
                setCurrentSelection(newSelection)
            }
        },

    // EFFECT FUNCTIONS
        imageFadeAnimation = () => {
            if (frameImageVisibilityClass == "hidden") {
                IMAGE_ANIMATION_TIMER.current = setTimeout(() => { 
                    setFrameImageVisibilityClass("") 
                }, 150)
            } else if (frameImageVisibilityClass == ""){
                setCurrentSelection(CURRENT_SELECTION_PERSISTENT.current)
            }
        },
        frameFadeAnimation = () => {
            if (frameVisibilityClass == "hidden") {
                setTimeout(() => { setFrameVisibilityClass("") }, 300)
            } else if (frameVisibilityClass == ""){
                setCurrentFrame(CURRENT_FRAME_PERSISTENT.current)
                setCurrentSelection(CURRENT_FRAME_PERSISTENT.current)
            }
        },
        clearTextAnimation = () => {
            clearTimeout(TEXT_ANIMATION_TIMER.current)
            TEXT_INDEX.current = 2;
            setDescriptionPadText(t(DESCRIPTIONS.current[currentSelection]["descriptionTextKey"])[0]);
        },
        tickTextAnimation = () => {
            if (descriptionPadText != t(DESCRIPTIONS.current[currentSelection]["descriptionTextKey"])) {
                let timeoutMs = 0
                if (currentFrame == "aboutMe"){
                    timeoutMs = 15
                } else{
                    timeoutMs = 20
                }
                TEXT_ANIMATION_TIMER.current = setTimeout(() => {
                    setDescriptionPadText(t(DESCRIPTIONS.current[currentSelection]["descriptionTextKey"]).substring(0, TEXT_INDEX.current));
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
    useEffect(() => {(async () => {
        HENRIBDEV_PROJECTS.current = await getProjects()
        Object.keys(HENRIBDEV_PROJECTS.current).forEach(projId => {
            
            Object.keys(SUPPORTED_LANGUAGES).forEach(lng => {
                const translation = i18n.getResourceBundle(lng, "translation");
                translation["projects"][projId] = HENRIBDEV_PROJECTS.current[projId]["textContent"][lng]
                i18n.addResources(lng, "translation", translation);
            })    

            IMAGES.current[projId] = {
                "image": HENRIBDEV_PROJECTS.current[projId]["image"],
                "altTextKey": `projects.${projId}.imageAltText`
            }
            
            DESCRIPTIONS.current[`projects.${projId}`] = {
                "descriptionImage": projId,
                "descriptionTextKey": `projects.${projId}.descriptionText`
            }
            
        })
    })()}, [])

    // COMPONENT
    return <section className="frame">
        {imageDisplayIsVisible &&
            <ImageDisplay 
                imgName={IMAGES.current[DESCRIPTIONS.current[currentSelection]["descriptionImage"]]["image"]}
                imgDescription={t(IMAGES.current[DESCRIPTIONS.current[currentSelection]["descriptionImage"]]["altTextKey"])}
                closeEvent={() => setImageDisplayIsVisible(false)}
            />
        }
        <div className={`frame__content ${frameVisibilityClass}`}>
            <header className="frame__head">
                <div className="frame__head--l-side">
                    {(currentFrame == "aboutMe" || currentFrame == "projects") &&
                        <Button
                            buttonType="icon"
                            iconName="backArrow" 
                            onClick={() => startFrameFadeAnimation("main")}
                        />
                    }
                </div>
                <div className="frame__head--center">
                    {currentFrame == "main" &&     <h5>HENRIQUE BARBOSA</h5> }
                    {currentFrame == "aboutMe" && <div className="subheading3">{t("mainButtons.aboutMe.buttonText")}</div>}
                    {currentFrame == "projects" && <div className="subheading3">{t("mainButtons.projects.buttonText")}</div>}
                </div>
                <div className="frame__head--r-side body2">
                    {t("languageSelectLabel")}: <select className="language_selection body3" defaultValue={i18n.resolvedLanguage} onChange={e => setLanguageSelected(e.target.value)}>
                        {Object.keys(SUPPORTED_LANGUAGES).map(lng => <option 
                            key={lng} 
                            value={lng}
                        >
                            {SUPPORTED_LANGUAGES[lng]["nativeName"]}
                        </option>)}
                    </select>
                </div>
            </header>
            <div className={`frame__body`}>
                {currentFrame != "aboutMe" && (
                    <nav className={`frame__body__column ${currentFrame == "projects" ? "frame__body__column--projects" : "frame__body__column--main"}`}>
                        {currentFrame == "main" && (<>
                            {Object.keys(MAIN_BUTTONS).map((buttonName, index) => <Button
                                key={index}
                                buttonType="text"
                                onHover={() => startImageFadeAnimation(buttonName)}
                                onClick={() => {
                                    if(Object.prototype.hasOwnProperty.call(MAIN_BUTTONS[buttonName], "frameName")){
                                        startFrameFadeAnimation(MAIN_BUTTONS[buttonName]["frameName"])
                                    }
                                    if(Object.prototype.hasOwnProperty.call(MAIN_BUTTONS[buttonName], "link")){
                                        window.open(MAIN_BUTTONS[buttonName]["link"], "_blank", "noreferrer")
                                    }
                                }}
                                iconName={MAIN_BUTTONS[buttonName]["icon"]}
                                text={MAIN_BUTTONS[buttonName]["text"]}
                            />)}
                        </>)}
                        {currentFrame == "projects" && (<>
                            {Object.keys(PROJECT_CATEGORIES).map((categoryId, index) => <DropdownMenu
                                key={index}
                                menuName={t(`projectCategories.${categoryId}`)}
                                rows={(() => {
                                    let rows = {}
                                    Object.keys(HENRIBDEV_PROJECTS.current)
                                        .filter(projId => HENRIBDEV_PROJECTS.current[projId]["categories"].includes(categoryId))
                                        .forEach(projId => {
                                            rows[projId] = t(`projects.${projId}.name`)
                                        })
                                    return rows
                                })()}
                                onRowHover={projId => startImageFadeAnimation(`${currentFrame}.${projId}`)}
                                onRowClick={projId => window.open(HENRIBDEV_PROJECTS.current[projId]["url"], "_blank", "noreferrer").focus()}
                            />)}
                            <div className="body2 more-projects-label">{t("projectsMenuText")}</div>
                        </>)}
                    </nav>
                )}
                <Pad 
                    type={
                        ((currentFrame == "main" || currentFrame == "projects") && 
                            "image"
                        ) || (currentFrame == "aboutMe" && 
                            "text-paragraph"
                        )
                    } 
                    visibilityClass={frameImageVisibilityClass} 
                    imgName={
                        ((currentFrame == "main" || currentFrame == "projects") && 
                            IMAGES.current[DESCRIPTIONS.current[currentSelection]["descriptionImage"]]["image"]
                        ) || (currentFrame == "aboutMe" && 
                            ""
                        )
                    }
                    imgDescription={
                        ((currentFrame == "main" || currentFrame == "projects") && 
                            t(IMAGES.current[DESCRIPTIONS.current[currentSelection]["descriptionImage"]]["altTextKey"])
                        ) || (currentFrame == "aboutMe" && 
                            ""
                        )
                    }
                    padText={
                        ((currentFrame == "main" || currentFrame == "projects") && 
                            ""
                        ) || (currentFrame == "aboutMe" && 
                            descriptionPadText
                        )
                    }
                    cursor={padCursor}
                    onClick={() => {
                        if (currentFrame == "aboutMe"){ 
                            clearTimeout(TEXT_ANIMATION_TIMER.current)
                            setDescriptionPadText(t(DESCRIPTIONS.current[currentSelection]["descriptionTextKey"]))
                        }else{
                            setImageDisplayIsVisible(true)
                        }
                    }}
                />
            </div>
            {currentFrame != "aboutMe" &&
                <div className="frame__foot">
                    <Pad 
                        type="text-line" 
                        padText={descriptionPadText} 
                        cursor={padCursor}
                        onClick={() => {
                            clearTimeout(TEXT_ANIMATION_TIMER.current)
                            setDescriptionPadText(t(DESCRIPTIONS.current[currentSelection]["descriptionTextKey"]))
                        }}
                    />
                </div>
            }
        </div>
    </section>
}
 
export default Frame;