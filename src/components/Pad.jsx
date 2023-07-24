// STYLE
import './Pad.css';

function Pad({type, onClick, padText, imgName, imgDescription, visibilityClass, cursor}) {

    return <div type={type} className="pad" onClick={onClick}>
        <div className="pad__background body2">
            {type == "image" && 
                <img className={`pad__display ${visibilityClass}`} src={imgName} alt={imgDescription} />
            }
            {(type == "text-line" || type == "text-paragraph") &&
                padText + cursor
            }
            
        </div>
    </div>;
}

export default Pad;