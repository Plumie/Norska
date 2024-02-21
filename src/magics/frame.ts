import { Alpine } from "alpinejs";

export default (Alpine: Alpine) => {
  Alpine.magic('frame', () => {
    return (callback: () => void) => {
      const e = () => {
        callback();
        requestAnimationFrame(e);
      };
      e();
    };
  });
};
