
 const myarray=[]

// prompt the user
const dogs=parseInt(prompt('how many dogs do we have'))

//add number of participant into the array
myarray.push(dogs)

//create the name list
my_dog_name_list=[]

//
my_viriable=0
while(my_viriable<myarray[0]){
    const name=prompt("what is your 6 dogs name ?")
    my_dog_name_list.push(name)
    my_viriable++
    if(my_viriable===myarray[0]){
        break;}
}

my_dog_name_list.sort((a,b) => b.localeCompare(a));

const ul_list=document.createElement("ul")
// console.log(my_dog_name_list.sort((a,b) => b.localeCompare(a)));
// document.querySelector('.new_result').innerHTML=`the dog list name is ${my_dog_name_list.sort((a,b) => b.localeCompare(a))}`
 my_dog_name_list.forEach(name => {
     const li_list=document.createElement("li")
     li_list.textContent=name
     ul_list.appendChild(li_list)
 })

 document.body.appendChild(ul_list)

