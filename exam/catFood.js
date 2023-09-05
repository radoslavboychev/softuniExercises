function catFood(input) {
    let numCats = Number(input[0]);

    let group1 = 0, group2 = 0, group3 = 0;

    for (let i = 1; i < input[numCats]; i++) {
        const grams = Number(input[i]);
        if (grams >= 100 && grams < 200) {
            group1++;
        } else if (grams >= 200 && grams < 300) {
            group2++;
        } else if (grams >= 300 && grams < 400) {
            group3++;
        }
    }

    let totalGrams = 0;
    for (let i = 1; i < input.length; i++) {
        const grams = Number(input[i]);
        totalGrams += grams
    }

    // for (let i = 1; i < input[numCats]; i++) {
    //     const grams = Number(input[i]);
    //     switch (grams) {
    //         case grams >= 100 && grams < 200:
    //             group1++
    //             break;
    //         case grams >= 200 && grams < 300:
    //             group2++
    //             break;
    //         case grams >= 300 && grams < 400:
    //             break;
    //         default:
    //             break;
    //     }
    // }


    console.log(`Group 1: ${group1} cats.`);
    console.log(`Group 2: ${group2} cats.`);
    console.log(`Group 3: ${group3} cats.`);

    let total = (totalGrams / 1000) * 12.45;

    console.log(`Price for food per day: ${total.toFixed(2)} lv.`)
}

catFood([7,100,200,342,300,234,123,212])