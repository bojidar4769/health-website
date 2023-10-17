function hairSalon(input) {
  const goal = Number(input[0]);

  let i = 1;
  let total = 0;

  while (true) {
    const usluga = input[i];
    i++;
    let price = 0;
    if (usluga === "haircut") {
      if (input[i] === "mens") {
        price = 15;
      } else if (input[i] === "ladies") {
        price = 20;
      } else if (input[i] === "kids") {
        price = 10;
      }
      i++;
    } else if (usluga === "color") {
      if (input[i] === "touch up") {
        price = 20;
      } else if (input[i] === "full color") {
        price = 30;
      }
      i++;
    }

    total += price;

    if (total >= goal) break;
    if (input[i] === "closed") break;
    if (input.length === i) break;
  }

  if (total >= goal) {
    console.log(`You have reached your target for the day!`);
  } else {
    console.log(`Target not reached! You need ${goal - total}lv. more.`);
  }
  console.log(`Earned money: ${total}lv.`);
}

const input = [
  "300",
  "haircut",
  "ladies",
  "haircut",
  "kids",
  "color",
  "touch up",
  "closed",
];

const input2 = ["50", "color", "full color", "haircut", "ladies"];

hairSalon(input);
hairSalon(input2);
