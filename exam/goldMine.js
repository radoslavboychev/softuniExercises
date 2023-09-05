function solve(input) {
    let index = 0;
    let locations = Number(input[index++]);
    for (let l = 0; l < locations; l++) {
        let expectedAvrgYield = Number(input[index++]);
        let days = Number(input[index++]);
        let yield = 0;
        for (let d = 0; d < days; d++) {
            let currentYield = Number(input[index++]);
            yield += currentYield;
        }
        let avrgPerLocation = (yield / days);
        let diff = Math.abs(avrgPerLocation - expectedAvrgYield);
        if (avrgPerLocation < expectedAvrgYield) {
            console.log(`You need ${diff.toFixed(2)} gold.`);
        } else {
            console.log(`Good job! Average gold per day: ${avrgPerLocation.toFixed(2)}.`);
        }
    }
}

solve(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"])


// function goldMine(input) {
//     let locations = Number(input[0]);
//     let expected = Number(input[1]);
//     let days = Number(input[2]);

//     let sum = 0;

//     for (let i = 3; i < (input.length); i++) {
//         let current = input[i];

//         sum += current;
//     }

//     let avg = sum / days;

//     console.log(`avg: ${avg.toFixed(2)}`)

//     if (avg >= expected) {
//         console.log("better")
//     } else {
//         console.log(`worse, need ${(expected - avg).toFixed(2)}`);
//     }

// }