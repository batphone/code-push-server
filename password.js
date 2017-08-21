var bcrypt = require('bcryptjs');

console.log({password: bcrypt.hashSync('faux1337', bcrypt.genSaltSync(12))})