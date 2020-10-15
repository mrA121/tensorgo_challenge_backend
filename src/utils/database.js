const Sequlize = require('sequelize');

const sequelize =new Sequlize('tensorgo', 'root', 'Password@123',{
    dialect:'mysql',
    host:'localhost'
})

module.exports= sequelize;