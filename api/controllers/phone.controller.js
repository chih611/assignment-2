const db = require("../models");
const Phones = db.phones;
const Op = db.Sequelize.Op;

// Create phone
exports.create = ({ params, body }, res) => {
    Phones.create({
        phone_name: body.name,
        phone_no: body.no,
        contact_id: params.contactId
    })
        .then(data => res.send(data))
        .catch(message => res.send(message));
};

// Get all phones
exports.findAll = (req, res) => {
    Phones.findAll()
        .then(data => res.send(data))
        .catch(message => res.send(message));
};

// Get one phone by id
exports.findOne = ({ params }, res) => {
    Phones.findOne({
        where: { id: params.phoneId }
    })
        .then(data => res.send(data))
        .catch(message => res.send(message));
};

// Update one phone by id
exports.update = ({ body, params }, res) => {
    Phones.update({
        phone_name: body.name,
        phone_no: body.no
    }, { where: { id: params.phoneId } })
        .then(data => res.send(data ? data : 'No data updated!'))
        .catch(message => res.send(message));
};

// Delete one phone by id
exports.delete = ({ params }, res) => {
    Phones.destroy({
        where: {
            id: params.contactId
        }
    })
        .then(() => res.send())
        .catch(message => res.send(message));
};

// Delete all phones
exports.delete = (req, res) => {
    Phones.destroy({
        where: {}
    })
        .then(() => res.send())
        .catch(message => res.send(message));
};
