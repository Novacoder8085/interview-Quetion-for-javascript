// function foo1()
// {
//   return {
//       bar: "hello"
//   };
// }
// console.log(foo1());

// function foo2()
// {
//   return
//   {
//       bar: "hello"
//   };
// }
// console.log(foo2());


// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 == 0.3);

// (function() {
//   console.log(1); 
//   setTimeout(function(){console.log(2)}, 1000); 
//   setTimeout(function(){console.log(3)}, 0); 
//   console.log(4);
// })();


// function reversefunc() {
//   let value = [];
//   for (let i = 0; i < 160; i++) {
//     let mathRandom = Math.random("riwu");
//     value.push(mathRandom)
//   }
//   return value.reverse();
// }
// console.log(reversefunc());

// function sum(a, b) {
//     return a + b || function (b) {
//       return a + b;
//     }
//   }
// }
// console.log(sum(2, 3));
// console.log(sum(2)(3));

// for (var i = 0; i < 5; i++) {
//   var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode('Button ' + i));
//   btn.addEventListener('click', function(){ console.log(i); });
//   document.body.appendChild(btn);
// }

// var a={},
//     b={key:'b'},
//     c={key:'c'};

// a[b]=123;
// a[c]=456;

// console.log(a[b]);



// console.log((function f(n){
//   return ((n > 1) ? n * f(n-1) : n)
// })(10));




// var hero = {
//     _name: 'John Doe',
//     getSecretIdentity: function (){
//         return this._name;
//     }
// };

// var stoleSecretIdentity = hero.getSecretIdentity();

// console.log(stoleSecretIdentity);
// console.log(hero.getSecretIdentity());



// var length = 10;
// function fn() {
// 	console.log(this.length);
// }

// var obj = {
//   length: 5,
//   method: function(fn) {
//     fn();
//     arguments[0]();
//   }
// };

// obj.method(fn, 1);


// function solve(arr, rotations){
//   if(rotations == 0) return arr;
//   for(let i = 0; i < rotations; i++){
//     let element = arr.pop();
//     arr.unshift(element);
//   }
//   return arr;
//  }
//  solve([44, 1, 22, 111], 5);


// function palindrome(str){
//   str = str.toLowerCase();
//   let teststr = "";
//   let alphaNumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
//   for(let i = 0; i<str.length; i++){
//     if(alphaNumeric.indexOf(str[i]>0)){
//       teststr+=str[i];
//     }
//   }

//   let reverseString = "";
//   for(let i = teststr.length-1; i>=0; i--){
//     reverseString += teststr[i];
//   }
// return teststr == reverseString;
// }

// console.log(palindrome("jkfaiohfdfgn"));

// console.log(1 + "2" + "2");
// console.log(1 + +"2" + "2");
// console.log(1 + -"1" + "2");
// console.log(+"1" + "1" + "2");
// console.log("A" - "B" + "2");
// console.log("A" - + "B" + 2);

// var list = readHugeList();
// var nextListItem = function() {
//     var item = list.pop();

//     if (item) {
//         // process the list item...
//         setTimeout(nextListItem,0)
//     }
// };

// var a={},
//     b={key:'b'},
//     c={key:'c'};

// a[b]=123;
// a[c]=456;

// console.log(a[b]);

// console.log((function f(n) {
//    return ((n > 1) ? n * f(n - 1) : n) 
//   })(10)); 

// for (var i = 0; i < 5; i++) {
//   var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode('Button ' + i));
//   btn.addEventListener('click', function(){ console.log(i); });
//   document.body.appendChild(btn);
// }


// Create a function that, given a DOM Element on the page, will visit the element itself and all of its descendents (not just its immediate children). For each element visited, the function should pass that element to a provided callback function.

// The arguments to the function should be:

// a DOM element
// a callback function (that takes a DOM element as its argument)

// for (var i = 0; i < 5; i++) {
//    var btn = document.createElement('button');
//    btn.appendChild(document.createTextNode('Button ' + i));
//    btn.addEventListener('click', function(){ console.log(i); });
//    document.body.appendChild(btn);
//  }
//  
//  let btn2 = document.createElemnt('button');


// function Traverse(p_element,p_callback) {
//    p_callback(p_element);
//    var list = p_element.children;
//    for (var i = 0; i < list.length; i++) {
//        Traverse(list[i],p_callback);  // recursive call
//    }
// }


// var length = 10;
// function fn() {
// 	console.log(this.length);
// }

// var obj = {
//   length: 5,
//   method: function(fn) {
//     fn();
//     arguments[0]();
//   }
// };

// obj.method(fn, 1);

// let n = 24;
// let l = 0, r = 100, ans = n;
// while(l <= r) {
//    let mid = Math.floor((l + r) / 2);
//    if(mid * mid <= n) {
//        ans = mid;
//        l = mid + 1;
//    }
//    else {
//        r = mid - 1;
//    }
// }
// print(ans);


// function constfun()  
// {  
// var fun =[];  
// for(var i=0;i<10;i++)  
//         fun[i]=function(){return i;};  
// return fun;  
// }  
// var fun =constfun();  
// console.log(fun[5]())


// let x = [1, 2, 3]; 
// let y = x.map((num) => { 
//   x.push(num + 3); 
//   return num + 1; 
// }); 

// console.log(y);

// let x = "b"; 
// let y = "a"; 

// console.log(x + y + + y + y);

// let x = 7; 
// let y = !!x && !!x; 

// console.log(y); 
// let x = 7; 
// let y = "number" 

// console.log(y.length);

// console.log("shivam".slice())

// let x = () => { 
//     return { y: "z" }; 
//   }; 

//   console.log(typeof x().y); 
// let a = [1, 2, 3];
// let b = [...a];
// b.push(23);
// console.log(a)



// let x = 018; 
// let y = 015; 

// console.log(x - y); 


// let nuMber  = 12349807;
// // let b = String(number)
// console.log(nuMber.toString().length);



// function outerFun(){

//     let x = 10;
//     function innerFuc(){
//         let y = 20;
//         console.log(x + y);
//     }
//     innerFuc();
// }

// outerFun();

// function recurtion(num){
//     if(num === 0){
//         return 1;
//     }else{
//         return num * recurtion(num - 1);
//     }
// }
// console.log(recurtion(5));



// document.cookie = "name = shivam";
// document.cookie = "name2 = sundaram;  expires=";
// let cookie1 = document.cookie;
// console.log(cookie1);
// console.log(Date());

// function abc(num) {
//     if (num === 0) {
//         return 1
//     } else {
//         let value = num * abc(num - 1);
//         console.log(value, num)
//         return value;
//     }
// }

// console.log(abc(5))

// function person(name, age , gender){
// this.name = name;
// this.age = age;
// this.gender = gender;
// }
// var person1 = new person("shivam", 21, "M");
// console.log(person1);
// var person2 = new person("sundaram", 19, "M");
// console.log(person2);
// var person3 = new person("diwakar", 18, "M");
// console.log(person3);


// function* nextgen(){
//     let i  = 0;
//     while(true){
//         yield i++
//     }
// }
// let gen = nextgen()
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// let obj1 = {
//     name:"shivam",
//     surname: "gupta"
// }
// let obj2 = {};

// obj2.__proto__ = obj1;
// console.log(obj2.surname)


// var number = 10;

// if (number > 5) {
//   alert("The number is greater than 5.");
// } else {
//   alert("The number is not greater than 5.");
// }


// let p1 = new Promise((resolve, reject) => {
//     console.log("promise was starts")
//     setTimeout(()=>{
//     resolve('Promise Resolve')
//     })
//     reject('promise was rejected');
//     console.log("promise was ends")
// }, 1000);;''
// console.log(p1)
// async function ownpromise(){
//     console.log('Hello World')
//     let val = await p1;
//     console.log('Namaste Javascript')
//     console.log(val)
// }

// ownpromise();

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise Is Resolve");
//     }, 300);
//     console.log(reject("Promise Is Reject"));
// });

// myPromise.then((res) => console.log(res));



// function sumOfThreeElements(...elements) {
//     return new Promise((resolve, reject) => {
//         if (elements.length > 3) {
//             reject("Just 3 elements or less are allowed");
//         }
//         else {
//             let sum = 0;
//             let i = 0;
//             while (i < elements.length) {
//                 sum += elements[i];
//                 i++;
//             }
//             resolve("Sum has been calculated: " + sum);
//         }
//     })
// }



// const Person = class {
//   constructor(name, age, address) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }
// };

// const person = Object.setPrototypeOf({}, Person);
// console.log(person.name); // undefined
// console.log(person.age); // undefined
// console.log(person.address); // undefined

// person.name = "John Doe";
// person.age = 30;
// person.address = "123 Main Street, Anytown, USA";

// console.log(person.name); // "John Doe"
// console.log(person.age); // 30
// console.log(person.address); 

// const prototype = {
//   name: "John Doe",
//   age: 30,
//   address: "123 Main Street, Anytown, USA"
// };

// const person = Object.create(prototype);
// console.log(prototype)
// console.log(person.name); // "John Doe"
// console.log(person.age); // 30
// console.log(person.address); 

// {
//     var value = 10;
//     console.log(value);
// }
//     console.log(value);

// function parameter(...param){
//     console.log(param)
//   return param.reduce((a, b)=> a + b);
// }
// console.log(parameter(1,2,3,4,5));

// let p1 = new Promise((resolve, reject)=>{
//     console.log("promise was starts")
//     setTimeout(()=>{
//         resolve('Promise Resolve')
//     })
//     // reject('promise was rejected');
//     console.log("promise was ends")
// })
// console.log(p1)
// async function ownpromise(){
//     console.log('Hello World')
//     let val = await p1;
//     console.log('Namaste Javascript')
//     console.log(val)
// }

// ownpromise();


// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise Is Resolve");
//     }, 300);
//   });
  
//   myPromise.then((res)=>console.log(res));

// function* generator(){
//     let i = 0;
//     while(true){
//         yield i;
//         i++;
//     }
// }
// let value = generator();
// console.log(value.next());
// console.log(value.next());
// console.log(value.next());
// console.log(value.next());
// console.log(value.next());
// console.log(value.next());
// console.log(value.next());
// console.log(value.next());
// console.log(value.next());
// console.log(value.next());

// let obj = {
//     name:"shivam",
//     surname:"gupta"
// }

// let {value} = obj;
// console.log(value[name])
// console.log(value.surname)

// confirm("are you sligale powering off");


// console.log("shivam gupta");

// var grand_Total=eval("10*10+5");
// console.log(typeof grand_Total);

// function constfuncs() 
// {
//     var funcs = [];
//     for(var i = 0; i < 10; i++)
//         funcs[i] = function() { return i; };
//     return funcs;
// }
// var funcs = constfuncs();
// funcs[5]()







































