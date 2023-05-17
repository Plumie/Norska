import { NorskaElement } from '@/types/Norska';
import { Alpine } from '@/types/Alpine';

export default (Alpine: Alpine) => {
  Alpine.magic('n', (el: NorskaElement) => {
    return el._norska;
  });

  Alpine.magic('N', () => {
    return window.Norska;
  });
};
