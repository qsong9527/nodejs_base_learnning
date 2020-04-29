function say() {
    console.log("This is the function say, call by another function.");
}

function execute(value, some_function, ) {
    some_function(value);
}

execute("Hello Nodejs function", say);

execute("Hello Again", function (msg) {
   console.log(msg);
});