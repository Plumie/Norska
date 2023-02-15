import AlpineInstance from "alpinejs";
import { NorskaOptions } from "@/types/Norska";
import * as THREE from "three";

export default (Alpine: typeof AlpineInstance, {prefix}: NorskaOptions) => {
  Alpine.magic(`${prefix}three`, () => {
    return THREE;
  })
}