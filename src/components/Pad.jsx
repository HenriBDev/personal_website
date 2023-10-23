// STYLE
import './Pad.css';

function Pad({type, onClick, padText, imgName, imgDescription, visibilityClass, cursor}) {

    let textLines = [padText]
    if (type == "text-paragraph"){
        textLines = padText.split("\n")
    }

    return <div type={type} className="pad" onClick={onClick}>
        <div className="pad__background body2">
            {type == "image" && 
                <img className={`pad__display ${visibilityClass}`} src={imgName} alt={imgDescription} />
            }
            {type == "text-line" &&
                padText + cursor
            }
            {type == "text-paragraph" && <>
                {textLines.map((line, index) => <>
                    {index > 0 && <br/>}{line}
                </>)}{cursor}
            </>}
        </div>
    </div>;
}

export default Pad;