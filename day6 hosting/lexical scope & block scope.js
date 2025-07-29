function A(){ // outer function 
    let x = 20;
    console.log(x)

    function B(){ // inner function 
        const y = 30;
        console.log(y)
        //console.log(x) this line trigger closer (a) 

        function C(){
            const z = 40;
            console.log(z)
            console.log(y) // this trigger closer (b)
            console.log(x) // this trigger closer (a)

        }
        C()
    }
B() 
}
// B() b is local for function a  thats why it cant call out side function a 
const a = "Hello everyone !!"
console.log(a)

A()
console.log("program ended")
