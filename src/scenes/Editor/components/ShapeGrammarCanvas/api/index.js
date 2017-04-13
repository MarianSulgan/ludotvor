// import React from 'react';
import Shapes from '../../../data/sample.js';

function generatePattern({horizontalCount, verticalCount}) {
    console.log(horizontalCount, verticalCount);

    // content

    // ...

    return Shapes[0];
}

function hello() {
    window.db.insert({ date: new Date() }, (err, newDoc) => {
        console.log("insert ok");
    });
    window.db.find({}, function (err, docs) {
        console.log(docs);
    });
}

const api = {
    generatePattern: generatePattern,
    hello: hello
}

export default api;