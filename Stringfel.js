let txt = "JavaScript programming language";

console.log("1. Az első 5 karakter: " + txt.slice(0, 5));

console.log("2. A 3. tól a 8-ik karakterig: " + txt.slice(2, 8));

console.log("3. Az 5. karaktertől a végéig: " + txt.slice(4));

console.log("4. Az 5. karaktertől 6 karakter: " + txt.slice(4, 10));

console.log("5. A szöveg nagybetűkkel: " + txt.toUpperCase());

let everySecondUpper = txt.split('').map((char, index) => index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()).join('');
console.log("6. Minden második karakter nagybetű: " + everySecondUpper);

let replaceE = txt.replace(/e/g, 'E');
console.log("7. Minden 'e' helyett 'E': " + replaceE);

let splitByE = txt.split('e');
console.log("8. Tömb az 'e' karakterek szerint elválasztva: ", splitByE);