import { PREMADE_SVG_ICONS } from "../js/constants";

function SvgIcon({iconName, customClasses}) {
    
    return <svg 
        className={`svg-icon ${customClasses}`} 
        width={PREMADE_SVG_ICONS[iconName]["width"]} 
        height={PREMADE_SVG_ICONS[iconName]["height"]}
        viewBox={`0 0 ${PREMADE_SVG_ICONS[iconName]["width"]} ${PREMADE_SVG_ICONS[iconName]["height"]}`} 
        xmlns="http://www.w3.org/2000/svg">

        {PREMADE_SVG_ICONS[iconName]["path"]}

    </svg>;
}

export default SvgIcon;