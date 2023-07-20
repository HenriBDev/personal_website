import './DropdownRow.css'

function DropdownRow({onHover, onClick, rowText, isEndRow}) {
    return <div className="dropdown-row" onMouseEnter={onHover} onClick={onClick}>

        <div className="dropdown-row__container">
            <img 
                src={`src/assets/svgs/selectionTree${isEndRow ? "End" : ""}Icon.svg`} 
                alt="Dropdown Row Icon" 
                className="dropdown-row__icon"
            />
        </div>

        <div className="dropdown-row__text body2">{rowText}</div>

    </div>
}

export default DropdownRow;