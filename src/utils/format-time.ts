export const formatTime = (time: number) => {
  const seconds = Math.floor(time / 1000);
  const milliseconds = time % 1000;

  const formattedSeconds = String(seconds).padStart(2, '0');
  const formattedMilliseconds = String(milliseconds)
    .padStart(3, '0')
    .slice(0, 2);

  return `${formattedSeconds}.${formattedMilliseconds}`;
};
