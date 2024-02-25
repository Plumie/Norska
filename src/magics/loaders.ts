import { Alpine } from 'alpinejs';

export default (Alpine: Alpine, loaders: Record<string, unknown>) => {
  Alpine.magic('loaders', () => loaders);
};
