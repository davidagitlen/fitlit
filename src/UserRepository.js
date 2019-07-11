class UserRepository {
  constructor(dataset, id) {
    this.dataset = dataset;
    this.id = id;
  }

  findUser() {
    return this.dataset.find(user => user.id === this.id);
  }

  findAverageStepGoal() {
    return Math.floor(this.dataset.reduce((a, b) =>
      a + b.dailyStepGoal, 0) / this.dataset.length);
  }

}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}