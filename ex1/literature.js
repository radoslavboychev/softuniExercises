function literature(input) {
    let numPages = Number(input[0]);
    let pagePerHour = Number(input[1]);
    let numDays = Number(input[2]);

    let totalTime = numPages / pagePerHour;
    let result = totalTime / numDays;
    console.log(result);

}
