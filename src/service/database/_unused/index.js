/**
 * deprecated, not used
 */
import datastore from 'nedb-promise';

function _insertData(db) {

    db.count({}, function(err, count) {
        // if empty, populate with data
        if (count === 0) {
            let arr = [
                new BasicShape({
                    svgUrl: decor1,
                    location: "Zvolenská Slatina",
                    tags: ["geometric", "simple", "black", "red", "white"],
                    id: "decor1"
                }),
                new BasicShape({
                    svgUrl: decor2,
                    location: "Zvolenská Slatina",
                    tags: ["geometric", "simple", "black", "red", "white"],
                    id: "decor2"
                }),
                new BasicShape({
                    svgUrl: decor3,
                    location: "Internety",
                    tags: ["geometric", "simple", "black", "white"],
                    id: "decor3"
                })
            ];
            db.insert(arr, function(err, newDocs) {
                console.log("Database populated.");
            });
        }
    });
}

async function _init() {
    window.db = datastore({
        filename: 'ludotvor-db.json',
        autoload: true
    })

    // DEBUG ONLY!!!
    // erase line below, it deletes db so there is insert 
    await window.db.remove({}, { multi: true });

    // populate database
    await window.db.insert(basicShapes);

    // DEBUG ONLY
    let docs = await window.db.find({});
    console.log("DB:", docs);
}

async function _getShapeById(sid) {
    let doc = await window.db.findOne({ id: sid });
    console.log("DOC: " + doc);
    return doc;
}

function getShapeById(sid) {
    let doc = _getShapeById(sid);
}

function _insert() {
    console.log("_insert");
}

function _delete() {
    console.log("_delete");
}

function _find() {
    console.log("_find");
}

const database = {
    init: _init,
    insert: _insert,
    delete: _delete,
    find: _find,
    populate: _insertData,
    // basicShapes: basicShapes,
    getShapeById: getShapeById
}

export default database;



