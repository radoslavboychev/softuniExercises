function projectCreation(input) {
    let architect = input[0];
    let projectNums = Number(input[1]);
    console.log(`The architect ${architect} will need ${(3 * projectNums)} hours to complete ${projectNums} project/s.`)
}

projectCreation(["Gorgo", "4"])