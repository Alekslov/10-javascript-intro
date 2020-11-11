/*
Saraso tipo kintamieji:
    sinonimai: sarasas, masyvas, array, matrica*
    Inicijuojama su lauztyniais skluasteliais[];
    viduje gali buti ivairiu tipo reiksmiu;
    bet rekomenduotina, kad butu tik vieno tipo reiksmes.
*/

//Pazymiai 2 tai nulis, nes sarasas prasideda nuo nulio
//petriukoPazymiai = 2, 10, 7, 5

const petriukoPazymiai = [2, 10, 7, 5];

console.log(petriukoPazymiai);

//kaip suskaiciuoti pazymiu vidurki?
let suma = 0;
suma = suma + petriukoPazymiai[0];
suma = suma + petriukoPazymiai[1];
suma = suma + petriukoPazymiai[2];
suma = suma + petriukoPazymiai[3];


const kiekis = petriukoPazymiai.length;
const vidurkis = suma / kiekis;

console.log(vidurkis);



// svarbu linksnis, miestas vienas, miestai keleta
const miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Anyksciai'];
console.log(miestai);

console.log(miestai[3]);
console.log(miestai[1]);
console.log(miestai[2]);
console.log(miestai[0]);
