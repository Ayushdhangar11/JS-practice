function savetoDb(data){
    return new Promise((success , fail) =>{
        let speed = Math.floor(Math.random()*10);
        if(speed <  5){
            success('Data saved to DB');
        }
        else{
            fail('Error in saving data');
        }
    })  
}

let req = savetoDb('Data');

req.then(() => {
    console.log("new msg after success");
}).catch(() => {
    console.log("Error msg after failure");
})