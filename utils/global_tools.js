// __filename: current file name
console.log(__filename);
// __dirname: current dir name
console.log(__dirname);


// 定制器，只执行一次
setTimeout(() => {
    console.log("Hello NodeJs");
}, 2000)
console.log("Run here 01.");


// 定时器，重复执行
let counter = 0
let interval = setInterval(() => {
    if (counter <= 3) {
        console.log("Interval output %d", counter);
        counter++;
    } else {
        clearInterval(interval);
        console.log("Interval clear.");
    }
}, 1000);
console.log("Run here 02.");

