import { ElementWithNorskaAttributes } from '@/types/norska';
import { Alpine } from 'alpinejs';

export default (Alpine: Alpine) => {
  Alpine.magic('i', (el: ElementWithNorskaAttributes) => el._norska);
};
