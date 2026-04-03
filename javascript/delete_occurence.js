let arr = [1,2,3,4,5,2,6]; 

for(ele of arr)
{
    if(ele === 2)
    {
        arr.splice(arr.indexOf(ele),1);
    }
}

console.log(arr); // [1,3,4,5,6]