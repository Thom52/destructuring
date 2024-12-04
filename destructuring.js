/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays

let ages = [30, 26, 27];

let [john, mary, joe] = ages;

// let john = ages[0];
// let mary = ages[1];   //Basic unpacking of a JavaScript array.
// let joe = ages[2];

console.log(john, mary, joe);

// Destructuring objects

let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};

let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets

let languages = ["english", "french", "german", "spanish"];

let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [maryNative, , , marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "spanish",
}

let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax

let fruits = ["apple", "orange", "banana", "peach", "cherry"];

let [favourite, secondFavourite, ...others] = fruits;
console.log(favourite);
console.log(secondFavourite);
console.log(others);

let favouriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak",
};

let { brian, anna, ...rest } = favouriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);