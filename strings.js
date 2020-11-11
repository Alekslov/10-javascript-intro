const vardas = 'Vardenis';
const pasisveikinimas = "Labas rytas, Lietuva!";

// do not -> don't
const neiginys = "don't";
console.log(neiginys);

//jis pasake: "Labas"

const fraze = 'Jis pasake: "Labas".';
console.log(fraze);

//Mother said: "Don't do it!"

const mother1 = "Mother said: \"Don't do it!\".";  //ignoravimo zeklas \ dedamas pries simboli
console.log(mother1);
const mother2 = 'Mother said: "Don\'t do it!".';
console.log(mother2);


/* <div>
        <p>Lorem upsum</p>
        <a href="#">Click me</a>
   </div>
kai \gale reiskia ignoruok Enter

 */

const html = '<div>\
    <p>Lorem upsum</p>\
    <a href="#">Click me</a>\
</div>';
console.log(html);

/* <div>
        <p>Lorem upsum its amet</p>
        <a href="#">Don't click me</a>
   </div>
kai \gale reiskia ignoruok Enter

 */

 const html12 = `<div>
 <p>Lorem upsum its amet</p>
    <a href="#">Don't click me</a>
</div>`; 
console.log(html12);

console.clear();

//Joniukas ir Gretute ejo i miska.

const berniukas = 'Joniukas';
const mergaite = 'Gretute';
const judejimobudas = 'ejo';
const vieta = 'miska';

//const pasaka = berniukas + ' ir ' + mergaite + ' ' + judejimobudas + ' i ' + vieta + '.';

//tas pats tik paprasciau

const pasaka = `${berniukas} ir ${mergaite} ${judejimobudas} i ${vieta}.`;

console.log(pasaka);


