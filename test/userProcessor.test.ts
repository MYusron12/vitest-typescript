import { describe, it, expect } from 'vitest'
import { formatUserName, calculateAge, validateUser } from '../src/userProcessor'

describe('User Processor functions', () => {
  it('formats user name correctly', () => {
    const user = { firstName: ' John ', lastName: ' Doe ', birthDate: '1990-01-01' };
    expect(formatUserName(user)).toBe('John Doe');
  });

  it('calculates age correctly', () => {
    const birthDate = '1990-01-01';
    const age = calculateAge(birthDate);
    const currentYear = new Date().getFullYear();
    const expectedAge = currentYear - 1990 - (new Date().getMonth() === 0 && new Date().getDate() < 1 ? 1 : 0);
    expect(age).toBe(expectedAge);
  });

  it('validates user correctly', () => {
    const validUser = { firstName: 'John', lastName: 'Doe', birthDate: '1990-01-01' };
    const invalidUser = { firstName: 'John123', lastName: 'Doe!', birthDate: '1990-01-01' };

    expect(validateUser(validUser)).toBe(true);
    expect(validateUser(invalidUser)).toBe(false);
  });

  it('returns false for invalid birth date format', () => {
    const invalidUser = { firstName: 'John', lastName: 'Doe', birthDate: '01-01-1990' };
    expect(validateUser(invalidUser)).toBe(false);
  });
});
