import { polarToCartesian } from '.';

export function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {

    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    const d = [
        'M', start.x, start.y,
        'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
        'L', x, y,
        'L', start.x, start.y
    ].join(' ');

    return d;
}
