// CALCULATES BASE FONT-SIZE OF BROWSER
const element = document.createElement('div');
element.style.width = '1rem';
element.style.display = 'none';
document.body.append(element);
const BASE_PIXEL_SIZE = window
    .getComputedStyle(element)
    .getPropertyValue('width')
    .match(/\d+/);
element.remove();

export function pxToEm(px) { return px / BASE_PIXEL_SIZE }
export function emToPx(em) { return em * BASE_PIXEL_SIZE }

const LINE_HEIGHT_PERCENTAGE = 1.5;

export const TEXT_SIZE_HEADING5 = emToPx(3.125);
export const TEXT_LINE_HEIGHT_HEADING5 = TEXT_SIZE_HEADING5 * LINE_HEIGHT_PERCENTAGE;
export const TEXT_SIZE_SUBHEADING3 = emToPx(2.5);
export const TEXT_LINE_HEIGHT_SUBHEADING3 = TEXT_SIZE_SUBHEADING3 * LINE_HEIGHT_PERCENTAGE;
export const TEXT_SIZE_SUBHEADING4 = emToPx(2);
export const TEXT_LINE_HEIGHT_SUBHEADING4 = TEXT_SIZE_SUBHEADING4 * LINE_HEIGHT_PERCENTAGE;
export const TEXT_SIZE_BODY2 = emToPx(1.625);
export const TEXT_LINE_HEIGHT_BODY2 = TEXT_SIZE_BODY2 * LINE_HEIGHT_PERCENTAGE;