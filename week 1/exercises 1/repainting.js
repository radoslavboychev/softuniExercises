function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let mixer = Number(input[2]);
    let hours = Number(input[3]);

    let extraNylon = 2;
    let extraPaint = (paint * 0.1);

    let bags = 0.4;

    let subTotal = (nylon * 1.5) + (extraNylon * 1.5)
        + (paint * 14.5) + (extraPaint * 14.5)
        + (mixer * 5) + bags;

    let workerCost = (subTotal * 0.3) * hours;
    let total = workerCost + subTotal;
    console.log(total);
}

repainting(["10", "11", "4", "8"]);