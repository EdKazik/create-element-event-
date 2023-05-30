let newBlock = document.createElement('div');
newBlock.className = "new-block";
newBlock.style.background = 'red';
newBlock.style.height = '30px';
newBlock.style.width = '200px';
const input = document.querySelector(".input");
const cont = document.querySelector(".container");

input.addEventListener("mouseover", () => {
    document.querySelector(".container").appendChild(newBlock);
    
});
input.addEventListener("mouseout", () => {
    newBlock.remove();
});


