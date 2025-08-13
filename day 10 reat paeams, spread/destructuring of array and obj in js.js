 const numbers = [11,22,33,44,55]
// const a = numbers[0]
// const b = numbers[1]
// const c = numbers[2]
// const d = numbers[3]
// console.log(numbers)

// const [a ,b, c ,d] = numbers
// console.log(a,b,c,d)

// const [a1,,,,b1]= numbers
// console.log(a1,b1)


// const[a2,b2,...rest]= numbers
// console.log(a2,b2,rest)

// const numbers1 = [10,20]
// const [a3,b3,c3 = 999]= numbers1
// console.log(a3,b3,c3)
// ========================================

const employee = {
    id : 101,
    name: "rajkumar",
    age : 25,
    salary: 666.66

}
const {a,b}= employee
console.log(a,b) // undefine -> as there no key name  "a" and "b" in employee obj



const{id: employeeid,name,salary,dept:department= 'it'} = employee
console.log(employeeid,name,salary)
 console.log(department)

const x = 10;
 const y = 20;
 console.log ("sum of x+y = ", x+y)
 
