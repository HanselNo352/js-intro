// Noah Hansel
// 10 MAR 2026
// JS Report Card

// Declare variables
const firstName = "Noah";
const lastName = "Hansel";
const gradeLevel = 12;
const course = "Biology";

const quiz1 = 97;
const quiz2 = 88;
const quiz3 = 100;
const quiz4 = 92;
const quiz5 = 82;

// Write formula to do the math
const totalPoints = quiz1 + quiz2 + quiz3 + quiz4 + quiz5;

const numQuizzes = 5;

const averageScore = totalPoints / numQuizzes;

// Show student info and the student's scores and average

// Template string --> fill-in-the-blank sentence

console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);
console.log(`Grade Level: ${gradeLevel}`);

console.log(`Course: ${course}`);

console.log(`Quiz 1 Score: ${quiz1}`);
console.log(`Quiz 2 Score: ${quiz2}`);
console.log(`Quiz 3 Score: ${quiz3}`);
console.log(`Quiz 4 Score: ${quiz4}`);
console.log(`Quiz 5 Score: ${quiz5}`)

console.log(`Average Quiz Score: ${averageScore}`);
