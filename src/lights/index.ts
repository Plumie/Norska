import ambientLight from './ambientLight';
import directionalLight from './directionalLight';
import hemisphereLight from './hemisphereLight';
import pointLight from './pointLight';
import spotLight from './spotLight';
import rectAreaLight from './rectAreaLight';

import Light from './Light';

const lights: Record<string, any> = {
  ambientLight,
  directionalLight,
  hemisphereLight,
  pointLight,
  spotLight,
  rectAreaLight
};

export default lights;

export { Light };
