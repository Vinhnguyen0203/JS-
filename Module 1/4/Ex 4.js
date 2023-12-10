// random number
function getRandomnumber(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
};

//random variable
const numRandom=getRandomnumber(1,4);

//get name of user
const users=prompt("What is your name ?");

// comparing
if (numRandom==1){
    document.querySelector('.Sorting').innerHTML=`${users},you are  Ravenclaw`;
} else if (numRandom==2){
    document.querySelector('.Sorting').innerHTML=`${users},you are  Hufflepuff`;
} else if (numRandom==3){
    document.querySelector('.Sorting').innerHTML=`${users},you are Slytherin `;
} else{
    document.querySelector('.Sorting').innerHTML=`${users},you are Gryffindor `;
};

