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
            onTouchStart={onHover}
            onBlur={onLeaving} 
            onMouseLeave={onLeaving}
            onClick={onClick}
        >
            <SvgIcon iconName={iconName} customClasses="button__icon"/>
            {buttonType == "text" &&
                <div className="button__text subheading4">{text}</div>
            }

        </button>
    );
    
}

export default Button;