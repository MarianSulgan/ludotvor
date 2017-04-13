import decor1 from '../data/decor1.svg';
import decor2 from '../data/decor2.svg';
import decor3 from '../data/decor3.svg';

function _insertData() {
    window.db.count({}, function(err, count) {
        // if empty, populate with data
        if (count === 0) {
            let arr = [
                {
                    svgUrl: decor1,
                    location: "Zvolenská Slatina",
                    tags: ["geometric", "simple", "black", "red", "white"],
                    id: "decor1"
                },
                {
                    svgUrl: decor2,
                    location: "Zvolenská Slatina",
                    tags: ["geometric", "simple", "black", "red", "white"],
                    id: "decor2"
                },
                {
                    svgUrl: decor3,
                    location: "Internety",
                    tags: ["geometric", "simple", "black", "white"],
                    id: "decor3"
                }
            ];
            window.db.insert(arr, function(err, newDocs) {
                console.log("Database populated.");
            });
        }
    });
}

function _init() {
    console.log("find");
}

function _insert() {
    console.log("find");
}

function _delete() {
    console.log("delete");
}

function _find() {
    console.log("find");
}

const database = {
    init: _init,
    insert: _insert,
    delete: _delete,
    find: _find,
    populate: _insertData
}

export default database;



