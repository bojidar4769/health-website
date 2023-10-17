function rakiq(input) {
  const days = Number(input[0]);

  let liters = 0;
  let degrees = 0;

  for (let i = 1; i < input.length - 1; i += 2) {
    const dailyLiters = Number(input[i]);
    liters += dailyLiters;
    degrees += dailyLiters * Number(input[i + 1]);
  }

  console.log(`Liter: ${liters.toFixed(2)}`);

  const averageDegrees = (degrees/ liters).toFixed(2);
  console.log(`Degrees: ${averageDegrees}`);

  if (averageDegrees < 38) {
    console.log(`Not good, you should baking!`);
  } else if (averageDegrees < 42) {
    console.log(`Super!`);
  } else {
    console.log(`Dilution with distilled water!`);
  }
}

const input = ["3", "100", "45", "50", "55", "150", "36"];
const input2 = ["2",
"200",
"43",
"200",
"40"]



rakiq(input);
rakiq(input2)
