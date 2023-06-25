function supplies(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let cleaner = Number(input[2]);
    let discountRate = Number(input[3]) / 100;

    let subTotal = (pens * 5.8) + (markers * 7.2) + (cleaner * 1.2);
    let total = subTotal - (subTotal * discountRate);

    console.log(total);
}

supplies(["2", "3", "4", "25"]);