const getSmallestWindowToBeSorted = require('../index');

describe(`should test`, () => {
  it(`should be success `, () => {
    const data = [3, 7, 6, 5, 9];
    const expected = [1, 3];
    expect(getSmallestWindowToBeSorted(data)).toEqual(expected);
  });
  
  it(`sorted should be success `, () => {
    const data = [3, 5, 6, 7, 9];
    const expected = [0, 4];
    expect(getSmallestWindowToBeSorted(data)).toEqual(expected);
  });
  
  it(`unsorted should be success `, () => {
    const data = [9, 7, 6, 5, 1];
    const expected = [0, 4];
    expect(getSmallestWindowToBeSorted(data)).toEqual(expected);
  });
  
  it(`same should be success `, () => {
    const data = [0, 9, 9, 7, 5, 6, 5, 10];
    const expected = [1, 6];
    expect(getSmallestWindowToBeSorted(data)).toEqual(expected);
  });
});
