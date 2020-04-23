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

// Funciones
function add(a: number, b: number): number {
    return a + b;
}

const sum = add(4, 7);

function createAdder (a: number): (number) => number {
    return function (b: number) {
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus7 = addFour(7);

function fullName(firstName: string, lastName:string): string {
    return `${firstName} ${lastName}`;
}

const adrian = fullName('Adrian', 'Arroyo');

console.log(adrian);

function fullName2(firstName: string, lastName?:string): string {
    return `${firstName} ${lastName}`;
}

const adrian2 = fullName2('Adrian');

console.log(adrian2);

function fullName3(firstName: string, lastName:string = ''): string {
    return `${firstName} ${lastName}`;
}

const adrian3 = fullName3('Adrian');

console.log(adrian3);
