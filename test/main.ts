import Alpine from "alpinejs";
// @ts-ignore
import Norska from '../dist/bundle.js';

const norska = (Norska as any)();

Alpine.plugin(norska);
(window as any).Alpine = Alpine;
Alpine.start();
