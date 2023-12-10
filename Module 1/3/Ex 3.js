//three integers
const firstNum=parseInt(prompt("Type 1st integer: "));
const secondNum=parseInt(prompt("Type 2nd integer: "));
const thirdNum=parseInt(prompt("Type 3st integer: "));


//Calculating
const Sum_result=firstNum+secondNum+thirdNum;
const Product_result=firstNum*secondNum*thirdNum;
const Average_result=parseFloat((firstNum+secondNum+thirdNum)/3);

//chỉ con trỏ
document.querySelector('.Sum').innerHTML=`the result of sum is ${Sum_result}`
document.querySelector('.Product').innerHTML=`the result of sum is ${Product_result}`
document.querySelector('.Average').innerHTML=`the result of sum is ${Average_result}`

