let name = "KyeJuana";
const states = "50";
let result = 5 + 4;//Sum of 5 and 4
function sayHello() {
    alert('Hello World!');
}
sayHello();
function checkAge(yourName, age) {
    if (age < 21) {
        alert("Sorry " + yourName + ", you aren't old enough to view this page!");
    }
}
checkAge("Tristan", 5);
checkAge("Shea", 31);
checkAge("Chris", 39);
checkAge("Rosemary", 39);

let vegies = ["Cabbage", "Ladyfinger", "I don't like vegetables"];
for (i = 0; i < vegies.length; i++) {
    console.log(vegies[i]);
}

let pet = {
    name: "IDLA",
    breed:"Yorkie"
}
console.log(pet.name);
console.log(pet.breed);

let array = [
    { yourName: "Maya", age: 17 },
    { yourName: "Richard", age: 39 },
    { yourName: "Rod", age: 47 },
    { yourName: "Leah", age: 8 }
];
for (i = 0; i < array.length; i++) {
    checkAge(array[i].yourName, array[i].age);
}

function getLength(any) {
    return any.length;
}
let variable = getLength("Hello World");
if (variable % 2 == 0) {
    console.log("The world is yours!");
}
else {
    console.log("The world is what you make it!");
}