import { NorskaOptions } from '@/types/Norska';

export default (Alpine: Alpine, { prefix }: NorskaOptions) => {
  Alpine.magic(`${prefix}frame`, () => {
    return (callback: () => void) => {
      const e = () => {
        callback();
        requestAnimationFrame(e);
      };
      e();
    };
  });
};
