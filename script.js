
const tags = ["spicy", "authentic", "late night"];


const prices = [12.50, 3.75, 4.00, 2.50];


console.log(tags);
console.log(prices);

const tagText = document.querySelector("#tags");
tagText.textContent = "";


for (let i = 0; i < tags.length; i++) {
  tagText.textContent = tagText.textContent + tags[i] + " · ";
}
// Initialize the running total at 0
let total = 0;


for (let i = 0; i < prices.length; i++) {
  total = total + prices[i];
}

const totalText = document.querySelector("#total");
totalText.textContent = "$" + total;


