/**
 * API for shape generation
 * 
 * @todo: create database for basic shapes, so it is searchable for ID when fetching svgs from particular location
 */

// import React from 'react';
// import datastore from 'nedb-promise';
import 'whatwg-fetch'; // fetch polyfill for IE and similar

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

const basicShapes = [
    new BasicShape({
        location: "Zvolenská Slatina",
        tags: ["geometric", "simple", "black", "red", "white"],
        id: "decor1"
    }),
    new BasicShape({
        location: "Zvolenská Slatina",
        tags: ["geometric", "simple", "black", "red", "white"],
        id: "decor2"
    })
];

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

    /*
    let DB = datastore({
        filename: 'db.json',
        autoload: true
    });
    
    // DEBUG ONLY!!!
    // erase line below, it deletes db so there is insert 
    await DB.remove({}, { multi: true });
    // populate database
    await DB.insert(basicShapes);
    */

    let shapeContainers = [];

    if (options.layoutType === "grid") {

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
                    { left: "B", right: "BB" }
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
                break;
            case 5:
                console.log("Rule set 5");
                break;                
            case 6:
                console.log("Rule set 6");
                break;
            default:
                console.log('Sorry for party rocking.');
        }

        let str = "0";
        let lastRule = null;
        do {

            // find all apliable rules
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

        console.log(str);

        /**
         * Render structure from string
         */
        let arr = [];
        
        Array.prototype.map.call(str, function(x) {
            arr.push(x.charCodeAt(0) - "A".charCodeAt(0));
        });
        console.log(arr);

        for (let i = 0; i < gridSize; i++) {

            // determine size of tile
            let side = 120;

            // determine margin for tile
            let margin = 40;

            // calculate position for each tile
            let k = i % options.horizontalCount;
            let l = Math.floor(i / 4);
            shapeContainers[i].position = {
                x: margin + k * (side + margin),
                y: margin + l * (side + margin)
            }

            let index = arr[i];
            shapeContainers[i].shapeId = options.basicShapesIds[index];
            shapeContainers[i].index = index;
        }

    } else if (options.layoutType === "lines") {

    } else if (options.layoutType === "free") {

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
    let actualSvgContentString = "";
    const grabContent = url => fetch(url)
        .then(res => res.text())
        .then(data => {
            // process data here
            staticSvgs.push(data);
        })

    Promise
        .all(urls.map(grabContent))
        .then(() => {
            console.log(`Urls ${urls} were grabbed`);
            // pass relevant data as callback in scenes/Editor
            callback({
                staticSvgs: staticSvgs, 
                shapeContainers: shapeContainers
            });
        });
}



const api = {
    generatePattern: generatePattern
}

export default api;