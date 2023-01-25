import {factorial} from "./factorial";
describe('Given factorial function' , ()=> {
  describe('We have a positive integer', () => {
    test('Then factorial of 0 should be 1', () => {
      const r = factorial(0)
      expect(r).toBe(1)
    });
    test('Then factorial of 1 should be 1', () => {
      const r = factorial(1)
      expect(r).toBe(1)
    });
    test('Then factorial of 2 should be 2', () => {
      const r = factorial(2)
      expect(r).toBe(2)
    });
    test('Then factorial of 3 should be 6', () => {
      const r = factorial(3)
      expect(r).toBe(6)
    });
    test('Then factorial of 170 should be mucho', () => {
      const r = factorial(170)
      expect(r).not.toBe(Infinity)
    });
    test('Then factorial of 171 should be an error', () => {

      expect( () => factorial(171) ).toThrow();
    });
  });
});
