import Alpine from "alpinejs";
// @ts-ignore
import norska from '../dist/bundle.js';

const Norska = (norska as any)();

Alpine.plugin(Norska);
(window as any).Alpine = Alpine;
Alpine.start();
