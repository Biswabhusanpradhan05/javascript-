
/*const s1 = "Raj"
const s2 = "Amit"
const s3 = "Chandan"
const isa = true
const s4 = 10
const s6 = null
const s9 = NaN
let a 
// new Array

// array declaration
const students = ["Raj", "Amit", "Chandan",true,10,null,NaN,a]
console.log(students)
console.log(students.length)


//const fruits = new Array(3)
//console.log(fruits)

console.log(students[0])
console.log(students[1])
console.log(students[2])
console.log(students[3])
 for(let i =0; i < students.length; i++){
    console.log(students[i])
 }

 students[8] = "Avishek"
 console.log(students)

 students[20] = "Ansuman"
 console.log(students)

 students[students.length] = "Ayush"
 console.log(students)

 students.push("Sai")
 console.log(students)

 const removedStudent = students.pop()
 console.log(removedStudent)

 console.log(students)*/


 const fruits = ['Apple', 'Banana', 'Mango']
console.log(fruits)

// fruits.unshift('Orange')//add in first
// fruits.push('Orange') //will add in last 
// fruits.pop()
// fruits.pop()
// fruits.pop()
// fruits.pop()
// console.log(fruits)

//fruits.unshift('Orange')
//console.log(fruits)
//fruits.shift()
//fruits.shift()
//fruits.shift()
//fruits.shift()
//console.log(fruits)
 const  isMangoIncluded =fruits.includes('Mango')
 console.log(isMangoIncluded)
 const  isDatesIncluded =fruits.includes('Mango')
 console.log(isDatesIncluded)

 const moreFruits = ['Pineapple', 'Grapes']
const addedFruits = fruits.concat(moreFruits)
console.log(fruits)
console.log(moreFruits)
console.log(addedFruits) 
//how to reverse the array

//fruits.reverse()
//console.log(fruits)
//slice() -> returns a new array
//const morefruits = ['Apple','Banana','Mango','Pineapple','Grapes',1,3,4,5,6]
//let slicedFruits = morefruits.slice()
//slicedFruits = morefruits.slice(2)
//let slicedFruits = morefruits.slice(2, 4)//ending index is not includede

//console.log('morefruits',morefruits)
//console.log("slicedFruits",slicedFruits)
//splice()-->> it deleted the elements in the original array and returns the deleted in an new array

//const splicedFruits = morefruits.splice()
//const splicedFruits = morefruits.splice(2)
//const splicedFruits = morefruits.splice(2,2,"Dates","Litchy","Guava")
//console.log('morefruits', morefruits)
//console.log('splicedFRuits',splicedFruits)
//==============================
//sort()
//moreFruits.sort()
//console.log("sort",moreFruits.sort())

//=========================================
//some imp method
//forEach()
//Map()
//filter()
//reduce()
//every()
//some() 
const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']
// const printMonth = function(value, idx) {
//     console.log('month:', value, idx)//Cannot access 'printMonth' before initialization if we access it before 
// }
// const printMonth = (value, idx) => {
//     console.log('month:', value, idx)
// }
months.forEach((value,idx)=> {
    console.log('month:', value, idx)
})
// months.forEach(printMonth) //executes 5 times 
// function printMonth(value, idx, arr) {
//     console.log('month:', value, idx, arr)
// }
// function printMonth(value, idx) {
//    console.log('month:', value, idx)
// }
// const printMonth = function(value, idx){
//     console.log('month:', value, idx)//Cannot access 'printMonth' before initialization
// }


//map->  

 
//const months1 = months.map((value, idx) => {
  // console.log("months:", value, idx)
   //return true + " " + idx
 //})


 //const months2 = months.forEach((value, idx) => {
   //console.log("months:", value, idx)
 //})
 //console.log(months1)//we can except an array - cause map() retrns an array
 //console.log(months2)//it will be undefined - cause forEach() returns nothing

// const filteredMonths =  months.filter(months => {
//    console.log("month:  " + months )
//    return months.toLowerCase().includes('m')
// })
// console.log("filtermonths",filteredMonths)


// const students = [
//    {name: 'Soumya', roll: 18},
//    {name: 'Bishal', roll: 22},
//   {name: 'Ramakanta', roll: 20},
   
//   {name: 'Vishwanatha', roll: 16}
// ]
// const rollGreaterThan18 = students.filter(student =>{
//    return student.roll >= 18
// }

// )
// console.log(rollGreaterThan18 )
////const rollsGreaterThan18 = students.filter(student => student.roll >= 18)
//console.log(rollsGreaterThan18)
//

const num = [10,20,30,40,50,60]
const result = num.reduce((accumulator, current,idx,arr)=>{
   console.log(accumulator,current,idx)
   return true + " " + idx
},0
)
//reduce(callbackfn, initialvalue)

console.log("result:  "+result)//result value depends upon the last value of the accumulator

//findout sum through 
const sum = num.reduce((acc,current) => acc + current)
console.log('sum : ',sum)


//some()
const evens = [2,4,6,8,10]

let isSomeEvens = evens.some(num => num % 2 === 0)
console.log(isSomeEvens)

const odds = [2,3,10]
let isSomeOdds = odds.some(num => num % 2 !== 0)
console.log(isSomeOdds)

//every
const even = [2,4,6,8,10]

let isEveryEvens = even.every(num => num % 2 === 0)
console.log(isEveryEvens)

const odd = [2,3,10]
let isEveryOdds = odd.every(num => num % 2 !== 0)
console.log(isEveryOdds)

//find()
const numbers = [3, 7, 11, 14, 21, 16];

const firstEven = numbers.find(num => num % 2 === 0)
 
console.log("First even number:", firstEven);

//findIndex()
const number = [3, 7, 11, 14, 21];

const findnumber = numbers.findIndex(num => num % 2 === 0)
 
console.log("First even number:",findnumber);



//join()
const fruit = ['apple', 'banana', 'mango'];
const results = fruit.join("");

console.log(results);

const b = ['H', 'e', 'l','l','o'];
const r = b.join("");

console.log(r);

