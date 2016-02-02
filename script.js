var flower = 'rose';
console.log(flower);

var festival = '情人节';
if ((festival === '情人节') || (festival === '七夕节')) {
    alert('红玫瑰');
} else {
    alert('百合');
}
/*
switch (festival) {
    case '':
        alert();
        break;
    case '':
        alert();
        break;
    default:
        alert();
        break;
}
*/
//while循环:重复去做要做的事情
var i = 0;
while (i < 10) {
    i++;
    //只输出奇数
    if (i % 2 === 0){
        continue;
    }
    console.log(i);
}
//for循环
var week = ['星期一','星期二','星期三','星期四','星期五','星期六','星期天'];
for (var i=0; i < week.length; i++){
    console.log(week[i]);
}
//函数function functionName
function alertMessage (message) {
    alert(message);
}
alertMessage('加油！');
//匿名函数
var alertMessage = function (message) {
    alert(message);
}
alertMessage('加油！');

//对象
var flowerstore = {
    formedIn: '2000', 
    foundedIn: '上海',
    florist: ['Anny', 'Wendy', 'Grace']
};
console.log(flowerstore);