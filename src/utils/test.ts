export const testAuthFn = () => {
  return {
    token: "8jd8h238yd23",
  };
};

export const stop = (ms: number) =>
  new Promise((res, rej) => setTimeout(res, ms));
