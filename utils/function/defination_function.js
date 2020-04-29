// # 函数
// 定义一个函数： hello
function hello() {
    console.log("Hello javascript");
}
// 调用hello 函数
hello();

// 定义一个函数： hello
function hello_with_name(name) {
    console.log("Hello, " + name);
}
// 调用hello 函数
hello_with_name('Junyi');

// 定义中通快递方法，接收包裹，邮寄包裹
function zhongtong(package) {
    console.log("中通：收到包裹：%s", package);
}
// 定义顺丰快递方法，接收包裹，邮寄包裹
function shunfeng(package) {
    console.log("顺丰：收到报告：%s", package);
}
// 定义菜鸟驿站方法，接收客户的包裹以及所择的快递公司
function yizhan(package, kuaidi) {
    console.log("驿站收到包裹：%s， 转发给快递公司", package);
    kuaidi(package);
}

// 客户去邮寄一个水杯，选择了顺丰快递
yizhan("水杯", shunfeng);





// # 匿名函数
// 某东入口规则，根据用户提供的地址和包裹描述，提供取件服务，
function jd_yizhan(address, package, qujian) {
    console.log("用户下单了，通知快递员上门取件");
    qujian(address, package);
}

// 内部安排03号驿站内部安排2020号去取件
jd_yizhan("1-502", "球鞋", function (address, package) {
    console.log("我是03驿站快递员：2020号");
    console.log("取货地址: %s, 货物描述: %s", address, package);
});

let sum = (x, y) => {
    return x+y;
}
console.log(sum(10, 20));

jd_yizhan("1-502", "球鞋", (address, package) => {
    console.log("我是03驿站快递员：2020号");
    console.log("取货地址: %s, 货物描述: %s", address, package);
});
