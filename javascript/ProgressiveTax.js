const num = 100000000;
const rate = [
  [1, 50000000, 5],
  [50000000, 250000000, 15],
  [250000000, 500000000, 25],
  [500000000, Infinity, 30],
];

// Count tax
function countTax(amount, rates) {
  let result_tax = 0,
    stop = 0;

  function getTax() {
    let brackets = [];

    for (let i = 0; i < rates.length; i++) {
      const [min, max, percent] = rates[i];
      if (amount > max) brackets.push([max - min + 1, percent]);
      if (amount >= min && amount <= max)
        brackets.push([amount - min + 1, percent]);
    }

    return brackets;
  }

  function calculateTax() {
    let brackets = getTax();

    if (stop < brackets.length - 1) {
      stop++;
      const [total, percent] = brackets[stop];
      result_tax = result_tax + total * (percent / 100);
      result_tax = Math.round(result_tax);
      calculateTax();
    }
  }

  calculateTax();

  console.log("Result Counts: ", result_tax);
}

// Main
function main() {
  if (num >= 0) countTax(num, rate);
  else console.log("The number is invalid!");
}

main();
