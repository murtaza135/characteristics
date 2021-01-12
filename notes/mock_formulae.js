let y;
let a;
let b;
let c;
let d;
let e;
let f;

let firstname = "murtaza";
let lastname = "akhtar";
let age = 24;
let height = 160;
let isMarried = false;
let gender = "male";
let hasBeard = true;
let hasLongHair = true;


// beauty
a = Math.abs(Math.sin(firstname.length - 3.5));
b = Math.abs(Math.sin(lastname.length - 3.5));
c = Math.sin((Math.PI / 50) * age);
d = Math.sin(((Math.PI / 40) * height)); // male
e = Math.sin(((Math.PI / 40) * height) + 1); // female
f = (isMarried ? 0 : 1) / 2;
let beauty = (a + b + c + d + f) / 4.5;
beauty = (hasBeard ? beauty : beauty * 0.7); // male
// beauty = (hasLongHair ? beauty : beauty * 0.7); // female


// intelligence and wisdom
a = Math.abs(Math.sin(firstname.length - 5.5));
b = Math.abs(Math.sin(lastname.length - 4.5));
c = clamp(age / 50, 0, 1);
d = Math.sin(((Math.PI / 40) * height) + 1.8); // male
e = Math.sin(((Math.PI / 40) * height) + 1.8); // female
f = (isMarried ? 1 : 0) / 2;
let intelligence = (a + b + c + d + f) / 4.5;
intelligence = (hasBeard ? intelligence : intelligence * 0.95); // male
// intelligence = (hasLongHair ? intelligence : intelligence * 0.95); // female


// drive and passion
a = Math.abs(Math.sin(firstname.length - 4.65));
b = Math.abs(Math.sin(lastname.length - 3.55));
c = clamp(age / 35, 0, 1);
d = Math.sin(((Math.PI / 60) * height) - 1.5); // male
e = Math.sin(((Math.PI / 60) * height) - 1.5); // female
f = (isMarried ? 1 : 0.7) / 2;
let drive = (a + b + c + d + f) / 4.5;


// character
a = Math.abs(Math.sin(firstname.length - 3));
b = Math.abs(Math.sin(lastname.length - 3.5));
c = clamp(age / 40, 0, 1);
d = Math.sin(((Math.PI / 100) * height) - 3.4); // male
e = Math.sin(((Math.PI / 100) * height) -3.3); // female
f = (isMarried ? 1 : 0.5) / 2;
let character = (a + b + c + d + f) / 4.5;
character = (hasBeard ? character : character * 0.85); // male
// character = (hasLongHair ? character : character * 0.85); // female


// success chance
f = (isMarried ? 1 : 0.5) / 1.1;
success = clamp((beauty + (1.2 * intelligence) + (1.1 * drive) + (1.1 * character) + f) / (4 + (1 / 1.1)), 0, 1);



console.log("beauty: " + beauty);
console.log("intelligence: " + intelligence);
console.log("drive: " + drive);
console.log("character: " + character);
console.log("success: " + success);


function clamp(number, min, max) {
    return Math.max(min, Math.min(number, max));
}