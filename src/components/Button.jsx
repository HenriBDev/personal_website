import './Button.css'

function Button({buttonType, onHover, onLeaving, iconName, text}) {

    const iconPath = `src/assets/svgs/${iconName}Icon.svg`,
          iconAlt = `${iconName} Icon`;

    return (
        <button
            type={buttonType} 
            className='button' 
            onMouseEnter={onHover} 
            onFocus={onHover} 
            onBlur={onLeaving} 
            onMouseLeave={onLeaving}
        >
            {buttonType == "Text" &&
                <div className="button__text subheading4">{text}</div>
            }
            <img className="button__icon" src={iconPath} alt={iconAlt} />
        </button>
    );
    
}

export default Button;