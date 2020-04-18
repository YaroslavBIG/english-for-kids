function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function randomArray(numMax, numMin = 0) {
  const randomArr = [];

  while (randomArr.length < numMax) {
    const num = randomInteger(numMin, numMax - 1);
    if (!randomArr.includes(num)) randomArr.push(num);
  }

  return randomArr;
}

export { randomInteger, randomArray };
