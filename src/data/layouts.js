/**
 * Layouts
 * 
 * use _STRING_, because of conversion in localStorage
 * @todo: remove after rebuilding with redux
 */

const Layouts = {
    Grid: "0",
    Lines: "1",
    Free: "2",
    toString: toString
}

function toString(str) {
    if (str === Layouts.Grid)
        return "grid";
    else if (str === Layouts.Lines)
        return "lines";
    else if (str === Layouts.Free)
        return "free";
    
    return "undefined";
}

export default Layouts;