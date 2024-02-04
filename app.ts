//Variable 
let var1 = 'String1'
// var1=1 
// implicit type and not changeable to number
let num1 = 1
// num1=false
// implicit type and not changeable to boolean

// Explicit defined type

let var2: string ;

var2='Test'

let num2: number = 5;
num2=6

let isAdmin : boolean = true;
isAdmin = false;

//Array

let names = ["PT", "RG"];
names.push("RP")
// names.push(5);

let numbers = [1, 4 , 2]
numbers.push(4)

let mixedArry = ["RG", 2, 5]
mixedArry.push("7")

// Array Type definition
let arr1: string[] = ["6", "RT"]
arr1.push("8")

let arr2 : number[] = [1,2,5,3]
arr2.push(0);
let arr3 : (string | number)[];
arr3 = [1, "R", 4]

// Object
let user = {
    username:"Prakash",
    age:40,
    isAdmin:false
}
user.username = "Roshan"
// Not able to change any other type
// user.age="14"
// user.isAdmin = "true"

// Object with type definition
let user1 : {
    username : string 
    age : number
    isAdmin : boolean
    phohne? : string
}

user1 = {
    username:"Ram",
    age:12,
    isAdmin: true,
}

// any type

let testany;
testany=12,
testany="12",
testany=[1,3,"4"]
testany=true,
testany={}

let arr6 : any[];
arr6 = [1,3,"4",[],{}]

// Functions

//This function does not return anything
let sayHi = ()=>{
console.log("Hello Hi")
}

// sayHi = ()=> {}

//This will return type string
let sayHi1 = ()=> {
    return "Hello"
}

//This will return type number
let sayHi2 = ()=> {
    return 2
}

//Explicit type defintion in Function

let functionReturnString =(): string =>{
    return "Hi"
}

// Return type is matching.
let functionReturnNumber =(): number =>{
    return 2
}

let fun1 = (num : number) =>{
    return num * 2
}

// no return
let fun2 = (num : number) : void =>{
    console.log("no return")
}

let fun3 = (user:{username:string,age:number})=>{
    console.log(user.username);
}

// type alias
type UserType = {
    username: string
    age : number
    phone ? : string
}

let fun4 = (user : UserType) =>{
    console.log(user.age)
}

// function prototype
type myFunc =(a: number, b:string)=> void

let func5 : myFunc = (num, str) =>{
    console.log(num + "Hello" + str)
}

type UserType2 = {
    username: string
    age : number
    phone ? : string
    theme: "dark" | "light"
}

const userWithTheme : UserType2 = {
    username:"Prakash",
    age:43,
    theme: "light"
}

// Interfaces -- just like type but advanced version
interface IUser {
    username : string;
    email:string;
    age: number;
}

interface IEmployee extends IUser {
    employeeID : number
}

const emp : IEmployee = {
    username: "Prakash",
    email: "test@gmail.com",
    age: 40,
    employeeID: 1
}

const client : IUser ={
    username: "Roshan",
    email: "test1@gmail.com",
    age:40
}

//Generics
interface IAuthor{
    id:number;
    username:string;
}

interface ICategory{
    id: number;
    title: string;
}

interface IPost {
    id: number;
    title: number;
    desc: string;
    extra: IAuthor[]| ICategory[];
}

interface IPostBetter<T> {
    id: number;
    title: string;
    desc: string;
    extra: T[]
}

const testME : IPostBetter<String> = {
    id:1,
    title:"Hello",
    desc: "Post Description",
    extra:["st", "st2"],
}

interface IPostEvenBetter<T extends object>{
    id: number;
    title: string;
    desc: string;
    extra: T[]
}

const testME1 : IPostEvenBetter<{id: number, username:string}> = {
    id: 1,
    title:"Hello",
    desc: "Post Description",
    extra:[{id:1, username:"st2"}],
}

//OR
const testME2 : IPostEvenBetter<IAuthor> = {
    id: 1,
    title:"Hello",
    desc: "Post Description",
    extra:[{id:1, username:"st2"}],
}

const testME3 : IPostEvenBetter<ICategory> = {
    id: 1,
    title:"Hello",
    desc: "Post Description",
    extra:[{id:1, title:"st2"}],
}