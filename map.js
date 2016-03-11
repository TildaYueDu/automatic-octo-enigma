

// The method map of the Array prototype allows you to grab a hold of each element inside an array and apply a function to them. 
// After map finishes iterating through the array, it will return a new array with the results of applying the function to the aforementioned elements.


Array map() Method

Syntax
array.map(callback, thisObject)
array.map(function(currentValue,index,arr), thisValue)
// Parameter Details
// callback − Function that produces an element of the new Array from an element of the current one.
// thisObject − Object to use as this when executing callback.
// The callback is the transforming function that changes elements of array into new elements while thisObject will be this inside the callback (some cool applications exist). 

// The map() method creates a new array with the results of calling a function for every array element.
// The map() method calls the provided function once for each element in an array, in order.

// Note: map() does not execute the function for array elements without values.
// Note: map() does not change the original array.

Parameters

// callback
// Function that produces an element of the new Array, taking three arguments:
// currentValue
// The current element being processed in the array.
// index
// The index of the current element being processed in the array.
// array
// The array map was called upon.
// thisObject
// Optional. Value to use as this when executing callback. Default value is the Window object


===EXAMPLE===

var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
// [2, 8, 18]


var names = ["Leia", "Anakin", "Luke", "Obi Wan Kenobi"];
var uppercaseNames = names.map(function(name) {
  return name.toUpperCase();
};
// Array(4) -> ["LEIA", "ANAKIN", "LUKE", "OBI WAN KENOBI"]


var persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
];
function getFullName(item,index) {
    var fullname = [item.firstname,item.lastname].join(" ");
    return fullname;
}
function myFunction() {
    document.getElementById("demo").innerHTML = persons.map(getFullName);
}
// New array: Malcom Reynolds,Kaylee Frye,Jayne Cobb




===Native JS map example===

var numbers = [1,2,3,4],
	getAllEvenIndices = function(number, indexInArray){
        if(indexInArray % 2 === 0) return number
    },
    evenIndexedNumbers = numbers.map(getAllEvenIndices);
 
console.log(evenIndexedNumbers);
//logs [1, undefined, 3, undefined]


===jQuery example===

var numbers = [1,2,3,4],
    getAllEvenIndices = function(number, indexInArray){
        if(indexInArray % 2 === 0) return number
    },
    evenIndexedNumbers = $.map(numbers, getAllEvenIndices);
 
console.log(evenIndexedNumbers); 
//logs [1,3]












//Let's talk about the callback parameters

What’s the callback?

// The callback function is triadic in both implementations; the three parameters being the array element, the element’s index and the entire array


// ===jQuery example===

// The jQuery’s map method will always return a flattened array which does not contain null/undefined values.
var numbers = [1,2,3,4],
    getAllEvenIndices = function(number, indexInArray){
        if(indexInArray % 2 === 0) return number
    },
    evenIndexedNumbers = $.map(numbers, getAllEvenIndices);
 
console.log(evenIndexedNumbers); //logs [1,3]












