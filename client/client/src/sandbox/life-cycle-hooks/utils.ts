export const getTime = () => {
  const date = new Date();
  const time = date.toLocaleTimeString();
  const millisecond = date.getMilliseconds();
  return `${time}.${millisecond}`;
};

export const colorLog = (text: string, color: string = "white") => {
  return null;
};
