const addUpNumber = (n) => {
  let total = 0;
  for (i = 0; i <= n; i++) {
    total += i;
  }
  return total;
};

console.log(addUpNumber(3));

const addUpNumber2 = (n) => {
  return (n * (n + 1)) / 2;
};

console.log(addUpNumber2(3));
