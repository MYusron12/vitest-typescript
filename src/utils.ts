export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

export function isEven(num: number): boolean {
  return num % 2 === 0;
}
