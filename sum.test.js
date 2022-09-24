const sum = require('./sum');

// test('adds two numbers 1 2', () => {
//   expect(sum(1, 2)).toBe(3);
//   //   expect(sum(5, 8)).toBe(13);
// });

// test('adds two numbers 5 8', () => {
//   //   expect(sum(1, 2)).toBe(3);
//   expect(sum(5, 8)).toEqual(13);
// });

describe('testing sum', () => {
  it('sum 1 and 2', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('sum 5 and 8', () => {
    expect(sum(5, 8)).toBe(13);
  });
});
