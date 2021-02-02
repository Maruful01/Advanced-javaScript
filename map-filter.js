const numbers = [12, 8, 15, 16];
const output = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers [i];
    const result = element * element;
    output.push (result);
}
console.log (output); 
///
/// In this function you can only put 3 parameter. The ex. are below
function squre (element) {
    return element * element;
}
const result = numbers.map(function(element, index, array) {
   console.log (index, array);
   return element * element;

});
console.log (result);

//map 
const result2 = numbers.map (element => element * element);
console.log ("result2: " + result2);
// differance between find and filter
// filter
const filter = numbers.filter (element => element > 10);
console.log ("filter: " + filter);
// find is same like filter but the defferance is find give you the first element.
//  find is a new version of ES6
const find = numbers.find (x => x > 10);
console.log ("find: " + find);

