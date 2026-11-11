// Array of descriptive tags for the food truck
const tags = ["spicy", "authentic", "late night"];

// Array of item prices in a single order
const prices = [12.50, 3.75, 4.00, 2.50];

// Log both arrays to verify in the console
console.log(tags);
console.log(prices);
// Grab the #tags paragraph and initialize it as empty
const tagText = document.querySelector("#tags");
tagText.textContent = "";

// Loop through the tags array and append each one with a separator
for (let i = 0; i < tags.length; i++) {
  tagText.textContent = tagText.textContent + tags[i] + " · ";
}
// Initialize the running total at 0
let total = 0;

// Loop through each price in the prices array and accumulate the sum
for (let i = 0; i < prices.length; i++) {
  total = total + prices[i];
}

// Grab the #total paragraph and display the final formatted sum
const totalText = document.querySelector("#total");
totalText.textContent = "$" + total;