
    //float,long,double,int->numbers
    //string
    //boolean
    //null-->externally hm khud se khaali dete h 
    //undefined-->ja bydefault khaali deta h 
    //symbol
    //arrays-->non-priitive
    //object-->non-primitive
    //let,var,const


    // let a="hello";
    // console.log(a);
    // const pi=3.14;
    // console.log(pi);
    // let a="hello";
    // {
    //     console.log(a);
    // }
    // console.log(a);
    // {
    //     let a="hello";
    // }
    // console.log(a);
    let isActive=true;
    let isAdmin=false;
    console.log("Boolean:",isActive,isAdmin);
    //Undefined
    let notAssigned;
    console.log("Undefined:",notAssigned);
    //null
    let emptyVal=null;
    console.log(emptyVal);
    // 6. Symbol
let uniqueId = Symbol('id');
console.log("Symbol:", uniqueId);
let sym1 = Symbol('id');
let sym2 = Symbol('id');
console.log(sym1, sym2);
console.log(sym1 === sym2); // false
console.log(typeof(pi))
let largeNumber = 123456789012345678901234567890n;
console.log("BigInt:", largeNumber);

//logical--> && || !=

//airthmetic: +-%*/

//comparison:< > == === !== >= <=

//(cond)
// for(let i=0;i<=100;i++){
//     if(arr[i]>90 && arr[i]<=100) console.log("A+");
//     else if (arr[i]>80 && arr[i]<=89) console.log("A");
//     else if (arr[i]>70 && arr[i]<=79) console.log("B");
//     else if (arr[i]>60 && arr[i]<=69) console.log("C");
//     else if (arr[i]>40 && arr[i]<=59) console.log("D");
//     else console.log("F");
// }
// fun()
// let fun=()=>{
//     console.log("my function");
// }
// let c =10;
// let b ="10";
// if(a===b) console.log(true);
// else console.log(false);
// console.log("hi");
//scope: 
// golbal
// block-->let,const
// functional

    // {
    //     var a="hello";
    //     console.log(a);
    // }
    // console.log(a);

    
    // function fun(){
    //     var k="hello";
    //     console.log(k);
    // }

    // fun();
    // console.log(k);

    let first=10;
    let second="10";
    console.log(first===second);
    let name="raj";
    let age=13;
    console.log(name+age);
    let result=`my name is ${name} and my age is {age}`;
    console.log(result);
    let ogname=" Aditi Ruhela "
    console.log(ogname.trim());
    console.log(ogname.toUpperCase());
    //method: object dependent
    //function: predefined 
    console.log(ogname.toLowerCase());
    console.log(ogname.indexOf("i"));
    console.log(ogname.includes("Ruhela"))
    console.log(ogname.slice(2,5))
    console.log(ogname.slice(5));
    console.log(ogname.split(" "))
    console.log(ogname.trim().split(""))
    console.log(ogname.trim().toUpperCase().split(""))
    // let password="sbhdbhwdf";
    // function check(pasword){
        //pass have atleast 6 characters
        //one uppercase
        //one lowercase
        //one special character
    //     let minLength=password.length>=6;
    //     let hasUpperCase=false;
    //     let hasLowerCase=false;
    //     let hasSpecialChar=false;
    //     let specialChars = "!@#$%^&*(),.?\":{}|<>";
    //     for(number i=0;i<passlength;i++){
    //         let char=pass[i];
    //         if(char>='A' && char<="Z") hasUpperCase=true;
    //         else if(char>='a' && char <='z') hasLowerCase=true;
    //         else if(specialChars.includes(char)) hasSpecialChar=true;
    //     }
    //     if(minLength && hasLowerCase && hasUpperCase && hasSpecialChar) return true;
    //     else return false;

    // }
    let a=4.5;
    console.log(Math.max(2,8));
    console.log(Math.floor(a));
    console.log(Math.pow(2,3));
    console.log(Math.random());//-->0-0.9
    console.log(Math.random()*10);//-->0-10.9
    //range formulae to find anyone
    // let min=5000;
    // let max=6000;
    // let num=console.log(Math.floor(Math.random()*(max-min))+min);//-->imp.
    console.log(Math.floor(Math.random()*10));//-->0-10
    console.log(Math.floor(Math.random()*10)+1);//-->1-10
    console.log(Math.floor(Math.random()*200)+1);//-->1-200
    console.log(Math.floor(Math.random()*100)+500);//-->501-600
    //generate otp
    function generateOTP(){
        let max=9999;
        let min=1000;
        let otp=Math.floor(Math.random()*(max-min)+min);
        console.log(otp);
    }
    //arrays
    let arr=["hello","hi",1,2,true,false];
    for(let x of arr){
        console.log(x);
    }
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
    //suppose you want to print it on same line but in js there is no method so you can cocat eit in string
    let ans="";
    for(let i=0;i<arr.length;i++){
        ans+=arr[i]+" ";
    }
    console.log(ans);
    console.log(arr.slice(1,3));
    arr.unshift("apple");
    console.log(arr);
    arr.push("mango");
    console.log(arr);
    console.log(arr.indexOf("hi"));
    //task 3-->generate random hex color value
    //METHOD 1
    function generateOtp(){
        let max=15;
        let min=0;
        let otp=Math.floor(Math.random()*(max-min)+min);
        console.log(otp);
        return otp;
    }
    function generateHexColor(){
        let arr=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
        let ans="#";
        for(let i=0;i<6;i++){
            ans+=arr[generateOtp()];
        }
        console.log(ans);
    }
    //METHOD 2
    function generateHexcolor(){
        let arr=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
        let ans="#";
        for(let i=0;i<6;i++){
            let randomValue=Math.floor(Math.random()*arr.length);
            ans+=arr[randomValue];
        }
        console.log(ans);
        document.body.style.backgroundColor=ans;
    }
    //BOOLEAN CONCEPT -VIVA
        //boolean-->
        //true: "abhbh",1,-1,[],{},others
        //false: "",0,-0,null,undefined,NaN
        
        //question can ask in viva: 
        // if(null || 1){
        //     //ans-->true
        // }
        let check=NaN;
        console.log(Boolean(check));
    //task3: random password generator
    function generatePassword(){
    }
    "use strict"

// let a = "hello";

// console.log(a);


// function fun(a,a){
//     console.log("hi")
// }

// fun(10,20);


// console.log(this)

// function delecration
// function add(a,b){
//     let res = a+b
//     console.log(res)
//     return res;
// }

// let a = add(10,30);

// console.log(a);

// function expression
// let add = function(a,b){
//     return a+b;
// }
// let a = add(10,30);

// console.log(a)

// arrow function
// let add =  (a,b)=>{
//     return a+b;
// }
// let a = add(10,30);

// console.log(a)

// let add = (a,b)=> a+b;

// let a = add(10,30);

// console.log(a);

// let result1 = 10 - "4";
// console.log(result1);  // 6
// console.log(typeof result1);  // number

// console.log(true + 3); // 4
// console.log(false + 5); // 5

// let result2 = "Value is " + true;
// console.log(result2);   // "value is true"
// console.log(typeof result2);  // string

// // Explicit Conversion:
// // You manually convert a value using functions or operators.

// //String to Number
// let strNumber1 = "123";
// let num1 = Number(strNumber1);
// console.log(num1, typeof num1);  // 123 number

// let strNumber2 = "45.67";
// let num2 = parseFloat(strNumber2);
// console.log(num2, typeof num2); // 45.67 "number"

// //Number to String
// let number1 = 100;
// let str1 = String(number1);
// console.log(str1, typeof str1); // "100" "string"

// let number2 = 250;
// let str2 = number2 + "";
// console.log(str2, typeof str2); // "250" "string"

// //Boolean to Number
// let bool1 = true;
// let num3 = Number(bool1);
// console.log(num3, typeof num3); // 1 "number"

// create a function of adding two numbers
// function declearation
// function add(a,b){
//     return a+b;
// }
// // function expression

// // arrow function
// let addd = (a,b)=>{
//     return a+b;
// }

// let add = function (a,b){
//     return a+b;
// }
// let mul = function(a,b){
//     return a*b;
// }

// function calculate(a,b,callback){//higher-order function
//     return callback(a,b);
// }

// let sum = calculate(10,20,(a,b)=>{
//     return a+b;
// })

// let multi = calculate(30,40,mul);
// console.log(sum)


// let fun = (x) => {
    //   return x * 2;
    // };
    // let result = arr.map(fun);






   
let arr = [1, 2, 3, 4, 5, 6,7];

let result = arr.map((x)=>{
    return x*2;
})
console.log(result)

let res = arr.filter( (x,idx,arr)=>{
    return x%2==0;
})
console.log(res)

let arr1 = ["Apple","mango","banana","apple","apple"];

let arr1Res = arr1.filter((value,idx,arr1)=>{
    console.log(idx)
    let ele = value.toLowerCase();
    return ele!="apple";
})

// filter the fruit whose length is > 5
let arr2 =["Apple","mango","banana","apple","apple"];

// filter the age > 18
let arr3 = [12,34,9,60,36,24];

// filter the fruit start with "A"or 'a'
let arr4 =["Apple","mango","banana","apple","apple"];

// map the square of each element in new array
let arr5 =[1,2,3,4,5];

// objects
// diffrent ways to create object:- object literals, functional constructor, class, object.create()
// let student = {
//     id:"101",
//     name:"rahul",
//     marks:90,
//     display:()=>{
//        console.log(`my name is ${this.name} and got marks${this.marks}`)
//     }
// }

// // bracket notation
// let userName = student["name"];

// // dot notation
// let userMarks = student.marks;

// console.log(userName);

// student.display();

// functional constructor
// function Student(id,name,marks){
//     this.id = id;
//     this.name = name;
//     this.marks = marks;

//     function display(){
//         console.log("this is method")
//     }
// }

// let s1 = new Student(101,"rahul",75);
// let s2 = new Student(102,"raj",87);

// console.log(s1);
// console.log(s2);

// class

// class Student{

//     constructor(id,name,marks){
//         this.id = id;
//         this.name = name;
//         this.marks= marks;
//     }

//    display = ()=>{
//     console.log("this is a student method")
//    }
//    getMarks = ()=>{
//     return this.marks;
//    }

// }

// let s1 = new Student(101,"raj",89);
// let s2 = new Student(101,"rohan",90);

// console.log(s1)
// console.log(s2)
// s2.display()

let studentArr = [
  { id: 101, name: "raj", marks: "60", gender: "male" },
  { id: 102, name: "ram", marks: "80", gender: "male" },
  { id: 103, name: "diya", marks: "55", gender: "female" },
  { id: 104, name: "yash", marks: "90", gender: "male" },
  { id: 105, name: "disha", marks: "90", gender: "female" },
  { id: 106, name: "rohan", marks: "45", gender: "male" },
];


// Q1.print arrays of student name
let studentNames = studentArr.map((x)=>{
    return x.name;
})

console.log(studentNames)

// Q2.transform the student add mr/mrs in the name based on gender
// output: [
//   { id: 101, name: "Mr raj", marks: "60", gender: "male" },
//   { id: 102, name: "Mr ram", marks: "80", gender: "male" },
//   { id: 103, name: "Ms diya", marks: "55", gender: "female" },
//   { id: 104, name: "Mr yash", marks: "90", gender: "male" },
//   { id: 105, name: "Ms disha", marks: "90", gender: "female" },
//   { id: 106, name: "Mr rohan", marks: "45", gender: "male" },
// ];
// let student={
//     id:101,
//     name:'rahul',
//     isPresent:true,
//     address:{
//         city:'Mathura',
//         pincode:12345
//     }
// }
// objects
// diffrent ways to create object:- object literals, functional constructor, class, object.create()
// let student = {
//     id:"101",
//     name:"rahul",
//     marks:90,
//     display:()=>{
//        console.log(`my name is ${this.name} and got marks${this.marks}`)
//     }
// }

// // bracket notation
// let userName = student["name"];

// // dot notation
// let userMarks = student.marks;

// console.log(userName);

// student.display();

// functional constructor
// function Student(id,name,marks){
//     this.id = id;
//     this.name = name;
//     this.marks = marks;

//     function display(){
//         console.log("this is method")
//     }
// }

// let s1 = new Student(101,"rahul",75);
// let s2 = new Student(102,"raj",87);

// console.log(s1);
// console.log(s2);

// class

// class Student{

//     constructor(id,name,marks){
//         this.id = id;
//         this.name = name;
//         this.marks= marks;
//     }

//    display = ()=>{
//     console.log("this is a student method")
//    }
//    getMarks = ()=>{
//     return this.marks;
//    }

// }

// let s1 = new Student(101,"raj",89);
// let s2 = new Student(101,"rohan",90);

// console.log(s1)
// console.log(s2)
// s2.display()

let studentArr = [
  { id: 101, name: "raj", marks: "60", gender: "male" },
  { id: 102, name: "ram", marks: "80", gender: "male" },
  { id: 103, name: "diya", marks: "55", gender: "female" },
  { id: 104, name: "yash", marks: "90", gender: "male" },
  { id: 105, name: "disha", marks: "90", gender: "female" },
  { id: 106, name: "rohan", marks: "45", gender: "male" },
];


// Q1.print arrays of student name
let studentNames = studentArr.map((x)=>{
    return x.name;
})

console.log(studentNames)

// Q2.transform the student add mr/mrs in the name based on gender
// output: [
//   { id: 101, name: "Mr raj", marks: "60", gender: "male" },
//   { id: 102, name: "Mr ram", marks: "80", gender: "male" },
//   { id: 103, name: "Ms diya", marks: "55", gender: "female" },
//   { id: 104, name: "Mr yash", marks: "90", gender: "male" },
//   { id: 105, name: "Ms disha", marks: "90", gender: "female" },
//   { id: 106, name: "Mr rohan", marks: "45", gender: "male" },
// ]
let query="city"
console.log(student["address"][query])
console.log(student.address.city)
console.log(student.name)
console.log(student["name"])
student.age=24

let objData=JSON.parse(jsonData) //json-->object
console.log("")
let query="city";
student.display();