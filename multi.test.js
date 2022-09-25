const multi = require('./multi');
// import { multi } from './multi'; not working because file isn't type module

describe('testing multi', () => {
  it('multi 2 and 4', () => {
    expect(multi(2, 4)).toBe(8);
  });
  it('multi 5 and 10', () => {
    expect(multi(5, 10)).toBe(50);
  });

  test.todo('multi 5 x');
});
