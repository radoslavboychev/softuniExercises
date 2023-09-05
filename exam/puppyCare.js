function puppyCare(input) {
    let food = Number(input[0]);
    let index = 1;
    let str = input[index];
    let sum = 0;

    while (true) {
        sum += Number(input[index]);
        index++;
        if (input[index] == "Adopted") {
            break;
        }

    }

    if (sum <= food * 1000) {
        console.log(`Food is enough! Leftovers: ${(food * 1000) - sum} grams.`)
    } else {
        console.log(`Food is not enough. You need ${sum - (food * 1000)} grams more.`)
    }
}

puppyCare([3,1000,1000,1000,"Adopted"])