let btns = document.querySelectorAll("button"); 

for(btn of btns) {
    console.dir(btn);

    btn.addEventListener('click', sayHello);
    btn.addEventListener('click', sayName);

    /*only run sayname function

     -------------------------------
     btn.onclick = sayHello;
     btn.onclick = sayName;
     -------------------------------

     btn.onmouseenter = function() {
        console.log('Mouse entered');
     } */
}

 function sayHello() {
    alert('hello');
    // console.log('Button clicked');
}
 function sayName() {
    alert('Ayush');
}