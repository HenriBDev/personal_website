// STYLE
import './DropdownButton.css'

// COMPONENTS
import SvgIcon from '../SvgIcon';

function DropdownButton({menuName, onClick, dropdownIsOpen}) {

    return <div className={`dropdown-button body2 ${dropdownIsOpen && "text-color-brightbg"}`} onClick={onClick}>

        <SvgIcon iconName="dropdown" customClasses={`dropdown-button__icon ${dropdownIsOpen ? "rotate-90 fill-color-brightbg" : ""}` }/>
        {menuName}

    </div>;
}

export default DropdownButton;