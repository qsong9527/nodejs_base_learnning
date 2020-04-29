// import custom module by path
var xiaoming = require('./exp_func');
xiaoming.func_1();

var Profile = require('./exp_module');
var myprofile = new Profile("junyi", "30", 3000);
console.log(myprofile);

myprofile.say();

console.log("Finished.");
