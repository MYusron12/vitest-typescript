type User = {
  firstName: string;
  lastName: string;
  birthDate: string; // Format: YYYY-MM-DD
};

export function formatUserName(user: User): string {
  return `${user.firstName.trim()} ${user.lastName.trim()}`;
}

export function calculateAge(birthDate: string): number {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

export function validateUser(user: User): boolean {
  const namePattern = /^[A-Za-z\s]+$/;
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  return (
    namePattern.test(user.firstName) &&
    namePattern.test(user.lastName) &&
    datePattern.test(user.birthDate)
  );
}
