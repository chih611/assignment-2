const db = require("../models");
const Contacts = db.contacts;
const Phones = db.phones;
const Op = db.Sequelize.Op;

// Create contact
exports.create = ({ body, send }, res) => {
    Contacts.create({ contact_name: body.contact_name })
        .then(data => res.send(data))
        .catch(message => res.send(message));

};

// Get all contacts
exports.findAll = ({ send }, res) => {
    Contacts.findAll()
        .then(data => res.send(data))
        .catch(message => res.send(message));
};

// Get one contact by id
exports.findOne = ({ params }, res) => {
    Contacts.findOne({
        where: {
            id: params.contactId
        }
    })
        .then(data => res.send(data))
        .catch(message => res.send(message));
};

// Update one contact by id
exports.update = ({ body, params }, res) => {
    Contacts.update({ contact_name: body.contact_name }, { where: { id: params.contactId } })
        .then(data => res.send(data))
        .catch(message => res.send(message));
};

// Delete one contact by id
exports.delete = ({ params }, res) => {
    Contacts.destroy({
        where: {
            id: params.contactId
        }
    })
        .then(() => res.send())
        .catch(message => res.send(message));
};

// Delete all contacts
exports.delete = ({ params }, res) => {
    Contacts.destroy({
        where: {}
    })
        .then(() => res.send())
        .catch(message => res.send(message));
};
