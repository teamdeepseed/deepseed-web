export const isAcceptableKey = (key) => {
  const regex = /^[a-zA-Z0-9\b]+$/;
  const ignoreKeyCodes = [16,17,18,91];
  return ignoreKeyCodes.indexOf(key) > -1 ? true : regex.test(String.fromCharCode(key));
};
