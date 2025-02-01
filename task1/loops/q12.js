// Define the arrays of meal options
let proteins = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetables = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

// Function to generate a meal
function generateMeals(numMeals) {
    let meals = [];

    for (let i = 0; i < numMeals; i++) {
        // Randomly pick one option from each category
        let protein = proteins[Math.floor(Math.random() * proteins.length)];
        let grain = grains[Math.floor(Math.random() * grains.length)];
        let vegetable = vegetables[Math.floor(Math.random() * vegetables.length)];
        let beverage = beverages[Math.floor(Math.random() * beverages.length)];
        let dessert = desserts[Math.floor(Math.random() * desserts.length)];

        // Create a meal object with all selected options
        let meal = {
            protein: protein,
            grain: grain,
            vegetable: vegetable,
            beverage: beverage,
            dessert: dessert
        };

        // Ensure no duplicates (if meal already exists, skip)
        if (!meals.some(existingMeal => JSON.stringify(existingMeal) === JSON.stringify(meal))) {
            meals.push(meal);
        } else {
            i--;  // If duplicate meal, retry generating a new one
        }
    }

    return meals;
}

// Example usage: Generate 3 unique meals
let numMeals =parseInt(prompt("enter the num of meals:"));  // You can change this number for more or fewer meals
let meals = generateMeals(numMeals);

// Print the generated meals
console.log("Generated Meals:");
meals.forEach((meal, index) => {
    console.log(`Meal ${index + 1}:`);
    console.log(`Protein: ${meal.protein}`);
    console.log(`Grain: ${meal.grain}`);
    console.log(`Vegetable: ${meal.vegetable}`);
    console.log(`Beverage: ${meal.beverage}`);
    console.log(`Dessert: ${meal.dessert}`);
    console.log('--------------------------');
});
