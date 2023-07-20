import './DropdownRow.css'
import SvgIcon from '../SvgIcon';

const SVG_SIZE = [24, 46],
    [SVG_WIDTH, SVG_HEIGHT] = SVG_SIZE,
    SVG_HALF_HEIGHT = SVG_HEIGHT/2

function DropdownRow({onHover, onClick, rowText, isEndRow}) {
    return <div className="dropdown-row">

        {/* The branch icon is draw dynamically according to the SVG_SIZE constant */}
        <svg width={SVG_SIZE[0]} height={SVG_SIZE[1]} className="dropdown-row__icon">
            <path 
                d={
                    "M 2.5, 0" + 
                    `L 2.5, ${SVG_HALF_HEIGHT}` + 
                    `L ${SVG_WIDTH}, ${SVG_HALF_HEIGHT}` +
                    (!isEndRow ? (
                        `M 2.5, ${SVG_HALF_HEIGHT}` +
                        `L 2.5, ${SVG_HEIGHT}`
                    ) : "")
                }
            />
        </svg>

        <div className="dropdown-row__text body2" onMouseEnter={onHover} onClick={onClick}>{rowText}</div>

    </div>
}

export default DropdownRow;