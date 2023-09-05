function processors(input) {
    let cpuTarget = Number(input[0]);
    let workers = Number(input[1]);
    let workDays = Number(input[2]);

    let totalHours = workers * workDays * 8;
    let cpusMade = Math.floor(totalHours / 3);




    if (cpusMade >= cpuTarget) {

        let profit = (cpusMade - cpuTarget) * 110.10;
        console.log(`Profit: -> ${profit.toFixed(2)} BGN`)


    } else {
        let profit = (cpuTarget - cpusMade) * 110.10;
        console.log(`Losses: -> ${profit.toFixed(2)} BGN`)
    }
}

processors(["150", "7", "18"])