console.log("Hello, Pokemon World!");
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
const container = document.querySelector("#container");
const span = document.querySelectorAll("span");
const h1 = document.querySelector("h1");

for (let i = 1; i < 899; i++) {
  const pokemon = document.createElement("div");
  pokemon.classList.add("pokemon");
  const label = document.createElement("span");
  label.innerHTML = `#${i}`;
  const img = document.createElement("img");
  img.src = `${baseURL}/${i}.png`;
  pokemon.append(img);
  pokemon.append(label);
  container.append(pokemon);
}

for (let i = 0; i < span.length; i++) {
  span[i].style.color = colors[i];
}

h1.addEventListener("click", colorize);

function makeRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function colorize() {
  this.style.backgroundColor = makeRandomColor();
  this.style.color = makeRandomColor();
}
