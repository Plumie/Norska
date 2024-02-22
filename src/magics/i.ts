import { NorskaElement } from '@/types/Norska';
import { Alpine } from 'alpinejs';

export default (Alpine: Alpine) => {
  Alpine.magic('n', (el) => (el as NorskaElement)._norska);
  Alpine.magic('N', () => window.Norska);
};
