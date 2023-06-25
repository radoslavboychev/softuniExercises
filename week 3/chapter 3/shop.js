function shop(input) {
    let product = input[0];
    let city = input[1];
    let amount = Number(input[2]);
    let output = 0;

    switch (city) {
        case "Sofia":
            if (product == "coffee") {
                output = amount * 0.5;
            } else if (product == "water") {
                output = amount * 0.8;
            } else if (product == "beer") {
                output = amount * 1.2;
            } else if (product == "sweets") {
                output = amount * 1.45;

            } else if (product == "peanuts") {
                output = amount * 1.6;
            } else {
                console.log("Error!")
            }
            break;

        case "Plovdiv":
            if (product == "coffee") {
                output = amount * 0.4;
            } else if (product == "water") {
                output = amount * 0.7;
            } else if (product == "beer") {
                output = amount * 1.15;
            } else if (product == "sweets") {
                output = amount * 1.3;

            } else if (product == "peanuts") {
                output = amount * 1.5;
            } else {
                console.log("Error!")
            }
            break;

        case "Varna":
            if (product == "coffee") {
                output = amount * 0.45;
            } else if (product == "water") {
                output = amount * 0.7;
            } else if (product == "beer") {
                output = amount * 1.1;
            } else if (product == "sweets") {
                output = amount * 1.35;

            } else if (product == "peanuts") {
                output = amount * 1.55;
            } else {
                console.log("Error!");
            }
            break;

        default:
            console.log("Error!");
            break;
    }

    console.log(output)
}

shop(["coffee", "Varna", "2"])