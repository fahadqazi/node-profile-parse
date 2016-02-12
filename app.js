var profile = require('./profile.js');



users = process.argv.slice(2);
console.log(users);

users.forEach(profile.get);
// profile.get('chalkers');
// profile.get('fahadqazi');