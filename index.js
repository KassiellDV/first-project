console.log("Hello, World!");
let x = 1;
console.log(x);
const objeto = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",}
    console.log(objeto.nombre);

    const array = [1, 2, "Pedro", 4, 5];
    for (let i=0; i<array.length; i++) {
    console.log(array[i]);
    }
array.push("HI ");
console.log(array);
array.pop();
console.log(array);
array.shift();
console.log(array);
array.unshift("Hola");
console.log(array);


if (x > 2) {
    console.log("x es mayor que 2");

}
else {
    console.log("x es menor o igual a 2");
}

x > 2 ? console.log("x es mayor que 2") : console.log("x es menor o igual a 2");
switch (x) {
    case 1:
        console.log("x es 1");
        break;
    case 2:
        console.log("x es 2");
        break;
    default:
        console.log("x no es ni 1 ni 2");
}

const counter=(number)=> {
    let count = 5;

        for (let i = 0; i < number; i++) {
            count++;
            console.log(count);
        }
    }
    counter(7);

    const heading = document.querySelector("h2");
    console.log(heading);
    heading.style.color = "black";
    heading.textContent = "Hola, Mundo!";
    console.log(window.innerWidth);
    heading.addEventListener("mouseover", () => {
    heading.style.color = "red";
    heading.textContent = "Has hecho click";});