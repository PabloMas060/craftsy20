const { v4: uuidv4 } = require('uuid');
const {hashSync} = require('bcryptjs');



const User = function ({rol, name, surname, email, password}) {
    
    this.id = uuidv4();
    this.rol = "user";
    this.name = name.trim();
    this.surname = surname.trim();
    this.email = email.trim();
    this.password = hashSync(password.trim(), 10);
}

module.exports = User;