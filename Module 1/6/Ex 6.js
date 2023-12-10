//Confirm from users

const user=confirm("Should i calculate the square root ?");

if (user===true){
    const question=prompt("please enter the number");
    if (question<0){
        document.querySelector('.Result').innerHTML=` The square root of a negative number ${question} is not defined`
    }
    else{
        result=Math.sqrt(question)
        document.querySelector('.Result').innerHTML=`The result is ${result}`
    }
}
else{
    document.querySelector('.Result').innerHTML="Your need is cancel";
}