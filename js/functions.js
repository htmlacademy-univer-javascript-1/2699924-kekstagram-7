/* eslint-disable no-unused-vars */

function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

function isPalindrome(str) {
  const normalized = str.replaceAll(' ', '').toLowerCase();

  let reversed = '';
  for (let i = normalized.length - 1; i >= 0; i--) {
    reversed += normalized[i];
  }

  return normalized === reversed;
}

function extractNumbers(str) {
  const string = str.toString();
  let digits = '';

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char >= '0' && char <= '9') {
      digits += char;
    }
  }

  if (digits === '') {
    return NaN;
  }

  return parseInt(digits, 10);
}
