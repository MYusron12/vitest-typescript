import { describe, it, expect } from 'vitest'
import { add, contains } from '../src/basicUtils'

describe('Basic Utility functions', () => {
  it('adds two numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, -1)).toBe(-2);
    expect(add(0, 0)).toBe(0);
    expect(add(100, 200)).toBe(300);
  });

  it('checks if a string contains a substring', () => {
    expect(contains('hello world', 'world')).toBe(true);
    expect(contains('hello world', 'planet')).toBe(false);
    expect(contains('typescript', 'script')).toBe(true);
    expect(contains('vitest', 'test')).toBe(true);
    expect(contains('vitest', 'jest')).toBe(false);
  });
})
