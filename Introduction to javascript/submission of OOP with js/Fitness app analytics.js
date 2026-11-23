let workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
    constructor(data) {
        if (data.length === 0) {
            throw new Error("Workout dataset is empty!");
        }

        this.data = data;
    }

    // Get active users using filter()
    getActiveUsers() {
        return this.data.filter(user => user.steps > 7000);
    }

    // Calculate average calories using reduce()
    getAverageCalories() {
        let total = this.data.reduce((sum, user) => {
            return sum + user.calories;
        }, 0);

        return total / this.data.length;
    }

    // Get user summary using map()
    getUserSummary() {
        return this.data.map(user => {
            return user.user + " walked " + user.steps +
                " steps and burned " + user.calories + " calories.";
        });
    }
}

// Creating object
try {
    let analytics = new FitnessAnalytics(workoutData);

    console.log("Active Users:");
    console.log(analytics.getActiveUsers());

    console.log("Average Calories:");
    console.log(analytics.getAverageCalories());

    console.log("User Summary:");
    console.log(analytics.getUserSummary());

} catch (error) {
    console.log("Error:", error.message);
}