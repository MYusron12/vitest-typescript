import { describe, it, expect } from 'vitest'
import { isPalindrome, wordCount } from '../src/stringUtils'

describe('String Utilities', () => {
  it('checks if a string is a palindrome', () => {
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('12321')).toBe(true);
    expect(isPalindrome('12345')).toBe(false);
  });

  it('counts the number of words in a sentence', () => {
    expect(wordCount('Hello world')).toBe(2);
    expect(wordCount('The quick brown fox jumps over the lazy dog')).toBe(9);
    expect(wordCount('   Leading and trailing spaces    ')).toBe(4);
    expect(wordCount('')).toBe(1);
  });
});
