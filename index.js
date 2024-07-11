// Write your solution here!
let cats =["Milo", "Otis", "Garfield"]
function name(params) {
  cats.length = 0 
  cats.push('Milo', 'Otis', 'Garfield'); 
}
function destructivelyAppendCat(name){
    cats.push("Ralph");
}
function name(params) {
    cats.length = 0 
    cats.push('Milo', 'Otis', 'Garfield'); 
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
   
}
function name(params) {
    cats.length = 0 
    cats.push('Milo', 'Otis', 'Garfield'); 
}
function destructivelyRemoveLastCat() {
    cats.pop();
    
}
function name(params) {
    cats.length = 0 
    cats.push('Milo', 'Otis', 'Garfield'); 
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function name(params) {
    cats.length = 0 
    cats.push('Milo', 'Otis', 'Garfield'); 
}

function appendCat (whiskers) {
    return [...cats, whiskers];
    
}
function prependCat (kurt){
    return [ kurt, ...cats];
}
function removeLastCat(name){
     return cats.slice(0, cats.length -1);
     
}
function removeFirstCat(name){

    return cats.slice (1)
}