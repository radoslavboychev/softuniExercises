function delivery(input) {
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let veggieMenus = Number(input[2]);

    let orderPrice = (chickenMenus * 10.35) + (fishMenus * 12.40) + (veggieMenus * 8.15);
    let desert = orderPrice * 0.2;
    let total = (orderPrice + desert) + 2.5;

    console.log(total);
}

delivery(["2", "4", "3"]);