import './ImageDisplay.css'

function ImageDisplay({imgName, imgDescription, closeEvent}) {
    return <div className="image-display" onClick={closeEvent}>

        <img className="image-display__image" src={`src/assets/imgs/${imgName}`} alt={imgDescription} />
        <div className="image-display__description body2">{imgDescription}</div>

    </div>;
}

export default ImageDisplay;