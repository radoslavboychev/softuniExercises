function deposit(input) {
    let depositedSum = Number(input[0]);
    let duration = Number(input[1]);
    let interestRate = Number(input[2]);

    let interestAmount = depositedSum * (interestRate / 100);
    let interestPerMonth = interestAmount / 12;


    let result = depositedSum + (duration * interestPerMonth);
    console.log(result);
}


deposit(["200", "3", "5.7"])