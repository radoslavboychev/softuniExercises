function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let extraClothing = Number(input[2]);
    let decor = (budget * 0.1)

    if (extras > 150) {
        extraClothing -= (extraClothing * 0.1);
    }

    let expenses = (extraClothing * extras) + decor;

    if (expenses <= budget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - expenses).toFixed(2)} leva left.`)
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(expenses-budget).toFixed(2)} leva more.`)
    }


}

godzillaVsKong(["20000","120","55.5"]);