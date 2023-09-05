function computerRoom(input) {
    let month = String(input[0]);
    let hours = Number(input[1]);
    let numPeople = Number(input[2]);
    let timeOfDay = String(input[3]);

    let pricePerHour;

    switch (month) {
        case "march":
        case "april":
        case "may":
            if (timeOfDay == "day") {
                pricePerHour = 10.5;
            } else {
                pricePerHour = 8.4;
            }
            break;
        case "june":
        case "july":
        case "august":
            if (timeOfDay == "day") {
                pricePerHour = 12.6;
            } else {
                pricePerHour = 10.2;
            }
            break;
        default:
            break;
    }

    if (numPeople >= 4) {
        pricePerHour -= (pricePerHour * 0.1);
    }

    if (hours >= 5) {
        pricePerHour -= (pricePerHour * 0.5);
    }

    let res = (pricePerHour*numPeople)*hours;

    console.log(`Price per person for one hour: ${pricePerHour.toFixed(2)}`);
    console.log(`Total cost of the visit: ${res.toFixed(2)}`);
}

computerRoom(["july", "5", "5", "night"]);