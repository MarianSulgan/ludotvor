/**
 * Generator of shapes
 * 
 * Functions (possibly api) for generating shapes using shape grammar idea
 * 
 * @todo: create database for basic shapes, so it is searchable for ID when fetching svgs from particular location
 * @todo: refactor
 * @todo: create API (expose)
 * @todo: clean code
 * @todo: create sets of rules
 */

import 'whatwg-fetch'; // _fetch_ polyfill for IE and similar

import Layouts from 'data/layouts';
import 'utils/functions';
import ShapeContainer from './core/ShapeContainer';
import Randomizer from './core/Randomizer';

/**
 * Main function for generating SVG pattern
 * @param options input options, for example layout type
 * @param callback callback with SVG content inside, to be rendered
 */
async function generatePattern(options, callback) {

    let shapeContainers = [];

    switch(options.layoutType) {



        case Layouts.Lines:

            /**
             * Layout: LINES
             */

            console.log("Lines SG");
            break;

        case Layouts.Free: {

            /**
             * Layout: FREE
             */
            console.log("Free SG");

            const elementCount = options.freeCount;
            const elementSize = options.freeSide;
            const refSide = 200;
            // const _side = 200;
            let _side = (elementSize / refSide);
            const refW = options.canvasWidth;
            const refH = options.canvasHeight;

            let arr = Randomizer.generateNonoverlappingArray(refW - _side * 100, refH - _side * 100, _side * 200, 30);
            for (let i = 0; i < elementCount; i++) {
                shapeContainers[i] = new ShapeContainer();
                let p = Randomizer.getNextPosition(arr);
                if (p) {
                    // random position on canvas
                    shapeContainers[i].position = p;
                    // random shape to be placed at position
                    let index = i % options.basicShapesIds.length;
                    shapeContainers[i].shapeId = options.basicShapesIds[index];
                    shapeContainers[i].index = index;
                    // move shape to position + add transformations
                    let transforms = ` scale(${_side}) `;
                    shapeContainers[i].transforms = 
                        ` translate(${shapeContainers[i].position.x}, ${shapeContainers[i].position.y}) ` + transforms; 
                }
            }
        } break;
        
        case Layouts.Grid:
            
            /**
             * default is GRID, code is intentionally placed in _default_ case a
             * and _break;_ omitted to use fallthrough principle in switch
             */

        // eslint-disable-next-line
        default:

            /**
             * Layout: GRID
             */
            
            if (options.basicShapesIds === null || options.basicShapesIds.length === 0)
                return;
                
            let gridSize = options.horizontalCount * options.verticalCount;
            
            // create empty grid representation
            for (let i = 0; i < gridSize; i++) {
                shapeContainers.push(new ShapeContainer({
                    shapeId: null,
                    transforms: null,
                    position: {x: 0, y: 0}
                }));
            }

            /**
             * Rules assignment
             */
            let rules = [];
            switch (options.basicShapesIds.length) {
                case 1:
                    console.log("Rule set 1");
                    rules = [
                        { left: "0", right: "A" },
                        { left: "A", right: "AA"}
                    ];
                    break;
                case 2:
                    console.log("Rule set 2");
                    rules = [
                        { left: "0", right: "A" },
                        { left: "0", right: "B" },
                        { left: "A", right: "AB" },
                        { left: "B", right: "BA" },
                        { left: "A", right: "AA" },
                        { left: "B", right: "BB" },
                        { left: "AA", right: "ABAB"}
                    ];
                    break;
                case 3:
                    console.log("Rule set 3");
                    rules = [ 
                        { left: "0", right: "A" },
                        { left: "0", right: "B" },
                        { left: "0", right: "C" },
                        { left: "A", right: "AB" },
                        { left: "A", right: "AC" },
                        { left: "B", right: "BA" },
                        { left: "B", right: "BC" },
                        { left: "C", right: "CA" },
                        { left: "C", right: "CB" },
                    ];
                    break;
                case 4:
                    console.log("Rule set 4");
                    rules = [
                        { left: "0", right: "A" },
                        { left: "0", right: "B" },
                        { left: "0", right: "C" },
                        { left: "0", right: "D" },
                        { left: "A", right: "AACC" },
                        { left: "B", right: "BA" },
                        { left: "C", right: "CCDD" },
                        { left: "D", right: "ABCD" },
                    ]
                    break;
                case 5:
                    console.log("Rule set 5");
                    break;                
                case 6:
                    console.log("Rule set 6");
                    break;
                default:
                    console.log('Sorry for party rocking.');
                    return;
            }

            /**
             * Generation
             */
            let str = "0";
            let lastRule = null;
            do {

                // find all appliable rules
                let nowRules = [];
                for (let i = 0; i < rules.length; i++) {
                    if (str.includes(rules[i].left))
                        nowRules.push(rules[i]);
                }

                // choose rule to apply (random)
                let index = Math.floor(Math.random() * nowRules.length);

                // choose rule to apply (last unused rule)
                // let index = 0
                // for (let i = 0; i < nowRules.length; i++) {
                //     if (nowRules[i] != lastRule) {
                //         index = i;
                //         // break;
                //     }
                // }

                // apply rule 
                // @todo: choose approach

                // 1. to last occurence
                // let n = str.lastIndexOf(nowRules[index].left);
                // str = str.slice(0, n) + str.slice(n).replace(nowRules[index].left, nowRules[index].right);

                // 2. to first occurence
                // str = str.replace(nowRules[index].left, nowRules[index].right);

                // 3. to all occurences
                str = str.replaceAll(nowRules[index].left, nowRules[index].right);
                
                lastRule = nowRules[index];

            } while(str.length < gridSize)

            // string to array        
            let arr = [];
            Array.prototype.map.call(str, function(x) {
                arr.push(x.charCodeAt(0) - "A".charCodeAt(0));
            });

            /**
             * Visualization
             */
            let side = options.svgSide;
            // determine margin for tile
            const margin = options.marginValue * 10;
            // offset to [0,0]
            const patternMargin = 0;
            // determine size of tile
            const refW = options.canvasWidth;
            const n = options.horizontalCount;

            for (let i = 0; i < gridSize; i++) {
                
                // calculate position for each tile
                let k = i % options.horizontalCount;
                let l = Math.floor(i / options.horizontalCount);
                shapeContainers[i].position = {
                    x: patternMargin + k * (side + margin),
                    y: patternMargin + l * (side + margin)
                }
                let index = arr[i];
                shapeContainers[i].shapeId = options.basicShapesIds[index];
                shapeContainers[i].index = index;

                // create transforms 
                let val = refW / (n * side + (n - 1) * margin);
                let transforms = `scale(${val}) `;
                //  merge positioning and transforms
                // ! NOTE: transforms work from RIGHT to LEFT !
                shapeContainers[i].transforms = 
                    transforms + 
                    `translate(${shapeContainers[i].position.x}, ${shapeContainers[i].position.y})`;
            }
    }

    // build urls
    let urls = [];
    for (let i = 0; i < options.basicShapesIds.length; i++) {
        urls.push('svg/' + options.basicShapesIds[i] + '.svg');
    }

    // fetch all svgs from specified urls (in variable urls[])
    let staticSvgs = [];
    const grabContent = url => fetch(url)
        .then(res => res.text())
        .then(data => {
            // process data here
            staticSvgs.push(data);
        })

    Promise
        .all(urls.map(grabContent))
        .then(() => {
            // pass relevant data as callback in scenes/Editor
            callback({
                staticSvgs: staticSvgs, 
                shapeContainers: shapeContainers
            });
        });
}



const Generator = {
    generatePattern: generatePattern
}

export default Generator;