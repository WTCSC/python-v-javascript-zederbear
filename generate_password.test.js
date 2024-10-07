const generatePassword = require('./generate_password');

test('generatePassword should return a string', () => {
  const password = generatePassword();
  expect(password).toBeDefined();
  expect(typeof password).toBe('string');
});

test('generatePassword should have a length of 12 characters', () => {
  const password = generatePassword();
  expect(password).toBeDefined();
  expect(password.length).toBe(12);
});

test('generatePassword should have a length of 8 characters', () => {
  const password = generatePassword(8);
  expect(password).toBeDefined();
  expect(password.length).toBe(8);
});

test('generatePassword should contain only alphanumeric letters or underscores', () => {
  const password = generatePassword();
  expect(password).toBeDefined();
  expect(password.length).toBeGreaterThan(0);
  expect(/[a-zA-Z0-9_]/.test(password)).toBe(true);
});