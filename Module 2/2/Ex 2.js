
 const myarray=[]

// prompt the user
const participants=parseInt(prompt('how many participants do we have'))

//add number of participant into the array
myarray.push(participants)

//create the name list
my_name_list=[]

//
my_viriable=0
while(my_viriable<myarray[0]){
    const name=prompt("what is your name ?")
    my_name_list.push(name)
    my_viriable++
    if(my_viriable===myarray[0]){
        document.querySelector('.new').innerHTML=`there are ${participants} and the name list include ${my_name_list}`
    }
}
