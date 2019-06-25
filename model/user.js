const sequelize = require('../startup/connection');
const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');

const User = sequelize.define('users',{
    first_name:     Sequelize.STRING,
    last_name:      Sequelize.STRING,
    middle_name:    Sequelize.STRING,
    email:          Sequelize.STRING,
    password:       Sequelize.STRING,
    remember_token: Sequelize.STRING,
    created_at:     Sequelize.DATE,
    updated_at:     Sequelize.DATE,
    status:         Sequelize.INTEGER,
    user_type:      Sequelize.INTEGER,
    warehouse:      Sequelize.INTEGER,
    active:         Sequelize.INTEGER,
    is_deleted:     Sequelize.INTEGER,
}, {
    timestamps: false,
    // defaultScope: {
    //     attributes: { exclude: ['password'] },
    //   }
    scopes:{
        is_deleted:{
            where:{
                is_deleted: 0
            }
        },
    }
});

function generateToken(user){
    return jwt.sign(user,process.env.SECRET_TOKEN,{
        expiresIn: 1440
    });
}

exports.User = User;
exports.generateToken = generateToken;