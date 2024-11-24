const fruits = [];

const ul = document.getElementById("fruit-list");
const input = document.getElementById("fruit-input");
const button = document.getElementById("add-fruit");

button.addEventListener("click", () => {
    const fruit = input.value;
    fruits.push(fruit);
    ul.innerHTML = "";
    fruits.forEach((fruit) => {
        const li = document.createElement("li");
        li.textContent = fruit;
        ul.appendChild(li);
    });
    input.value = "";
});
