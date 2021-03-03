//EXERCÍCIO 01
const multi = (number, letter) => {
  let newArray = [];
  for (let i = 0; i < number; i++) {
    newArray.push(letter);
  }
  return newArray;
};

//EXERCÍCIO 02
const reverse = (array) => {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
};

// EXERCÍCIO 03
const toClean = (array) => {
  array.filter((item) => {
    if (item != null && item != 0 && item != false) {
      return item;
    }
  });
};

//EXERCÍCIO 04
const convert = (data) => {
  let obj = {};
  data.map((item) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i] !== undefined) {
        obj[item[0]] = item[1];
      }
    }
  });
  return obj;
};

//EXERCÍCIO 05
const exclude = (array, term1, term2) => {
  const resultArray = [];
  array.map((item) => {
    if (item != term1 && item != term2) {
      resultArray.push(item);
    }
  });
  return resultArray;
};

//EXERCÍCIO 06
const removeDuplicate = (array) => {
  return [...new Set(array)];
};

//EXERCÍCIO 07
const check = (array1, array2) => {
  if (array1.toString() === array2.toString()) {
    return true;
  } else {
    return false;
  }
};

//EXERCÍCIO 08
const singleArray = (array) => {
  const newArray = array.join(",").split(",");
  const resultArray = [];
  for (let i = 0; i < newArray.length; i++) {
    resultArray.push(parseInt(newArray[i]));
  }
  return resultArray;
};

//EXERCÍCIO 09
const divide = (array, divider) => {
  const resultArray = [];
  let dividend = array.toString().split(",", divider);
  const count = array.length;
  if (count % divider === 0) {
    for (let i = 0; i < count / divider; i++) {
      resultArray.push(dividend);
      array.splice(0, divider);
      dividend = array.toString().split(",", divider);
    }
  } else {
    while (count % divider === 0) {
      count++;
    }
    for (let i = 0; i < count / divider; i++) {
      resultArray.push(dividend);
      array.splice(0, divider);
      dividend = array.toString().split(",", divider);
    }
  }
  return resultArray;
};

//EXECÍCIO 10
const search = (array1, array2) => {
  const resultArray = [];
  for (let i = 0; i < array1.length; i++) {
    let itens = array2
      .filter((item) => {
        return item === array1[i];
      })
      .toString();
    if (itens != "" && resultArray.includes(parseInt(itens)) === false) {
      resultArray.push(parseInt(itens));
    }
  }
  return resultArray;
};
