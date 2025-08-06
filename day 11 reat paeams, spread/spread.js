const { cloneElement } = require("react")

const  numbers = [1,2,3,4,5]
console.log(numbers)
console.log(...numbers)
const myName = "biswa"
console.log(...myName)

// ==============================

// const arri = [10,20,30,40]
// let arr2 = [];
//  for (let i = 0;i < arri.length; i++){
//     arr2[i]= arr1[i];

//  }


//  arr2.push(50)
//  console.log(arr1)
//  console.log(arr2)

 const arr3 = [10,20,30]
 const arr4  = [...arr3,..."hello"]
 arr4.push(70)
 console.log(arr3)
 console.log(arr4)
//  ==========================

const user = {
name: 'biswabhuan pradhan',
age: 24,
address:{
    state : ' odisha',
    pin :752103
    
}
}
const copiedUser = {...user,city: 'bbsr'}
copiedUser.address.state = ' jharkhand'
console.log(user)
console.log(copiedUser)

//================================
shallow clone 



deep clone
j.shon



