import { Coach } from "./Coach";

export class BaseBallCoach implements Coach{

    getDailyWorkout(): string {
        return ("Practice your Batting on pitch");
    }

}