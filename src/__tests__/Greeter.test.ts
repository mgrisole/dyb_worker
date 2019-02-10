import { Greeter } from '../index';
import * as jest from 'ts-jest';

test('My Greeter', () => {
  expect(Greeter('Carl')).toBe('Hello Carl');
});
