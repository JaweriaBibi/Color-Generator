let btn = document.querySelector("button");
let heading = document.querySelector("h1");
let paraChange = document.querySelector("p");

btn.addEventListener("click", function(){
    let randomColor = genetareRandomColor();
    heading.innerText = randomColor;
    paraChange.style.backgroundColor = randomColor;
    
});

function genetareRandomColor(){
   let r = Math.floor(Math.random()*256);
   let g = Math.floor(Math.random()*256);
   let b = Math.floor(Math.random()*256);
   return `rgb(${r},${g},${b})`;
}
