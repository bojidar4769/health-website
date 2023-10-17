function deliveryExpress(input) {
  const weight = Number(input[0]);
  const deliveryType = input[1];
  const kilemeters = Number(input[2]);

  let price = 0;

  if (deliveryType === "standard") {
    if (weight <= 1) {
      price = kilemeters * 0.03;
    } else if (weight <= 10) {
      price = kilemeters * 0.05;
    } else if (weight <= 40) {
      price = kilemeters * 0.1;
    } else if (weight <= 90) {
      price = kilemeters * 0.15;
    } else if (weight <= 150) {
      price = kilemeters * 0.2;
    }
  } else if (deliveryType === "express") {
    if (weight <= 1) {
      price = kilemeters * 0.03 + ( kilemeters * ( weight * ( 0.03 * 0.8) ) )
    } else if (weight <= 10) {
      price =kilemeters * 0.05 + ( kilemeters * (weight * ( 0.05 * 0.4) ) )
    } else if (weight <= 40) {
      price = kilemeters * 0.1 + ( kilemeters * (weight * ( 0.1 * 0.05) ) )
    } else if (weight <= 90) {
      price = kilemeters * 0.15 + (kilemeters * ( weight * ( 0.15 * 0.02 ) ) )
    } else if (weight <= 150) {
      price = kilemeters * 0.2 + ( kilemeters * (weight * ( 0.2 * 0.01 ) ) )
    }
  }

  console.log(
    `The delivery of your shipment with weight of ${weight.toFixed(
      3
    )} kg. would cost ${price.toFixed(2)} lv.`
  );
}

const input = ["1.5", "standard", "100"];

const input2 = ["87", "express", "130"];

const input3 = ["20", "standard", "349"];

deliveryExpress(input);
deliveryExpress(input2);
deliveryExpress(input3);
