const db = require("../models");

// Defining methods for the InmateController
module.exports = {
    findAll: function (req, res) {
        db.Inmate
            .find(req.query)
            .sort({ createdOn: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Inmate
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Inmate
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Inmate
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Inmate
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    pinched: async function (req, res) {
        const inmate = await db.Inmate.findById({ _id: req.params.id });
        const contactsWithPhoneNumber = inmate.contacts.filter(contact => contact.phoneNumber);
        const messages = contactsWithPhoneNumber.map(contact => ({
            to: contact.phoneNumber,
            message: contact.message || `Hey ${contact.name}, ${inmate.name} got Pinched! Bail them out!`
        }));

        // POST TO SMS 
        messages.forEach(text => {
            // SEND TO SMS SERVICE
            console.log(`sending message ${text.message} to ${text.to}`);
        });

        res.status(200);
    }
};
