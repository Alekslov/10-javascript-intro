// /sveikieji skaiciai/ 
console.log(8784655);
// du skaiciai vs desimtainis
console.log(3, 14);
console.log(3.14);


// tekstas
console.log("labas rytas");
console.log('labas rytas');



/********
// kintamieji
*********/

/*
Iniciavimo budai:
    const - default. tai musu pirmas pasirinkimas;
    let - galima, tik jei yra poreikis keisti reiksme;
    var - nenaudotinas.
*/

/*
Kintamuju tipai (pagal reiksme):
    skaiciai (number) - 2020, 3.14, -7, -5.777;
    tekstai - (string) - "labas", 'ka tu?', ";)", ':(';
    logines (boolean) - true, false;
    sarasai (array) - [] (pvz miestu sarasai)
    objektai (object) - {}.

*/

const pirmasSkaicius = 2;
const anstrasSkaicius = 3;

console.log("Pirmasis skaicius turetu buti 2.");
console.log(pirmasSkaicius);
 
const suma = pirmasSkaicius + anstrasSkaicius;

console.log(suma);
//arba/ 
console.log(pirmasSkaicius, '+', anstrasSkaicius, '=', suma);


const vardas = 'Vardenis';
const amzius = 99;
console.log(vardas);
console.log(amzius);

// Vardenis yra 99 metu amziaus./

const sakinys = vardas + ' yra ' + amzius + ' metu amziaus. ';
console.log(sakinys);



const suo = 'Rikis';
const maistas = 'kaulas';
//  rikis megstamas maistas yra kaulas/
console.log(vardas);
console.log(maistas);
const sakin = suo + ' megstamas maistas yra ' + maistas + '.';
console.log(sakin);


const heroName = 'Chuck';
const heroLastname = 'Norris';
const birth = 1940;

// Chuck Norris (80)
const date = 2020;
const suma2 = date - birth;
// console.log(suma2);
console.log(heroName);
console.log(heroLastname);
console.log(birth);
const sakinys2 = heroName + ' ' + heroLastname + ' (' + suma2 + ')';
console.log(sakinys2);
console.clear();

// const pinigine = 0;
// const sausis = 100;
// const vasaris = 200;
// const kovas = 70;

// 100
// 300
// 370

// const sausioPajamos = pinigine + sausis;
// console.log(sausioPajamos);

// const vasarioPajamos = sausioPajamos + vasaris;
// console.log(vasarioPajamos) 

 let pinigine = 7; //meniaju cifru, meniaetsia summa 
const sausis = 100;
const vasaris = 200;
const kovas = 70;

pinigine = pinigine + sausis;
console.log(pinigine);

pinigine = pinigine + vasaris;
console.log(pinigine);




