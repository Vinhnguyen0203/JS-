// create array
const my_list=[];

//prompt the user
while(true){
    let user=parseFloat(prompt("type your number"))
    if( my_list.includes(user)){
        console.log(my_list)
        break
    }
    my_list.push(user)
}