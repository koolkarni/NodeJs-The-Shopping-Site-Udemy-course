const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Vitty@12345', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = sequelize;
