//function range
function range(start,end,step){
    let myArray=[]
    for (let i= start;i<=end;i+=step){
        myArray.push(i)
    }
    return myArray
}

const starting_year=parseInt(prompt("Tell me about your starting year"))
const ending_year=parseInt(prompt("How's about the ending year"))

const suming_year=range(starting_year,ending_year,1)

mynewleapyearList=[]
for(let i=0;i<suming_year.length;i++){
    if (suming_year[i]%4 === 0 && suming_year[i]%100!==0 || suming_year[i]%400===0){
        mynewleapyearList.push(suming_year[i])
        document.querySelector('.hoho').innerHTML=`${mynewleapyearList}`
        // console.log(suming_year[i])
    }
}



