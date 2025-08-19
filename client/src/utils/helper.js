export const isValidUsername = (username) => {
  if (username.length <= 1) return true;
  if (!username) {
    return false;
  }

  if (username.length <= 1) return true;


  // Check if the username contains only alphanumeric characters
  const alphanumericRegex = /^[a-zA-Z0-9_]+$/;
  if (!alphanumericRegex.test(username)) {
    return false;
  }

  return true;
};
