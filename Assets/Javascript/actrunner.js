import { ActivityList } from "./components/Activitys.js";

ActivityList()


import { BusPlan } from "./components/buses.js"


let curMin
let nextMin
busUpdate()
function busUpdate() {
    getCurMin()
    getNextMin()
}
function getCurMin() {
    curMin = new Date().getMinutes()
    setTimeout(() => {
        getCurMin()
        if (curMin === nextMin) {
            BusPlan()
            busUpdate()
        } else {
            return
        }
    }, 500);
};
function getNextMin() {
        nextMin = curMinNext()
};
function curMinNext () {
    if (curMin === 59) {
        return 0
    } else {
        return curMin + 1
    }
};

BusPlan()