let btn = document.querySelector("button");

btn.addEventListener('click', function() {
    let h1 = document.querySelector("h1");
    let color = randomrgb();
    h1.style.color = color;
    h1.innerText = color;

    let div = document.querySelector("div");
    div.style.backgroundColor = color;
});

function randomrgb()
{
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color =  `rgb(${r}, ${g}, ${b})`;
    return color;
}

