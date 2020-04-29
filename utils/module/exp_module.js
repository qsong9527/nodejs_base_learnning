profile = function (name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.say = function() {
        console.log('My name is ' + this.name + ', ' + this.age + ', salary is ' + this.salary + '.');
    }
};

module.exports = profile;