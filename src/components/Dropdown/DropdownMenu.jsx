import { useState } from 'react';
import DropdownButton from './DropdownButton';
import DropdownRow from './DropdownRow';

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
        {dropdownIsOpen && (Object.keys(rows).map((rowName, index) => <DropdownRow
            key={index}
            onHover={() => onRowHover(rowName)}
            onClick={() => onRowClick(rowName)}
            rowText={rowName}
            isEndRow={index === TOTAL_ROWS - 1}
        />))}
    </div>
}

export default DropdownMenu;