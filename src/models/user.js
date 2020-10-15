const Sequelize =require('sequelize')

const sequelize= require('../utils/databse');

const User= sequelize.define('User_Master',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey:true
    },
    name: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    gender:{
        type:Sequelize.ENUM('Male','Female')
    },
    status:{
        type:Sequelize.ENUM('Active','Inactive')
    },
    page_number:Sequelize.INTEGER
})

module.exports = User;