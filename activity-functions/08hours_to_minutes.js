function convertHoursToMinutes(hours, minutes) {
    let min = (hours * 60) + (minutes)
    return hours+":"+minutes + " equal to " + min + " minutes.";
}

const d = new Date()
let hours = d.getHours()
let minutes = d.getMinutes()
console.log(convertHoursToMinutes(hours, minutes));
