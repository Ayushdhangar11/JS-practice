let arr = ["one", "two", "three", "four", "five"];

for (let i = 0; i < arr.length; i++) {
  console.log(i+" -  " + arr[i]);
} 

for(ele of arr)
{
    console.log(ele);
}