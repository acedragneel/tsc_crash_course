"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CircketCoach_1 = require("./CircketCoach");
const BaseballCoach_1 = require("./BaseballCoach");
let myCircketCoach = new CircketCoach_1.CricketCoach();
let myBaseBallCoach = new BaseballCoach_1.BaseBallCoach();
let theCoaches = [];
theCoaches.push(myCircketCoach);
theCoaches.push(myBaseBallCoach);
for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}
