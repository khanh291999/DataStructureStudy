
const logMessage = message => {
    console.log(message)
}

class Calories {
    constructor(maxCalorie){
        this.maxCalorie = maxCalorie;
        this.currentCalorie = 0;
    }

    countCalories(calorieCount) {
        this.currentCalorie += calorieCount;
        if(this.maxCalorie < this.currentCalorie){
            logMessage("Max")
        }
    }
}

const calories = new Calories(2000);
calories.countCalories(500);
calories.countCalories(1000);
calories.countCalories(700);