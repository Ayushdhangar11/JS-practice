let form =document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();//prevent the default behaviour of the form and dont lead to other page
    alert("Form Submitted");
});

//etracting the value from the form

form.addEventListener("submit",function(event){
    event.preventDefault();

    //easy way
    let user = this.elements[0];
    console.log(user.value);
    
    // let name = document.querySelector("input");
    // console.log(name.value);
    // console.dir(name);
});