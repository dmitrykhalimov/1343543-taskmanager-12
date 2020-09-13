export const getRandomInteger = (min = 0, max = 1) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomString = (length) => {
  let rnd = ``;
  while (rnd.length < length) {
    rnd += Math.random().toString(36).substring(2);
  }
  return rnd.substring(0, length);
};
