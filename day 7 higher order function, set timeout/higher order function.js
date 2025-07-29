function f1(b){
    console.log("value of b",b)
   console.log("typeof b",typeof b )

   b()

   return "java technocart"
}
// f1()
// f1(10)
// f1("hello")
// f1(true)

function sayHello(){
    console.log("hello everone!!!")
}
//f1(sayHello())
f1(sayHello)