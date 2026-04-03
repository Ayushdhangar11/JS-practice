let btn = document.querySelector('button');

btn.addEventListener('click', async ()=>{
    let fact =await getApi();
    console.log(fact);
    p = document.querySelector('p');
    p.innerText = fact.fact;
})

let url = 'https://catfact.ninja/fact';

async function getApi() {
    try{
        let response = await axios.get(url);
        let data = response.data;
        return data;
    }
    catch(error){
        console.log(error);
        return error;
    }
   
}