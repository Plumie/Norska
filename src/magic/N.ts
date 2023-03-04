import { NorskaElement } from '@/types/Norska';

export default (Alpine: Alpine) => {
  Alpine.magic('n', (el: NorskaElement) => {
    return el._norska;
  });
};
