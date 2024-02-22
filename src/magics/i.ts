import { NorskaElement } from '@/types/Norska';
import { Alpine } from 'alpinejs';

export default (Alpine: Alpine) => {
  Alpine.magic('i', (el) => (el as NorskaElement)._norska);
};
