const getSmallestWindowToBeSorted = require('../index');

describe(`should test`, () => {
  it(`should be success `, () => {
    const data = [3, 7, 6, 5, 9];
    const expected = [1, 3];
    expect(getSmallestWindowToBeSorted(data)).toEqual(expected);
  });
});
