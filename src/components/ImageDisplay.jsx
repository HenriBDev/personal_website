import './ImageDisplay.css'

function ImageDisplay({imgName, imgDescription, closeEvent}) {
    return <figure className="image-display" onClick={closeEvent}>

        <img className="image-display__image" src={`src/assets/imgs/${imgName}`} alt={imgDescription} />
        <figcaption className="image-display__description body2">{imgDescription}</figcaption>

    </figure>;
}

export default ImageDisplay;