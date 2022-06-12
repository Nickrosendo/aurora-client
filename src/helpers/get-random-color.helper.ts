export const getRandomColor = () => {
  const colors = ['orange', 'purple', 'teal', 'red', 'green'];
  const randomIndex = Math.round(Math.random() * colors.length);
  return colors[randomIndex];
};
