function areaOfFigures(input) {
    let figType = input[0];
    let result = 0;

    if (figType == "square") {
        let len = Number(input[1]);

        result = Math.pow(len, 2);

    } else if (figType == "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);

        result = a * b;


    } else if (figType == "circle") {

        let r = Number(input[1]);

        result = Math.pow(r, 2) * Math.PI;

    } else {

        let a = Number(input[1]);
        let ha = Number(input[2]);

        result = (a * ha) / 2;

    }
    console.log(result.toFixed(3));
}


areaOfFigures(["triangle", "4.5","20"]);