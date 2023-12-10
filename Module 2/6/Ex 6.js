function random_dice(){
    const min=1;
    const max=6;
    return Math.floor(Math.random()*(max-min+1))+min;
}

const ul_list=document.createElement("ul")


const count=1
while(true){
    const random_roll=random_dice()
    // console.log(random_roll)
    const li_list=document.createElement("li")
    li_list.textContent=`dice_roll: ${random_roll}`
    ul_list.appendChild(li_list)
    if(random_roll===6){
        break
    }
}
document.body.appendChild(ul_list)