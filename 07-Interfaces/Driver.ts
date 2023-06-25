import { CricketCoach } from "./CircketCoach";
import { BaseBallCoach } from "./BaseballCoach";
import { Coach } from "./Coach";


let myCircketCoach = new CricketCoach();
let myBaseBallCoach = new BaseBallCoach();

let theCoaches: Coach[] = [];

theCoaches.push(myCircketCoach);
theCoaches.push(myBaseBallCoach);


for(let tempCoach of theCoaches){
    console.log(tempCoach.getDailyWorkout());
}
