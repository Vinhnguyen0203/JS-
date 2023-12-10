//create array
myArray=[]
// first: ask user for the number of dice rolls

const user=prompt("How many dice rolls you want ?")

// random function
function random_dice(min,max){
    return Math.floor(Math.random()*(max-min+1))+min
}
const variable=random_dice(1,6)

// rolling dice
let myVariable=0;
while(myVariable<user){
    const variable=random_dice(1,6)
    myArray.push(variable)
    myVariable++;
    console.log(myArray)
}

//sum in roll dice
let sum=0;
for ( let i=0;i<myArray.length;i++){
    sum+=myArray[i];
}

//show the result
document.querySelector(`.haha`).innerHTML=`the sum of ${user} times is ${sum}`