//get year from user

const year=parseInt(prompt("Please enter the year"));

// comparing

if (year%4===0) {
    // console.log("this is a leap year");
    if (year % 400 === 0) {
        document.querySelector('.Year').innerHTML='This is leap year'
    }  else if (year % 100!== 0) {
        document.querySelector('.Year').innerHTML='This is leap year'
    }
    else{
        document.querySelector('.Year').innerHTML='This is not leap year'
    }
}
else{
        document.querySelector('.Year').innerHTML='This is not leap year'
}
// else{
    // console.log('this is a leap year');
// }