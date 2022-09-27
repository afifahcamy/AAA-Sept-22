function convertMinuteToSeconds(minutes) {
    let seconds = minutes * 60
    console.log(`${minutes} minutes equals to ${seconds} seconds.`);
}

const d = new Date()
let minutes = d.getMinutes()
convertMinuteToSeconds(minutes)