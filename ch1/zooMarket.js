function zoo(input) {
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);

    let out = 2.5*dogFood + 4*catFood

    console.log(`${out} lv.`)
}

zoo(["5","4"]);