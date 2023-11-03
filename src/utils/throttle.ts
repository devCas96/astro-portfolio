export const throttle = (callbackFn: Function, limit: number) => {
  let wait = false;
  return () => {
    if (!wait) {
      callbackFn.call(callbackFn);
      wait = true;
      setTimeout(() => {
        wait = false;
      }, limit);
    }
  }
}
