debugger
console.log("PROGRAM STATED")

function hello () {
    console.log("hello everyone")
}
hello()
function add () {
    const x = 20;
    const y = 30;
    console.log("sum is "+ (x+y))
}
add()
// ===========================================

function addTwoNumbers(x,y){
    console.log("x value is " + x)
    console.log("y value is " + y)
    console.log("addition is ",x+y )

}
// ============================================
function substractTwoNumbers(x,y){
     const res = x-y;
    // console.log("addition is " ,x+y )
    return res
}