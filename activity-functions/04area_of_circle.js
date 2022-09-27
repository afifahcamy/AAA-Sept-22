function areaOfCircle(radius) {
    let A
    A = (Math.PI * (radius * radius)).toFixed(4)
    return "The area of circle is: " + A
}

console.log(areaOfCircle(3));
