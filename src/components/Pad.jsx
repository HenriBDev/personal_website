import { useState } from 'react';
import './Pad.css';

function Pad({type, onClick, padText, imgName, visibilityClass, cursor}) {

    return <div type={type} className="pad" onClick={onClick}>
        <div className="pad__background body2">
            {type == "image" && 
                <img className={`pad__display ${visibilityClass}`} src={`src/assets/imgs/${imgName}`} alt="Pad Display Screen" />
            }
            {(type == "text-line" || type == "text-paragraph") &&
                padText + cursor
            }
            
        </div>
    </div>;
}

export default Pad;