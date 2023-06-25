function fruitShop(input) {
    let product = input[0];
    let day = input[1];
    let amount = input[2];
    let total = 0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (product) {
                case "banana":
                    total = 2.5 * amount;
                    break;
                case "apple":
                    total = 1.2 * amount;
                    break;
                case "orange":
                    total = 0.85 * amount;
                    break;
                case "grapefruit":
                    total = 1.45 * amount;
                    break;
                case "kiwi":
                    total = 2.7 * amount;
                    break;
                case "pineapple":
                    total = 5.50 * amount;
                    break;
                case "grapes":
                    total = 3.85 * amount;
                    break;
                default:
                    console.log("error");
                    break;
            }
            break;
        case "Saturday":
        case "Sunday":
            switch (product) {
                case "banana":
                    total = 2.7 * amount;
                    break;
                case "apple":
                    total = 1.25 * amount;
                    break;
                case "orange":
                    total = 0.90 * amount;
                    break;
                case "grapefruit":
                    total = 1.60 * amount;
                    break;
                case "kiwi":
                    total = 3 * amount;
                    break;
                case "pineapple":
                    total = 5.60 * amount;
                    break;
                case "grapes":
                    total = 4.20 * amount;
                    break;
                default:
                    console.log("error");
                    break;
            }
            break;

        default:
            console.log("error")
            break;

    }

    if (total != 0) {
        console.log(total.toFixed(2))
    }


}

fruitShop(["tomato", "Monday", 3])
