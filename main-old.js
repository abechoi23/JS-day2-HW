/* Set the width/height of box1 to 50px and change the background color to red
 */

const box1 = document.getElementById("box1");
console.log(box1);
box1.style.height = "50px";
box1.style.width = "50px";
box1.style.backgroundColor = "pink";

const box2 = document.getElementById("box2");
box2.style.height = "200px";
box2.style.width = "200px";
box2.style.backgroundColor = "blue";
box2.style.transition = "transform .3s linear";

/* // Move box2 left across the screen
let boxLeft = 0
let boxScale = 0
let incrementor = .1
setInterval(function() {
    boxLeft += 5

    if (boxScale >= 1 ) {
        incrementor = -.1
    } else if (boxScale <= .1) {
        incrementor = .1
    }
    boxScale += incrementor
    box2.style.transform = `translateX(${boxLeft}px) scale(${boxScale})`
}, 300) */

const mainHeader = document.getElementById("main-header");
mainHeader.innerText = "Hello World";

const subHeading = document.getElementById("sub-heading");

if (subHeading.innerText === "Dylan Smith") {
  mainHeader.innerText = "Welcome Dylan";
}

/* Create a 300 by 300px gray box, with the text "Welcome to the Jungle"
 */

const box3 = document.getElementById("box3");
box3.style.height = "300px";
box3.style.width = "300px";
box3.style.backgroundColor = "gray";
box3.style.display = "flex";
box3.style.justifyContent = "center";
box3.style.alignItems = "center";
box3.innerText = "Welcome to the Jungle";

const names = ["James", "Max", "Sarah", "Liam"];

const peopleContainer = document.getElementById("people");

// peopleContainer.innerHTML = '<p>Hello World</p>'

for (const name of names) {
  peopleContainer.innerHTML += `<p>${name}</p>`;
}

const people = [
  {
    name: "Derek",
    age: 32,
    favoriteColor: "Blue",
  },
  {
    name: "Sarah",
    age: 25,
    favoriteColor: "Orange",
  },
  {
    name: "Larry",
    age: 45,
    favoriteColor: "Gray",
  },
  {
    name: "Johnny",
    age: 45,
    favoriteColor: "Blue",
  },
];

for (const person of people) {
  peopleContainer.innerHTML += `
        <div class="card">
            <h2>${person.name}</h2>
            <p>Age: ${person.age}</p>
            <p>Favorite Color: ${person.favoriteColor}</p>
        </div>    
    `;
}
