function equipment(input) {
    let basketballFee = Number(input[0]);
    let sneakers = basketballFee - (basketballFee * 0.4);
    let jersey = sneakers - (sneakers * 0.2);
    let ball = jersey * 0.25;
    let accessories = ball * 0.2;

    let total = basketballFee + sneakers + jersey + ball + accessories;
    console.log(total);
}

equipment(["365"])