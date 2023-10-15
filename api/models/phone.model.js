module.exports = (sequelize, Sequelize) => {
    const Phone = sequelize.define("phone", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        phone_name: { type: Sequelize.STRING },
        phone_no: { type: Sequelize.INTEGER },
        contact_id: { type: Sequelize.INTEGER }
    });

    return Phone;
};