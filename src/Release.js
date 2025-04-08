function getRandomYear(min = 2018, max = 2025) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default getRandomYear;
    