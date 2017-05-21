/**
 * Taken and modified, based on work of @author: github/smutnyleszek
 * https://gist.github.com/smutnyleszek/1ca053ca9e52a37d1ece
 */

/**
 * Returns a random integer between min (included) and max (excluded)
 * Using Math.round() will give you a non-uniform distribution!
 * @param {*} min 
 * @param {*} max 
 */
function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

/**
 * Generate random positions
 * @param {*} maxX 
 * @param {*} maxY 
 * @param {*} safeRadius 
 * @param {*} irregularity 
 */
function generatePositionsArray(maxX, maxY, safeRadius, irregularity) {
    // declarations
    var positionsArray = [];
    var r, c;
    var rows;
    var columns;
    // count the amount of rows and columns
    rows = Math.floor(maxY / safeRadius);
    columns = Math.floor(maxX / safeRadius);
    // loop through rows
    for (r = 1; r <= rows; r += 1) {
        // loop through columns
        for (c = 1; c <= columns; c += 1) {
            // populate array with point object
            positionsArray.push({
                x: Math.round(maxX * c / columns) + getRandomInt(irregularity * -1, irregularity),
                y: Math.round(maxY * r / rows) + getRandomInt(irregularity * -1, irregularity)
            });
        }
    }
    // return array
    return positionsArray;
}

/**
 * Get random position from positions array
 * @param {*} array 
 * @param {*} removeTaken 
 */
function getRandomPosition(array, removeTaken) {
    // declarations
    var randomIndex;
    var coordinates;
    // get random index
    randomIndex = getRandomInt(0, array.length - 1);
    // get random item from array
    coordinates = array[randomIndex];
    // check if remove taken
    if (removeTaken) {
        // remove element from array
        array.splice(randomIndex, 1);
    }
    // return position
    return coordinates;
}

function _getRandomPosition(positions) {
    return getRandomPosition(positions, true);
}

const Randomizer = {
    generateNonoverlappingArray: generatePositionsArray,
    getNextPosition: _getRandomPosition
}

export default Randomizer;