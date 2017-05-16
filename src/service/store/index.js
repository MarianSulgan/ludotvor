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
    localStorage.setItem("isChange", true);
    return localStorage.setItem(key, value);
}

function setArr(key, arr) {
    localStorage.setItem("isChange", true);
    return localStorage.setItem(key, JSON.stringify(arr));
}

function remove(key) {
    localStorage.removeItem(key);
}

function push(key, elem) {
    let arr = getArr(key);
    if (arr == null)
        arr = [];
    arr.push(elem);
    setArr(key, arr);
}

function pop(key) {
    let arr = getArr(key);
    let elem = arr.pop();
    setArr(key, arr);
    return elem;
}

export const Store = {
    set: set,
    get: get,
    setArr: setArr,
    getArr: getArr,
    remove: remove,
    pushTo: push,
    popFrom: pop,
}