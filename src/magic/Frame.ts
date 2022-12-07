import AlpineInstance from "alpinejs";

export default (Alpine: typeof AlpineInstance) => {
  Alpine.magic('frame', () => {
    return (callback: () => void) => {
      const e = () => {
        callback();
        requestAnimationFrame(e);
      };
      e();
    }
  })
}