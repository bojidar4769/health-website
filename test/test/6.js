function generatePINCodes(input) {
  const upperLimit1 = Number(input[0]);
  const upperLimit2 = Number(input[1]);
  const upperLimit3 = Number(input[2]);

  for (let i = 2; i <= upperLimit1; i += 2) {
    for (let n = 2; n <= upperLimit2 ; n++) {
      for (let m = 2; m <= upperLimit3; m += 2) {
        if (n === 2 || n === 3 || n === 5 || n === 7) {
          console.log(`${i} ${n} ${m}`);
        }
      }
    }
  }
}

// const input = [3, 5, 5];
const input2 = [8, 2, 8];
// const input3 = [3, 5, 5];

// generatePINCodes(input);
generatePINCodes(input2)
// generatePINCodes(input3)
