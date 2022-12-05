import AlpineInstance from "alpinejs";
import * as THREE from "three";

export default (Alpine: typeof AlpineInstance) => {
  Alpine.magic('three', () => {
    return THREE;
  })
}