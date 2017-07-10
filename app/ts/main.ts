import { describeArc, downloadSVG, positionText } from './utils';
import { dados } from './dados/exemplo1';
import { setFormHandler } from './formulario/formulario_function';
import { formulario } from './start/createFormulario';
import { describeArc, downloadSVG, positionText } from './utils';
import { dados } from './dados/exemplo1';
import { setFormHandler } from './formulario/formulario_function';

function createSVGCircle(radius: number, dados: {label: string, value: string}[]): SVGSVGElement {
    const colors = ['red', 'blue', 'green', 'gray', 'orange'];

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', `0 0 ${radius * 4} ${radius * 4}`);
    svg.setAttribute('width', radius * 4 + 'px');
    svg.setAttribute('height', radius * 4 + 'px');

    let startAngle: number;

    dados.forEach(({label, value}, idx) => {
        let endAngle: number;

        const perc = convertValueToPercentage(value);

        if (startAngle === undefined) {
            let arc = 360 * perc;

            endAngle = (arc - 180) / 2;
            startAngle = endAngle - 360 * perc;
        } else {
            endAngle = 360 * perc + startAngle;
        }
        const arc = describeArc(radius * 2, radius * 2, radius, startAngle, endAngle);
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', arc);
        path.setAttribute('fill', colors[idx]);
        svg.appendChild(path);

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        const span = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
        const position = positionText(radius * 2, radius * 2, radius, startAngle, endAngle);
        span.textContent = label + ' ' + perc + '%';
        span.setAttribute('text-anchor', position.x >= radius * 2 ? 'start' : 'end');
        text.appendChild(span);

        text.setAttribute('x', position.x.toString(10));
        text.setAttribute('y', position.y.toString(10));
        text.setAttribute('fill', colors[idx]);
        svg.appendChild(text);

        startAngle = endAngle;
    });

    return svg;
}

function convertValueToPercentage(value: string): number {
    return parseFloat(parseFloat(value).toFixed(1)) / 100;
}

const svg = createSVGCircle(200, dados);

const anchor = document.createElement('a');
anchor.textContent = 'Download';
anchor.href = '';

downloadSVG(svg, anchor);

document.body.appendChild(anchor);
document.body.appendChild(svg);

document.body.appendChild(formulario.formEl);

setFormHandler();
