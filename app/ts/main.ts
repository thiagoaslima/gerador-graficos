import { describeArc, downloadSVG } from './utils';

const arc1 = describeArc(200, 200, 80, 90, 320);
const arc2 = describeArc(200, 200, 80, 320, 90);

const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('viewBox', '0 0 600 600');
svg.setAttribute('width', '200px');
svg.setAttribute('height', '200px');

const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
path1.setAttribute('d', arc1);
const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
path2.setAttribute('d', arc2);
path2.setAttribute('fill', 'red');

svg.appendChild(path1);
svg.appendChild(path2);

const anchor = document.createElement('a');
anchor.href = '';

downloadSVG(svg, anchor);

document.body.appendChild(svg);
document.body.appendChild(anchor);
