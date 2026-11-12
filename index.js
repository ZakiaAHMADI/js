const studentName = "Zainab";
const studentAge = 19;

let mathematicsMarks = 85;
let englishMarks = 90;
let computerMarks = 95;
let totalMarks = mathematicsMarks + englishMarks + computerMarks;

let averageMarks = totalMarks / 3;
let highestTotalMarks = 300;
let remainingMarks = highestTotalMarks - totalMarks;

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);
console.log("Highest Total Marks:", highestTotalMarks);
console.log("Remaining Marks:", remainingMarks);
console.log("Older than 18:", studentAge > 18);

console.log("Math greater than 80:", mathematicsMarks > 80);

console.log("English equal to 100:", englishMarks === 100);

console.log("Computer different from 50:", computerMarks !== 50);

console.log("Average greater than or equal to 50:", averageMarks >= 50);
if (averageMarks >= 90) {
    console.log("Grade: A");
}
else if (averageMarks >= 80) {
    console.log("Grade: B");
}
else if (averageMarks >= 70) {
    console.log("Grade: C");
}
else if (averageMarks >= 60) {
    console.log("Grade: D");
}
else if (averageMarks >= 50) {
    console.log("Grade: E");
}
else {
    console.log("Grade: F");
}