// STYLE
import './Button.css'

// COMPONENTS
import SvgIcon from './SvgIcon';

function Button({buttonType, onHover, onLeaving, onClick, iconName, text}) {

    return (
        <button
            type={buttonType} 
            className='button' 
            onMouseEnter={onHover} 
            onFocus={onHover} 
            onBlur={onLeaving} 
            onMouseLeave={onLeaving}
            onClick={onClick}
        >
            {buttonType == "Text" &&
                <div className="button__text subheading4">{text}</div>
            }

            <SvgIcon iconName={iconName} customClasses="button__icon"/>
        </button>
    );
    
}

export default Button;