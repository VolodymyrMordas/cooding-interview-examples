const getProductOfAllOtherElement = require('../index');

describe(`get product of all other elements`, () => {
  it(`first test`, () => {
    const data = [1, 2, 3, 4, 5];
    const expectedResults = [120, 60, 40, 30, 24];
    expect(getProductOfAllOtherElement(data)).toStrictEqual(expectedResults);
  });
  
  it(`second test`, () => {
    const data = [3, 2, 1];
    const expectedResults = [2, 3, 6];
    expect(getProductOfAllOtherElement(data)).toStrictEqual(expectedResults);
  });
});
