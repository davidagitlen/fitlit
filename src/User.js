class User {
  constructor(obj) {
    this.id = obj.id
    this.name = obj.name;
    this.address = obj.address;
    this.email = obj.email;
    this.strideLength = obj.strideLength;
    this.dailyStepGoal = obj.dailyStepGoal;
    this.friends = obj.friends;
  }

  giveName() {
    return this.name.split(' ')[0];
  }

  giveFullName() {
    return this.name;
  }

  giveAddress() {
    return this.address;
  }

  giveEmail() {
    return this.email;
  }

  giveStrideLength() {
    return this.strideLength;
  }

  giveDailyStepGoal() {
    return this.dailyStepGoal;
  }



}

if (typeof module !== 'undefined') {
  module.exports = User;
}