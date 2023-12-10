
//create array
myarray=[]

// while loop
while(true){
    const user=parseInt(prompt("Type your number"));
    myarray.push(user)
    if(user===0){
        console.log(myarray.sort((a,b) => b-a));
        break;
    }
}



