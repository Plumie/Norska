import { Alpine } from "alpinejs";

// A simple wrapper around requestAnimationFrame
export default (Alpine: Alpine) => {
  Alpine.magic('frame', () => 
    (callback: () => void) => {
      const e = () => {
        callback();
        requestAnimationFrame(e);
      };
      e();
    })
};
