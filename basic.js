function demo(input) {
    let moneyNeeded = Number(input[0]);
    let budget = Number(input[1]);
    let totalDays = 0;
    let consecutiveSpendDays = 0;

    let i = 2;

    while (consecutiveSpendDays < 5) {
        let action = input[i];
        i++;
        let amount = Number(input[i]);
        i++;

        if (action === 'spend') {
            consecutiveSpendDays++;
            budget -= amount;
            if (budget < 0) {
                budget = 0;
            }
        } else if (action === 'save') {
            consecutiveSpendDays = 0;
            budget += amount;
        }

        totalDays++;
    }

    if (budget >= moneyNeeded) {
        console.log(`You saved the money for ${totalDays} days.`);
    } else {
        console.log(`You can't save the money.`);
        console.log(totalDays);
    }
}
demo(["2000",
"1000",
"spend",
"1200",
"save",
"2000"]);
