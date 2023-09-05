    function toyShop(input) {
        let tripPrice = Number(input[0]);
        let puzzles = Number(input[1]);
        let dolls = Number(input[2]);
        let teddyBears = Number(input[3]);
        let minions = Number(input[4]);
        let trucks = Number(input[5]);

        let numItems = puzzles + dolls + teddyBears + minions + trucks;

        let subTotal = (puzzles * 2.6) + (dolls * 3) + (teddyBears * 4.1)
            + (minions * 8.2) + (trucks * 2);

        if (numItems >= 50) {
            let discount = subTotal * 0.25
            subTotal -= discount;
        }

        let netEarnings = subTotal - (subTotal * 0.1);

        if (netEarnings > tripPrice) {
            console.log(`Yes! ${(netEarnings - tripPrice).toFixed(2)} lv left.`)
        } else if (tripPrice > netEarnings) {
            console.log(`Not enough money! ${(tripPrice - netEarnings).toFixed(2)} lv needed.`)
        } else {
            console.log("error");
        }
    }

toyShop(["0", "0", "0", "0", "0", "0"])