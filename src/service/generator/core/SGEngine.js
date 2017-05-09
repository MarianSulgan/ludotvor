/**
 * Generation engine basic functions
 */

/**
 * Generates string derived from rules
 * @param {array} rules Array of rules, e.g. [ { left: "A", right: "AB" }, ...]
 * @param {int} stopSize Size of generated string
 * @param {string} startSymbol Start symbol for generation, should be one of left side rules
 * @param {int} rulePickMode Mode for rule picking (1 - last unused, 2 - random)
 * @param {int} ruleApplicationMode Mode for rule application (1 - last occurence, 2 - first occurence, 3 - all occurences of rule)
 */
function generateString(rules, stopSize, startSymbol, rulePickMode, ruleApplicationMode) {

    let str = startSymbol ? startSymbol : "0";
    let lastRule = null;

    do {

        // Find all appliable rules

        let nowRules = [];

        for (let i = 0; i < rules.length; i++) {
            if (str.includes(rules[i].left))
                nowRules.push(rules[i]);
        }

        // Pick rule

        let index = 0;

        if (rulePickMode === 1) {

            // choose last unused rule
            for (let i = 0; i < nowRules.length; i++) {
                if (nowRules[i] !== lastRule) {
                    index = i;
                }
            }

        } else if (rulePickMode === 2) {

            // choose random rule
            index = Math.floor(Math.random() * nowRules.length);

        } else { // if parameter not set, so it is null or undefined

            // choose random rule
            index = Math.floor(Math.random() * nowRules.length);

        }
        
        // Apply rule 

        if (ruleApplicationMode === 1) {

            // Last occurence
            let n = str.lastIndexOf(nowRules[index].left);
            str = str.slice(0, n) + str.slice(n).replace(nowRules[index].left, nowRules[index].right);

        } else if (ruleApplicationMode === 2) {

            // First occurence
            str = str.replace(nowRules[index].left, nowRules[index].right);

        } else {

            // All occurences
            str = str.replaceAll(nowRules[index].left, nowRules[index].right);

        }

        lastRule = nowRules[index];

    } while(str.length < stopSize)
    
    return str.slice(0, stopSize);
}

/**
 * String to array - convert symbols to numbers,
 * these number will be later used as indexes to array
 * of ornaments    
 */
function stringToIndexes(str) {
    let arr = [];
    Array.prototype.map.call(str, function(x) {
        arr.push(x.charCodeAt(0) - "A".charCodeAt(0));
    });
    return arr;
}

function generateRules(symbolCount) {
    let rules = [];
    switch (symbolCount) {
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
                { left: "AA", right: "ABAB"},
                { left: "BB", right: "BABA"}
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
            rules = [
                { left: "0", right: "A" },
                { left: "0", right: "B" },
                { left: "0", right: "C" },
                { left: "0", right: "D" },
                { left: "0", right: "E" },
                { left: "A", right: "ABCDE" },
                { left: "B", right: "BCADE" },
                { left: "C", right: "CDEBA" },
                { left: "D", right: "DEB" },
                { left: "E", right: "EACB" },
                { left: "E", right: "DE" },
            ]
            break;                
        default:
            console.log('Sorry for party rocking.');
            return null;
    }
    return rules;
}

const SGEngine = {
    generateString: generateString,
    stringToIndexes: stringToIndexes,
    generateRules: generateRules
}

export default SGEngine;