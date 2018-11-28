const connection = require('../startup/connection');

const User = connection.extend({
    tableName: "users",
});

function getUser(user){
    return new Promise((resolve,reject)=>{
       new User().find('first', {where: "email='"+user.email+"'"}, function(err, row) {
            resolve(row);
        });
    })
}

exports.user = new User();
exports.getUser = getUser;