const mylist = [];

let i = 0;

let myvriable=5

while (i < myvriable){
    const user=parseInt(prompt("type your number"))
    mylist.push(user);
    i++;
    if(i===5){
        break
    }
}
let my_new_array=[]
my_new=5
for(let y=4;y>=0;y--){
    console.log(mylist[y])
    my_new_array.push(mylist[y])
    if(y===0){
        document.querySelector('.result').innerHTML=`the reverse array is ${my_new_array}`
        // break
    }
}