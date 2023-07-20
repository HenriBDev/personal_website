import './DropdownButton.css'
import { useState } from 'react';

function DropdownButton({menuName, onClick, dropdownIsOpen}) {

    return <div className={`dropdown-button body2 ${dropdownIsOpen && "text-color-brightbg"}`} onClick={onClick}>

        <img 
            src="src/assets/svgs/dropdownIcon.svg" 
            alt="Dropdown Button Arrow Icon" 
            className={`dropdown-button__icon ${dropdownIsOpen ? "rotate-90" : ""}` }
        />
        {menuName}

    </div>;
}

export default DropdownButton;