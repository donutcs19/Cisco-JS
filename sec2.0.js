// QT 1
// the price of a single rose (8) and the number of roses you have (70)
// the price of a single lily (10) and the number of lilies you have (50)
// the price of a single tulip (2) and the number of tulips you have (120)
// ans price,number of flower,total in flower,total all
console.log("Question 1")
let rose_price = 8;
let lily_price = 10;
let tulip_price = 2;

let num_rose = 70;
let num_lily = 50;
let num_tulip = 120;

let total_rose = rose_price * num_rose;
let total_lily = lily_price * num_lily;
let total_tulip = tulip_price * num_tulip;

let total_all = total_rose + total_lily + total_tulip;

console.log("Rose - unit price: "+ rose_price +", quantity: "+ num_rose +", value: "+ total_rose);
console.log("Lily - unit price: "+ lily_price +", quantity: "+ num_lily +", value: "+ total_lily);
console.log("Tulip - unit price: "+ tulip_price +", quantity: "+ num_tulip + ", value: "+ total_tulip);
console.log("Total: " + total_all);

// QT2
// decrease the number of roses by 20 and lilies by 30
console.log("");
console.log("Question 2")

const rosePrice = 8;
const lilyPrice = 10;
const tulipPrice = 2;

const roseNum = 70;
const lilyNum = 50;
const tulipNmu = 120;

const roseDecrease = 70 - 20;
const lilyDecrease = 50 - 30;

const roseTotal = rosePrice * roseDecrease;
const lilyTotal = lilyPrice * lilyDecrease;
const tulipTotal = tulipPrice * tulipNmu;

const total_All = roseTotal + lilyTotal + tulipTotal;

console.log("Rose - unit price: "+ rosePrice + ", quantity: "+ roseNum + ", value: "+ roseTotal);
console.log("Lily - unit price: "+ lilyPrice + ", quantity: "+ lilyNum + ", value: "+ lilyTotal);
console.log("Tulip - unit price: "+ tulipPrice + ", quantity: "+ tulipNmu + ", value: "+tulipTotal);
console.log("Total All: " + total_All);

//LAB
console.log("")
console.log("LAB");
const Name_1 = "Maxwell Wright";
const Name_2 = "Raja Villarreal";
const Name_3 = "Helen Richards";

const Phone_1 = "(0191) 719 6495";
const Phone_2 = "0866 398 2895";
const Phone_3 = "0800 1111";

const Email_1 = "Curabitur.egestas.nunc@nonummyac.co.uk";
const Email_2 = "posuere.vulputate@sed.com";
const Email_3 = "libero@convallis.edu";

console.log("Form: " + Name_1 + "/" + Phone_1 + "/" + Email_1);
console.log("Form: " + Name_2 + "/" + Phone_2 + "/" + Email_2);
console.log("Form: " + Name_3 + "/" + Phone_3 + "/" + Email_3);
