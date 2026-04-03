let ip = document.querySelector("input");

ip.addEventListener("keydown" , function(event){
    console.log(event.key);
    console.log(event.code);
    if(event.code == "KeyU"){
    console.log("move forward");
    }
    if(event.code == "KeyD"){
     console.log("move backward");
    }
    if(event.code == "KeyR"){
     console.log("move right");
    }
    if(event.code == "KeyL"){
     console.log("move left");
    }
    if(event.code == "KeyS"){
     console.log("stop");
    }

})