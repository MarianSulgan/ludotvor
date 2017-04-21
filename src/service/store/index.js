/**
 * Wrapper for temporary data manipulation
 * Used to save options, user selections, user
 * workspace and so on.
 * 
 * @todo: Replace localStorage by redux implementation
 */

function get(key) {
    return localStorage.getItem(key);
}

function getArr(key) {
    return JSON.parse(localStorage.getItem(key));
}

function set(key, value) {
    return localStorage.setItem(key, value);
}

function setArr(key, arr) {
    return localStorage.setItem(key, JSON.stringify(arr));
}

export const Store = {
    set: set,
    get: get,
    setArr: setArr,
    getArr: getArr
}