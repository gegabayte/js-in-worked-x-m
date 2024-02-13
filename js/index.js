import { validate } from "./function.js";

const timeFormat = (seconds) => {
    let hours = Math.trunc(seconds / 3600);
    let minutes = Math.trunc((seconds - hours * 3600) / 60)
    let s = Math.trunc(seconds % 60);

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (s < 10) {
        s = '0' + s;
    }

    let result = hours + ':' + minutes + ':' + s;

    return result;
}

const countDown = (time) => {
    if (validate(time)) {
        let seconds = time * 60;
        let t = setInterval(() => {
            let fomated = timeFormat(seconds)
            document.body.innerHTML = ''
            document.write(fomated);
            seconds--;
            if (seconds == 0) {
                clearInterval(t)
            }
        }, 1000)
    }
}

let t = +prompt(`Vaqtni kiriting (Daqiqalarda)`);
countDown(t)