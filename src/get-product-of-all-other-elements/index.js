module.exports = getProductOfAllOtherElement = data => {
  const product = data.reduce((accumulator, value) => accumulator * value);
  
  return data.map(val => product / val);
};

// complexity 2*N
