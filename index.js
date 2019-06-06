var array = ["a", "b", "c", "d", "e", "f"]
array.push("g")
console.log(array)
array.unshift("aa")
console.log(array)

var array = ["a", "b", "c", "d", "e", "f"]
function weDontKnow (array) {
return [...array, "g"];
console.log(array)