/* function name() {
    console.log("1. area");
};
name ();

function name2() {
    console.error("error");
};
name2 ();

function name3() {
    console.warn("this is an alert");
};

name3 ();

alert ("this is an alert");
// console.clear (); 

btk_academia=function () {
    console.log("Welcome to Btk Academia Jquery Full Stack");
}

btk_academia();

btk_academia2=()=>{console.log("Js Lessons")};

btk_academia2(); */

// ******Lesson 6 Syntax, var, let, const, global scope, local scope ******

// var 4number; no starting with number
// var number-try;  no dashes
// global scope - variations
// var number4;
// var $number;
// var number_spaces;

// // Belli scope works
// let scope="Btk Academia";
// console.log("scope");

// const no_change =44;
// console.log("no_change");

// const no_change =23;
// console.log("no_change");

// ******Lesson 7 DataTypes NaN undefined ******
// var temp=5;  //number
// var temp=5.4; //number
// var temp="Btk_Academia"; //string
// var temp='Btk_Academia'; //string

// var temp=true;   //boolean
// var temp=null; //object

// var temp;
// console.log(temp);
// console.log(typeof temp); //undefined

// var temp=10;
// var temp=String(10);
// var temp=[5, 63, 652, 6]
// console.log(temp);
// console.log(typeof temp);

// var temp=Number('10');
// console.log(temp);
// console.log(typeof temp);

// var temp2=Number('t');  //Nan
// console.log(temp2);
// console.log(typeof temp2);

// var temp; // undefined
// console.log(temp);
// console.log(typeof temp);

// ****** Lesson 8 Js Operators, Cast, case-sensitive ******
// var temp=4, temp2=3, temp3;
// temp3=temp/temp2;
// console.log(temp3);

// var temp=4;
// var temp2=3;
// var temp3;

// temp3=temp/temp2;
// console.log(temp3);

// temp++;
// temp--;
// temp=temp+6;
// temp+=5
// console.log(temp);

// var temp4=string(20); //change to string
// console.log(typeof temp4);
// console.log(temp4);

// var temp4=Number("20"); //change to string
// console.log(typeof temp4);
// console.log(temp4);

// ** Case sensitive
// var btkAcademia="JS";
// var BtkAcademia="JS-2"

// console.log(btkAcademia);
// console.log(BtkAcademia);

// var temp=Number(null); //result:0
// var temp=Number(true); //result:1
// var temp=Number(false); //result:0
// console.log(typeof temp);
// console.log(temp);

// ****** Lesson 9 Number ******
// isNaN('a5')
// .toPrecision(5); //ensoldan baslayarak 5.sayiyi yuvarla
// .toFixed(5); //virgulden sonra 5.sayi yuvarla

// var
// let
// const

// var number=44.2354;
// console.log(number.toPrecision(3));
// console.log(number.toFixed(3));

// var isNumber=Number ('34a');
// console.log(isNumber);
// console.log(typeof isNumber);

// console.log(isNaN('45a'));
// var value=isNaN('45')
// if (value) {
//     console.log("it is not a number");
// } else {
//     console.log("it is a number");
// }

// // var value=isNaN('45a')
// // if (value) {
// //     console.log("it is not a number");
// // } else {
// //     console.log("it is a number");
// // }
// var value=isNaN('45')
// if (!value) {
//     console.log("it is not a number");
// } else {
//     console.log("it is a number");
// }

// ***** Lesson 10 Date *****

// new Date
// const date = new Date ();
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log();
// console.log();
// console.log();
// console.log();

// ***** Lesson 5_11 Escape Template String *****

// let name="Husniye";
// let surname="Erparun";
// fullName=`your name: ${name} your surname: ${surname}`

// let name, surname, fullName;
// name="Husniye";
// surname="Erparun";
// // fullName= "Your name:" +name+ " Your Surname:" + surname;
// fullName=`your name: ${name} your surname: ${surname}`;  //ES6 Backtick
// alert(fullName);
// console.error(" \"deneme ")
// console.warn(' \"deneme ')

// ***** Lesson 5_12 Math  *****

// console.log(Math.PI);
// console.log(Math.round(Math.random()*10+1)); //1<=x  x=10
// console.log(Math.random()*2+1);
// console.log(Math.round((6.5)));
// console.log(Math.ceil((6.4)));
// console.log(Math.floor((6.4)));
// console.log(Math.sqrt(25));
// console.log(Math.pow(3,2));
// console.log(Math.abs(-44));
// console.log(Math.min(1,2,5,20));
// console.log(Math.max(1,2,5,20));

// ***** Lesson 5_14 Conditionals *****
// if Else
// var result = 3 > 1;
// console.log(result);

// if (true) {
//   console.log("Big");
// } else {
//   console.log("Small");
// }

// *Ternary
// * var ternary=()? "" : "";

// var ternary = 5 > 1 ? "Big" : "Small";
// console.log(ternary);

// console.log(5 < 1 ? "Big" : "Small");

// * Switch cases
// var value= Number(prompt("Enter a number"));

// var result = 4;
// switch (result) {
//     case 1:
//         console.log("One");
//         break;
//     case 2:
//         console.log("Two");
//         break;
//     case 3:
//         console.log("Three");
//         break;
//       default:
//         console.log("Default");
//         break;
// }

// ***** Lesson 15 Loops *****
// * iterative for function
// for (let i=0; i<5; i++){
//     console.log(i);
// }
// * while function
// let i2=0;
// while(i2<5){
//     console.log(i2);
//     i2++;
// }
//* do -while function
// let i3 = 6;
// do {
//   console.log(i3);
//   i3--;
// } while (i3 > 0);

// * for in function
// var array=[1,5,6,8,78];

// for ( var temp in array) {
//     console.log(`numbers: ${temp} element: ${array[temp]}`);
// }

// * for Each function (sadece ekrana yazdirmak icin)
// var array = [1,5,6,8,78];
// array.forEach(
//     function(item){
//         console.log(item);
// ? I didn't understand
// console.log(item+ " "+ array[item]);
//     }
// )

// * map function (Dizilerde return lazimsa / geri dondurmek icin)
// var array = [1,5,6,8,78];
// var newArray = array.map(function(item){
//     return item + 1;
// });

// console.log(newArray);
// console.log(typeof newArray);


// break   donguyu kirmak
//return   method u kirmak
//continue  sadece bu deger icin calisma sonrasinda devam et

// ***** Lesson 16 Array *****
// var array =[1,2,3,4,5, "BtkAcademia", [4,9,6,8]];

// console.log(typeof array);
// var sort=array.sort();
// for (var i=0; i<array.length; i++) {
//     console.log(sort[i]);
// }

//for in
// for (let temp in array) {
//     console.log(array[temp])
// }

// ***** Lesson 20 BOM - Browser Object Model*****
// console.log(window);
// window.alert("screen");
// // confirm 
// var clear=window.confirm("Are you sure you want to delete this");
// if (clear){
//     console.log("deleted");
// } else {
//     console.log("not deleted");
// }

