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

import 'whatwg-fetch'; // fetch polyfill for IE and similar

import Layouts from 'data/layouts';

// Extension of String class, with replaceAll functionality
// eslint-disable-next-line
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

class BasicShape {
    constructor(obj) {
        this.location = obj.location;
        this.tags = obj.tags;
        this.id = obj.id;
    }
}

class ShapeContainer {
    constructor(obj) {
        this.shapeId = obj.shapeId;
        this.transforms = obj.transforms;
        this.position = obj.position;
    }
}

// class ShapePattern {
//     constructor(obj) {
//         this.elems = obj;
//     }
// }

// class Rule {
//     constructor(left, right) {
//         this.left = left;
//         this.right = right;
//     }
// }

/**
 * Main function for generating SVG pattern
 * @param options input options, for example layout type
 * @param callback callback with SVG content inside, to be rendered
 */
async function generatePattern(options, callback) {

    let shapeContainers = [];

    /**
     * GRID
     */

    if (options.layoutType === Layouts.Grid) {

        let gridSize = options.horizontalCount * options.verticalCount;
        
        for (let i = 0; i < gridSize; i++) {
            shapeContainers.push(new ShapeContainer({
                shapeId: null,
                transforms: null,
                position: {x: 0, y: 0}
            }));
        }

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

        // console.log(str);

        /**
         * Render structure from string
         */
        let arr = [];
        
        Array.prototype.map.call(str, function(x) {
            arr.push(x.charCodeAt(0) - "A".charCodeAt(0));
        });

        console.log(options);
        let viewBoxParams = [40, 40, 680, 680];
        let side = options.svgSide;

        // @todo: move up all static variables from FOR cycle to speed up
        for (let i = 0; i < gridSize; i++) {

            // determine margin for tile
            const margin = options.marginValue * 10;
            // offset to [0,0]
            const patternMargin = 0;

            // determine size of tile
            const refW = options.canvasWidth;
            const n = options.horizontalCount;
            
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
            shapeContainers[i].transforms = transforms + `translate(${shapeContainers[i].position.x}, ${shapeContainers[i].position.y})`;
        }

    } else if (options.layoutType === Layouts.Lines) {

        console.log("Lines SG");

    } else if (options.layoutType === Layouts.Free) {

        console.log("Free SG");

    } else {
        console.log("Unsupported layout type");
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
            // console.log(`Urls ${urls} were grabbed`);
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