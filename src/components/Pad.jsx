import { useState } from 'react';
import './Pad.css';

function Pad({type, padText}) {

    return <div type={type} className="pad">
        <div className="pad__background body2">
            {type == "image" && 
                <img className="pad__display" src="src/assets/imgs/myPhoto.jpg" alt="Pad Display Screen" width="365.7" height="365.7" />
            }
            {type == "text" &&
                padText
            }
            
        </div>
    </div>;
}

export default Pad;