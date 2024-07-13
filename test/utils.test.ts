import { describe, it, expect } from 'vitest'
import { reverseString, isEven } from '../src/utils'

describe('Utility functions', () => {
  it('reverses a string correctly', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('')).toBe('');
    expect(reverseString('a')).toBe('a');
  });

  it('checks if a number is even', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(3)).toBe(false);
    expect(isEven(0)).toBe(true);
    expect(isEven(-4)).toBe(true);
    expect(isEven(-5)).toBe(false);
  });
})
