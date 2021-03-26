// Create an array with 3 items. All items should be functions. Iterate through the array and 
// call all the functions.

let arrOfFunctions = [function add(a, b){
    return a + b; 
}, 
function multiply(a, b){
    return a * b; 
},
function subtract(a, b){
    return a - b; 
},
function divide(a, b){
    return a / b; 
}]; 

for(let i=0; i<arrOfFunctions.length; i++){
    console.log(arrOfFunctions[i](9, 8));
}

//Create a function as a const and try creating a function normally. Call both functions.

function normalFunction() {
    console.log('Here is a Normal Function');    
} 

const constFunction = function(){
    console.log('Here is a Const Function');
}

function callBothFunc(callback){
    return callback();
}
callBothFunc(normalFunction);
callBothFunc(constFunction);

//Create an object that has a key whose value is a function. Try calling this function.

//Create an object that has a key whose value is a function. Try calling this function.

const objectFunction = {
    varKey: function varFunction() {
        console.log('This is a Var Function');    
        }, 
    letKey: function letFunction() {
        console.log('This is a Let Function');        
        }, 
    constKey: function constFunction() {
        console.log('This is a Const Function');
        }
    };

const KeyCallBack = Object.keys(objectFunction)
console.log(KeyCallBack)
KeyCallBack.forEach(key=> {
    const finalCallBack = objectFunction[key];
    finalCallBack();
});