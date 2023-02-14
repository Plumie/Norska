import Alpine from "alpinejs";
// @ts-ignore
import Norska from '../dist/bundle.js';

Alpine.plugin(Norska as any);
(window as any).Alpine = Alpine;
Alpine.start();
