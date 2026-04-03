let str = "holiday"

let fguess = prompt("1st guess - ")

while(str != "quit")
{
  
    if(fguess == str)
    {
        console.log("correct guess")
        break;
    }
    else
    {
        fguess = prompt("guess again - ");
    }
}