const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/inmates"
);

const inmates = [
    {
        name: "Joe Pesci",
        contacts: [{
            name: "Robert DeNiro",
            phone: "1-800-Gangster",
            message: "Help me Bob! I'm Locked Up"
        }],
        createdOn: new Date()
    },
];

db.Inmate
    .deleteMany({})
    .then(() => db.Inmate.collection.insertMany(inmates))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
