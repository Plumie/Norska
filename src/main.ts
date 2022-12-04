import Alpine from "alpinejs";
import * as THREE from "three";

import './core/Canvas';
import './core/Camera';
import './core/Scene';

import './objects/Material';
import './objects/Geometry';
import './objects/Mesh';

Alpine.magic('three', () => {
  return THREE;
})

window.Alpine = Alpine;
Alpine.start();
