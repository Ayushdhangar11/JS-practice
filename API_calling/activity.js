let btn = document.querySelector('button');

let  url= "https://universities.hipolabs.com/search?name";
let country = "";

btn.addEventListener('click', async ()=>{
    let country = document.querySelector('input').value;
    let colarr = await getclgname(country);
    Show(colarr);
});

function Show(colarr)
{
    let ul = document.querySelector('ul');
    ul.innerHTML = "";
    for(col of colarr)
    {
        let li = document.createElement('li');
        li.innerText = clg.name;
        ul.appendChild(li);
    }
}

async function getclgname(country)
{
    try{
        let res = await axios.get(url+country);
            return res.data;
    }catch(e)
    {
        console.log(e);
        return e;
    }
}