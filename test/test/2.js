function braceletStand (input) {
    
    const pocketMoney = Number(input[0]) * 5;
    const salesIncome = Number(input[1]) * 5;
    const costs = Number(input[2]);
    const giftPrice = Number(input[3]);

    const totalIncome = pocketMoney + salesIncome - costs;

    if (totalIncome >= giftPrice) {
        console.log(`Profit: ${(totalIncome).toFixed(2)} BGN, the gift has been purchased.`)
    } else {
        console.log(`Insufficient money: ${(giftPrice - totalIncome).toFixed(2)} BGN.`)
    }
}

const input = ["5.12",
"32.05",
"15",
"150"]

const input2 = ["2.10",
"17.50",
"20.20",
"148.50"]

const input3 = ["15.20",
"200.00",
"7.30",
"1500.12"]



braceletStand(input)
braceletStand(input2)
braceletStand(input3)