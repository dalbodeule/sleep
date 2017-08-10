"use strict";

const sleep = require('./main.js');

console.log("timeout test: 500ms");
sleep(500).then(() => {
    console.log("timeout success");
}).then(() => {
    console.log("timeout test: 1000ms");
    sleep(1000).then(() => {
        console.log("timeout success");
    });
});