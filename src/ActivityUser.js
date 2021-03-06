class ActivityUser {
  constructor(array, user) {
    this.array = array;
    this.strideLength = user.strideLength;
    this.dailyStepGoal = user.dailyStepGoal;
  }

  milesWalked(dateString) {
    let numSteps = this.array.find(day => day.date === dateString).numSteps;
    return parseFloat((numSteps * this.strideLength / 5280).toFixed(1));
  }

  minutesActive(dateString) {
    let minutes = this.array.find(day => day.date === dateString).minutesActive.toLocaleString();
    return parseInt(minutes);
  } 

  stepGoalMet(dateString) {
    return this.array.find(day => day.date === dateString).numSteps >= this.dailyStepGoal
  }

  stairClimbRecord() {
    let nums = this.array.map(day => day.flightsOfStairs)
    return Math.max(...nums)
  }

  lifeTimeTotalMiles() {
    let miles = (this.array.reduce((a, b) => a + b.numSteps, 0) * this.strideLength / 5280).toFixed(1)
    return parseFloat(miles);
  }

  statsLatestDay(dateString, property) {
    let day = this.array.find(day => day.date === dateString);
    return day[property];
  }

  weeklyActivity(startDate, endDate) {
    let week = this.array.filter(day => 
      day.date >= startDate && day.date <= endDate);
    return week;
  }

  increasingTrends(property) {
    let propertyKeysArray = this.array.map((obj, i) => [i, obj[property]]);
    let resultArray = propertyKeysArray.reduce((acc, arr, i, array) => {
      if (i !== 0 && i !== 99  && array[--i][1] < arr[1] && arr[1] < array[i += 2][1]) {
        acc.push(array[i]);
      }
      return acc;
    }, []);
    let dateInfo = resultArray.map(arr => [this.array[arr[0]].date, arr[1]]);
    return dateInfo
  }

}
  
if (typeof module !== 'undefined') {
  module.exports = ActivityUser;
}