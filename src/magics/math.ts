import { MathUtils } from "three";
import { Alpine } from 'alpinejs';

export default (Alpine: Alpine) => {
  Alpine.magic('math', () => MathUtils);
};
