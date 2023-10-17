const db = require("../models");
const Phones = db.phones;
const Op = db.Sequelize.Op;

// Create phone
exports.create = ({ params, body }, res) => {
    Phones.create({
        phone_name: body.name,
        phone_no: body.number,
        contact_id: params.contactId
    })
        .then(data => res.send(data))
        .catch(message => res.send(message));
};

// Get all phones
exports.findAll = ({ params }, res) => {
    Phones.findAll({
        where: {
            contact_id: params.contactId
        }, order: [['id', 'DESC']]
    })
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
        phone_no: body.number
    }, { where: { id: params.phoneId } })
        .then(data => res.send(data ? data : 'No data updated!'))
        .catch(message => res.send(message));
};

// Delete one phone by id
exports.delete = ({ params }, res) => {
    Phones.destroy({
        where: {
            id: params.phoneId,
            contact_id: params.contactId
        }
    })
        .then(() => res.send())
        .catch(message => res.send(message));
};

// Delete all phones
exports.deleteAll = ({ params }, res) => {
    Phones.destroy({
        where: {
            contact_id: params.contactId
        }
    })
        .then(() => res.send())
        .catch(message => res.send(message));
};
