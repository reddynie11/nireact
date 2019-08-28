var n = 'disco';
var myObj = {
    'name': 'narasimha',
    'age' : 19
};
console.log(myObj);

function assign(n){
    myObj.name = n; 
}
assign(n)

console.log(myObj);




var number = 100
var string = "Jay"
let obj1 = {
 value: "a"
}
let obj2 = {
 value: "b"
}
let obj3 = obj2;
function change(a,b,c,d) {
   a = a * 10;
   b = "Pete";
   c = d;
   console.log(a);
   console.log(b);
}
change(number,string,obj1,obj2);
//obj1=obj2
//Guess the outputs here before you run the code:

console.log(obj1.value);  