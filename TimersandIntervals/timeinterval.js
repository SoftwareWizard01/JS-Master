setTimeout(function () {
  console.log("Aur bhai a gaya swad");
}, 13000); // here the time is in milliseconds 1000ms = 1sec, setTimeout specific time ke baad ek hi baar run hota hai

setInterval(function () {
  console.log("Kaisi lagi");
}, 14000); //setInterval hamesha given tme mai baar baar function ko chalata hai again and again

let sto = setTimeout(function () {
  console.log("I'm good");
}, 7000);

clearTimeout(sto); //now sto won't run because we clear that Timeout

let siv = setInterval(function () {
  console.log("I'm the  best");
}, 8000);

clearInterval(siv); // now siv won't run again and again because we clear that Interval

//creating countdown
count = 10;

let inter = setInterval(function () {
  if (count > 0) {
    console.log(count);
    count--;
  } else clearInterval(inter);
}, 1000);

//Hide the text after 3 seconds
let div = document.querySelector("div");

setTimeout(function () {
  div.style.display = "none";
}, 3000);
