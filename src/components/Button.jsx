import './Button.css'

function Button({onHover, onLeaving, iconName, text}) {

    const iconPath = `src/assets/imgs/${iconName}Icon.svg`,
          iconAlt = `${iconName} Icon`;

    return <button className='button' onMouseEnter={onHover} onFocus={onHover} onBlur={onLeaving} onMouseLeave={onLeaving}>
        <img className="button__icon" src={iconPath} alt={iconAlt} />
        <div className="button__text subheading4">{text}</div>
    </button>;
    
}

export default Button;