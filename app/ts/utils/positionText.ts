import { polarToCartesian } from '.';

export function positionText(x: number, y: number, radius: number, startAngle: number, endAngle: number): { x: number, y: number } {
    const angle = (endAngle - startAngle) / 2 + startAngle;
    let multiplier = 1.1;

    if ( 
        (angle >= 0 && angle < 15) ||
        (angle > 165 && angle < 195) ||
        (angle > 345 && angle <= 360)
    ) {
        multiplier = 1.15;
    }
    return polarToCartesian(x, y, radius * multiplier, angle);
}
