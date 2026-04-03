let btn = document.querySelector("button");

let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click" , async()=>
{
    let img = await getimg();
    let imgi = document.querySelector("img");
    imgi.setAttribute("src",img);

})

async function getimg()
{
    try{
        let res = await axios.get(url);
        return res.data.message;
    }
    catch(error)
    {
        console.log(error);
        return error;
    }
}