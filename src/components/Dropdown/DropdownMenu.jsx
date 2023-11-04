// STYLE
import './DropdownMenu.css'

// COMPONENTS
import DropdownButton from './DropdownButton';
import DropdownRow from './DropdownRow';

// REACT HOOKS
import { useState } from 'react';

function DropdownMenu({menuName, rows, onRowHover, onRowClick}) {

    const ROWS_NAMES = Object.keys(rows),
        TOTAL_ROWS = ROWS_NAMES.length; 

    let [dropdownIsOpen, setDropdownIsOpen] = useState(false);

    return <div className="dropdown-menu">
        <DropdownButton 
            menuName={menuName} 
            onClick={() => setDropdownIsOpen(state => !state)} 
            dropdownIsOpen={dropdownIsOpen}
        />
        <div 
            className="dropdown-menu__rows-container"
            style={dropdownIsOpen ? {
                height: `calc((var(--text__line-height--body2) + 1rem) * ${TOTAL_ROWS})` 
            } : {
                height: 0
            }}
        >
            {dropdownIsOpen && (Object.keys(rows).map((projId, index) => <DropdownRow
                key={index}
                onHover={() => dropdownIsOpen ? onRowHover(projId) : {}}
                onClick={() => dropdownIsOpen ? onRowClick(projId) : {}}
                rowText={rows[projId]}
                isEndRow={index === TOTAL_ROWS - 1}
            />))}
        </div>
    </div>
}

export default DropdownMenu;