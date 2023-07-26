// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //values and variables
// let js = "amazing";
// console.log(50 + 23 + 323);

// console.log("hugo");
// console.log("144");

// let firstName = "hugo";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// let y4 = "4";

// let person = "jonas";
// console.log(person);

// let PI = 3.1415;

// let myFirstJob = "programmer";
// let myCurrentJob = "teacher";

// console.log(myCurrentJob);

// ////////////////////////////////////
// //assessment

//let country = "England";
// let continent = "Europe";
// let pop = "70milion";

//console.log(country);
// console.log(continent);
// console.log(pop);
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Data Types
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// //console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// //console.log(typeof 23);
// //console.log(typeof "jonas");

// javaScriptIsFun = "yes";
// console.log(typeof javaScriptIsFun);

// let hugo;
// console.log(hugo);
// console.log(typeof hugo);

// hugo = 8814;
// console.log(typeof hugo);
// //////////////////////////////////
// // assessment

// // Set isIsland to False for the UK
// let isIsland = true;

// console.log(isIsland);
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);

// let language = "english";
// console.log(typeof language);#
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let, const and var

// let age = 30;
// age = 31;

// const birthYear = 2003;

// var job = "five guys";
// job = "dev";

/////////////////
// assessment
// const language = "english";
// language = "oi mate";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//basic operators
// const year = 2030;

// const ageHugo = year - 2003;
// const ageLiam = year - 2015;
// console.log(ageHugo);
// console.log(ageLiam);
// const mushroomBox = 59;
// const hugosMoney = mushroomBox - 42.57;
// console.log(hugosMoney);

// console.log(ageHugo * 2, ageHugo / 2, 2 ** 3);

// const firstName = "hugo";
// const lastName = "pereira";

// console.log(firstName + " " + lastName);

// //////////////
// //assighnment opeartors
// const x = 10 + 5;
// const y = 16 - 4;
// let a = 10 + 10;
// a = a + 10;
// a = a * 10;
// a = a + 1;
// console.log(a);

// //comparision opeartors
// console.log(ageHugo > ageLiam); // < > >= <=
// console.log(ageLiam >= 18);

// const isFullAge = ageLiam >= 18;

// console.log(year - 2003 > year - 2015);
// ////////////////////////
// // Assements
// const England = 70000000;
// let halfEngland = England / 2;
// console.log(halfEngland);
// halfEngland++;
// console.log(halfEngland);
// const finland = 6000000;
// const doesEnglandHaveMore = halfEngland > finland;
// console.log(doesEnglandHaveMore);

// const description =
//   "Portugal is in Europe, and its 11 million people speak portuguese";

// console.log(description);
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// operator percedence
// const year = 2030;

// const ageHugo = year - 2003;
// const ageLiam = year - 2015;
// console.log(year - 2003 > year - 2015);

// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const avgAge = (ageHugo + ageLiam) / 2;
// console.log(ageHugo, ageLiam, avgAge);
// const massMark = 78;
// const massJohn = 92;
// const heightMark = 1.69;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark);
// console.log(BMIJohn);
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);
// ////////////////////////////////////////////////////////////////////////////////////////////

// const firstName = "hugo";
// const job = "dev";
// const birthYear = 2003;
// const Year = 2023;

// const hugo =
//   "i'm " + firstName + ", a " + (Year - birthYear) + " year old " + job;
// console.log(hugo);

// const hugonew = `i'm ${firstName} , a  ${Year - birthYear} year old ${job} `;
// console.log(hugonew);

// console.log(" this is \n gonna be\n lots of\n  lines");
// console.log(` this is
//  gonna be
//  lots of
//   lines`);

//   //////////////////
//   assessment

//   const description =
//  `Portugal is in Europe,
//   and its 11 million people speak
//   portuguese`;
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const age = 15;
// const isOldEnough = age >= 18;

// if (age >= 18) {
//   console.log("sarah can start driving license 🚗");
// } else {
//   const yearLeft = 18 - age;
//   console.log(` sarah is too young , wait another ${yearLeft} years`);
// }

// const birthYear = 2003;
// let century;
// if (birthYear <= 2000) {
//   let century = 20;
// } else {
//   let century = 21;
// }
// console.log(century);

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// /* Write your code below. Good luck! 🙂 */
// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI ${BMIMark} is higher than John's${BMIJohn}!`);
// } else {
//   console.log(`John's BMI ${BMIJohn}is higher than Mark's${BMIMark}!`);
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///type conversion
// const inputYear = "2003";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
// console.log(Number("hugo"));

// console.log(String(23), 23);

// //type coercion

// console.log("i am " + 23 + " years old");
// console.log("10" - 4 - "10");
// console.log("10" + 4 + "10");
// console.log("10" * "10");
// console.log("10" / "10");
// ///////////////////////////////////
// //assessement
// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123" < 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("hugo"));
// console.log(Boolean({}));

// const money = 0;1
// if (money) {
//   console.log("don't spend it all");
// } else {
//   console.log("you should get a job");
// }
// //////////////////////////
// assemmeent

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const age = "18";
if (age === 18) console.log("you get became a adult");
if (age == 18) console.log("you get became a man");

const fav = Number(prompt("yo yo "));
console.log(fav);
console.log(typeof fav);

if (fav === 21) {
  console.log("cool");
} else if (fav === 7) {
  console.log("coolio");
} else {
  console.log("number aint 7 or 21 dummy");
}
