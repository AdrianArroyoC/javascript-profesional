/*console.log('Hello, TypeScript');

function add(a: number, b: number) {
    return a + b;
}

const sum = add(2, 3);*/

// Boolean
let muted1 = true;
let muted2: boolean = true;
//muted2 = "callado";

// Números
let age = "6";
let numerador: number = 42;
//let denominador: number = age;
let denominador: number = 42;
let resultado = numerador / denominador;

// String
let nombre: string = 'Adrián';
let saludo = `Me llamo ${nombre}`

// Arreglos
let people: string[] = [];
people = ['Isabel', 'Raul'];
//people.push(900);

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Adrian');
peopleAndNumbers.push(900);

// Enum
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

let colorFavorito: Color = Color.Azul;

console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = 'Joker';
comodin = { type: 'Wildcard' }

// Object
let someObject: Object = { type: 'Wildcard' }
