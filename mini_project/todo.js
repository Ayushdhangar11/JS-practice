let input = document.querySelector("input");
let ul = document.querySelector("ul");
let button = document.querySelector("#btn");
let button2 = document.querySelector("#btn2");

button.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = input.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";

    item.appendChild(delbtn);
    delbtn.classList.add("delete");
    ul.appendChild(item);
    input.value = "";
});

let delb = document.querySelectorAll(".delete");
for(del of delb){
    del.addEventListener("click",function(){
        this.parentElement.remove();
    });
}