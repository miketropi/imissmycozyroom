export const getRandomizer = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const cutString = (s, n) => {
  var cut = s.indexOf(' ', n);
  if(cut == -1) return s;
  return s.substring(0, cut)
}