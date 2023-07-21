import { emToPx, TEXT_LINE_HEIGHT_BODY2 } from '../../js/typography'

// STYLE
import './DropdownRow.css'

const ROW_VERTICAL_PADDING = emToPx(0.5),
    [SVG_WIDTH, SVG_HEIGHT] = [emToPx(1.5), TEXT_LINE_HEIGHT_BODY2 + ROW_VERTICAL_PADDING * 2],
    SVG_HALF_HEIGHT = SVG_HEIGHT/2;

function DropdownRow({onHover, onClick, rowText, isEndRow}) {
    return <div className="dropdown-row">

        <svg className="dropdown-row__icon">
            {/* The branch icon is draw dynamically according to the SVG_SIZE constant */}
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