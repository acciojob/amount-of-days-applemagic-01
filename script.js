function daysOfAYear(year) {
    if (year < 1 || year > 9999) {
        return "Invalid year";
    }

    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        return 366;
    }

    return 365;
}

let year = Number(prompt("Enter a year"));
alert(daysOfAYear(year));