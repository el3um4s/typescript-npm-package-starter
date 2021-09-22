import { myCustomFunction, ciao } from '../index';
test('ciao', () => {
  expect(ciao('Mondo')).toBe('Ciao Mondo');
});

test("myCustomFunction", () => {
  expect(myCustomFunction('Mario')).toBe('Hello Mario');
});