# FitLit Starter Kit

This is the first partner project of Mod Two at Turing School Of Software and Design located in Denver, Colorado. 
Timeline for the project to be completed is one week.  The details of this project are outlined in [this project spec](http://frontend.turing.io/projects/fitlit.html).

This is a collaboration from:
* Lacy Rudd  [github account](https://github.com/dawnlunacy) <br>
* David A. Gitlen [github account](https://github.com/davidagitlen)<br>

[Github Repository Link](https://github.com/dawnlunacy/fitlit-starter-kit/)
## Summary

* The learning goals and objectives for this project are as follows: 
* Follow the specification below to make a working application
* Implement ES6 classes that communicate to each other as needed
* Write modular, reusable code that follows SRP (Single Responsibility Principle)
* Implement a robust testing suite using TDD
* Use object and array prototype methods to perform data manipulation
* Display information on the page while maintaining ability to test class properties and methods
* Create a data dashboard that is easy to use and displays information in a clear way

* In this project, you will be given data from an activity tracker for many users over many days. Think of something like Fitbit. Fitbit devices log data and present it on a dashboard for their users. Your goal is to present a useful dashboard for a user to view and see their latest activity data, goals, and milestones.

## Testing

 * TDD implemented with a combination of the `mocha` and `chai` framework/assertion library.

## Data Model

* This project is the first project through the Turing Front End Engineering Program to implement larger-scale data files. They are structured in four separate sets:

**Users**

```
[
  {
    "id": [number],
    "name": [string],
    "address": [string],
    "email": [string],
    "strideLength": [number - feet],
    "dailyStepGoal": [number - steps],
    "friends": [array - one-way connection to other user(s)]
  },
  ...more user data
]
```

**Activity**

```
[
  {
    "userID": [number],
    "date": [string YYYY/MM/DD],
    "numSteps": [number - steps],
    "minutesActive": [number - minutes],
    "flightsOfStairs": [number - flights]
  },
  ...more activity data
]
```

**Hydration**

```
[
  {
    "userID": [number],
    "date": [string YYYY/MM/DD],
    "numOunces": [number - ounces]
  },
  ...more hydration data
]
```

**Sleep**

```
[
  {
    "userID": [number],
    "date": [string YYYY/MM/DD],
    "hoursSlept": [number - hours],
    "sleepQuality": [number - unitless]
  },
  ...more sleep data
]
```

## Packages

* FitLit uses [Packery](https://packery.metafizzy.co/) to display data in a masonry layout. 
* [Draggabilly](https://draggabilly.desandro.com/) was used to enable draggable widgets. 
* Graph/chart displays created with [charts.js](https://www.chartjs.org/).

## Demo

   ![FitLit Demo](https://github.com/dawnlunacy/fitlit-starter-kit/blob/master/images/demo/FitLit-demo.gif)

    
    



