/**
 * Sample SVG files for testing purposes
 */

/* eslint-disable */

import React from 'react';

const Shapes = [
    (
        <svg 
            version="1.1"
            baseProfile="full"
            width="200"
            height="200"
            xmlns="http://www.w3.org/2000/svg"
            id="svg1">
            <g>
                <circle cx="100" cy="100" r="80" fill="orange" />
                <g transform="translate(-50,-50)">
                    <g>
                        <circle cx="150" cy="100" r="40" fill="wheat" />
                    </g>
                </g>
            </g>
        </svg>
    ),
    (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            width="360"
            height="360"
            id="svg2">
            <defs
                id="defs4" />
            <g
                id="layer1">
                <rect
                width="30"
                height="30"
                x="120"
                y="90"
                transform="matrix(4,0,0,4,-450,-330)"
                id="rect2407"
                style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;marker:none;marker-start:none;marker-mid:none;marker-end:none;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" />
                <path
                d="M 169.58823,121.19571 L 154.58824,147.17647 L 184.58823,147.17647 L 169.58823,121.19571 z"
                transform="matrix(4.0000013,0,0,4.0000013,-588.35316,-266.70607)"
                id="path2462"
                style="fill:#000000;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
                <path
                d="M 165,185.5 L 150,211.46875 L 165,237.46875 L 195,237.46875 L 210,211.46875 L 195,185.5 L 165,185.5 z"
                transform="matrix(2,0,0,2,-90,-152.9375)"
                id="path2480"
                style="fill:#000000;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
                <path
                d="M 182.11764,276.70587 A 55.411762,54.35294 0 1 1 71.294117,276.70587 A 55.411762,54.35294 0 1 1 182.11764,276.70587 z"
                transform="matrix(1.0828026,0,0,1.1038962,132.80254,-215.45456)"
                id="path2490"
                style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;marker:none;marker-start:none;marker-mid:none;marker-end:none;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;visibility:visible;display:inline;overflow:visible;enable-background:accumulate" />
            </g>
        </svg>
    ),
];

export default Shapes;