import { Loaders } from '@/types/loader.types';
import { Alpine } from 'alpinejs';

export default (Alpine: Alpine, loaders: Loaders) => {
  Alpine.magic('loaders', () => loaders);
};
