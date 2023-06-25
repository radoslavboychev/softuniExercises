function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]);

    let volume = length * width * height;
    let inLitres = volume * 0.001;
    let litresNeeded = inLitres * (1 - 0.17);

    console.log(litresNeeded);
}

fishTank(["85", "75", "47", "17"]);