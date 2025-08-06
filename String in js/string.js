// let str = "Hello"
// //undefined
// typeof str
// //'string'
// let str1 = new String('HEllO WORLD')
// undefined
// typeof str1
// //'object'
// str
// //'Hello'
// str1
// //String {'HEllO WORLD'}0: "H"1: "E"2: "l"3: "l"4: "O"5: " "6: "W"7: "O"8: "R"9: "L"10: "D"length: 11[[Prototype]]: String[[PrimitiveValue]]: "HEllO WORLD"
// str[0]
// //'H'
// str[2]
// //'l'
// str1[1,2]
// //'l'
// str[1][2]
// //undefined
// str .length
// //5
// str1.length
// //11
// console.log(str1)

const str = "    Hello World    "
console.log(str,"->",str.toUpperCase())

const str1 = str.toLowerCase()
console.log(str,"->",str1)

const trims = str.trim()
console.log(str,"->",trims)


const starttrim = str.trimStart()
console.log(str,"->",starttrim)

const endtrim = str.trimEnd()
console.log(str,"->",endtrim)



//========================


const str2 = "Javascript"
console.log(str2.charAt(3))//s
console.log(str2[3])//s

console.log(str2.charCodeAt(4))

const str3 = str2.concat('is fun!!!')
console.log(str , " -> " , str3)

console.log(str2.includes('a'))
const letter = 'A'
console.log(str2.includes(letter.toLowerCase()))
console.log(str.includes('Script'))

console.log(str2.indexOf('a'))
console.log(str2.indexOf('a',2))
console.log(str2.lastIndexOf('a'))

const replaceStrings = str2.replace("a","k")
console.log(replaceStrings)

const replaceAllStrings = str2.replaceAll("a","k")
console.log(replaceAllStrings)



console.log(str2.repeat(3))


console.log("5".padStart(3,"0"))
console.log(str2.padStart(15,"0"))

console.log("5".padEnd(3,"0"))
console.log(str2.padEnd(15,"0"))

const fruitstr = 'apple,banana,mango,cherry,orange'
const fruitsArr = fruitstr.split(',')
console.log(fruitstr ,"->",fruitsArr )


const s = 'we are developers'
console.log(s.length)
console.log(s.slice())
console.log(s.substring())

console.log(s.slice(10))
console.log(s.substring(10))

console.log(s.slice(-10))
console.log(s.substring(-9))//-9 => 0
console.log(s.slice(17))
console.log(s.slice(17))


console.log(s.slice(11,13))
console.log(s.substring(11,13))//lo

console.log(s.slice(13,11))// if (st > en) => ""
console.log(13,11)//if (st > en)->swap => it swap the index  and the output is lo



console.log(s.slice(-6,-2))
console.log(s.substring(-6,-2))//""



console.log(s.slice(-6,2))//slice(11,2)=>""
console.log(s.substring(-6,2))// substring(0,2)

console.log(s.slice(2,-6))//slice(2,11)
console.log(s.substring(2,-6))//=.substring(2,-6)=>substring(2,11)




