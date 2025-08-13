// function add (a,b){
//     console.log(a+b)
//     console.log(first)
// }
// add(20,30)


const sum = (a,b,...args) =>{
    
// const sum = (...args , a,b) =>{
    console.log("sum is: ", a+b)
    console.log(args)
    console.log(args.lenth)
    const sum = args. reduce((acc, current) => acc + current)
    console.log("sum of rest params", sum)
}
sum(10, 20, 30, 40, 50, )


