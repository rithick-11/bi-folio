export const isValidUsername = (username) => {
  if (!username) {
    return false;
  }

  // Check if the first character is a number
  if (!isNaN(parseInt(username[0]))) {
    return false;
  }

  // Check if the username contains only alphanumeric characters
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  if (!alphanumericRegex.test(username)) {
    return false;
  }

  return true;
};
