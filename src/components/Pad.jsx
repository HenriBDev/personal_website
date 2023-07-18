import { useState } from 'react';
import './Pad.css';

function Pad({type, padText, imgName, imgVisibility}) {

    const IMG_PATH = `src/assets/imgs/${imgName}`,
          PAD_DISPLAY_CLASSES = "pad__display" + (imgVisibility == "Hidden" ? " hidden" : "");

    return <div type={type} className="pad">
        <div className="pad__background body2">
            {type == "image" && 
                <img className={PAD_DISPLAY_CLASSES} src={IMG_PATH} alt="Pad Display Screen" />
            }
            {type == "text" &&
                padText
            }
            
        </div>
    </div>;
}

export default Pad;