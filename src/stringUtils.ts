export function isPalindrome(str: string): boolean {
  const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

export function wordCount(sentence: string): number {
  const words = sentence.trim().split(/\s+/);
  return words.length;
}
