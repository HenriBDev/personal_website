import './DropdownRow.css'
import SvgIcon from '../SvgIcon';

function DropdownRow({onHover, onClick, rowText, isEndRow}) {
    return <div className="dropdown-row">

        <SvgIcon
            iconName={`selectionTree${isEndRow ? "End" : ""}`}
            customClasses="dropdown-row__icon"
        />

        <div className="dropdown-row__text body2" onMouseEnter={onHover} onClick={onClick}>{rowText}</div>

    </div>
}

export default DropdownRow;