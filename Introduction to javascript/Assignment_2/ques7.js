
let feedback = "Great product! Fast delivery and amazing sound quality!";

// Convert feedback to lowercase for case-insensitive checking
let lowerFeedback = feedback.toLowerCase();

// Count words
let words = feedback.trim().split(/\s+/);
let wordCount = words.length;

// Check for negative words
let containsBad = lowerFeedback.includes("bad");
let containsPoor = lowerFeedback.includes("poor");

// Display feedback report
console.log("Feedback:", feedback);
console.log("Word Count:", wordCount);

if (!containsBad && !containsPoor) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}
