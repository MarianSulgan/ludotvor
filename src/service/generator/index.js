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
import SGEngine from './core/SGEngine';
import { Store } from 'service/store';

/**
 * Main function for generating SVG pattern
 * @param options input options, for example layout type
 * @param callback callback with SVG content inside, to be rendered
 */
async function generatePattern(options, callback) {

    let shapeContainers = [];
    console.log("Generator ", options.layoutType);
    let cW, cH, newDims = null;

    switch(options.layoutType) {



        case Layouts.Lines: {

            /**
             * Layout: LINES
             */

            console.log("Lines SG");

            if (options.basicShapesIds === null || options.basicShapesIds.length === 0)
                return;
            
            // Generate strings

            let lineStrings = [];
            let lineRules;
            let lineShapes = options.basicShapesIds.slice();
            let shapesOnLine = 8;
            
            for (let i = 0; i < options.lineCount; i++) {
                let tmp = i % 2;
                let char = (Math.random() > 0.5) ? "A" : "B";
                if (tmp === 0) {
                    lineRules = [
                        { left: char, right: char + char}
                    ]                    
                } else {
                    lineRules = SGEngine.generateRules(2);
                }
                lineStrings.push(SGEngine.generateString(lineRules, shapesOnLine, char, 1, 1));
            }

            console.log(lineStrings);

            // Assign shapes

            let index = 0, lineMargin = 200, shapeIndex = Math.floor(Math.random() * 4);
            let scale = 1;

            for (let i = 0; i < lineStrings.length; i++) {
                console.log(lineStrings[i]);
                for (let j = 0; j < lineStrings[i].length; j++) {
                    shapeContainers[index] = new ShapeContainer();
                    shapeContainers[index].position = {
                        x: j * options.svgSide,
                        y: i * (options.svgSide + lineMargin)
                    };
                    let _index =  lineStrings[i].charCodeAt(j) - "A".charCodeAt(0);
                    shapeContainers[index].shapeId = options.basicShapesIds[(_index + shapeIndex) % options.basicShapesIds.length];
                    shapeContainers[index].index = (_index + shapeIndex) % options.basicShapesIds.length;
                    console.log(_index, shapeIndex, " -> ",(_index + shapeIndex) % options.basicShapesIds.length);
                    let transforms = `scale(${scale})`;
                    shapeContainers[index].transforms = 
                        transforms + ` translate(${shapeContainers[index].position.x}, ${shapeContainers[index].position.y}) `;
                    index++;
                }
                shapeIndex += 1;
            }

            // Calculate new dimension of canvas, for SVG positioning

            cW = options.svgSide * shapesOnLine * scale;
            cH = ((options.svgSide + lineMargin) * options.lineCount - lineMargin) * scale;
            Store.set("lines_cw", cW);
            Store.set("lines_ch", cH);
            Store.set("isChange", false);
            newDims = { "width": cW, "height": cH };

        }  break;

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

            console.log("Grid SG");
            
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
            let rules = SGEngine.generateRules(options.basicShapesIds.length);

            /**
             * Generation
             */
            let str = SGEngine.generateString(rules, gridSize);
            let arr = SGEngine.stringToIndexes(str);

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
            // process data
            let str = data.replace(/<\?xml.+\?>/g, '');
            str = str.replaceAll('<!DOCTYPE [^>]+>', '').replaceAll('<!-- .+-->', '');
            // save data
            staticSvgs.push(str);
        })

    Promise
        .all(urls.map(grabContent))
        .then(() => {
            // pass relevant data as callback in scenes/Editor
            callback({
                staticSvgs: staticSvgs, 
                shapeContainers: shapeContainers,
                newCanvasDimensions: newDims
            });
        });
}

const Generator = {
    generatePattern: generatePattern
}

export default Generator;