import Alpine from "alpinejs";
import Norska from '../dist/bundle';

Alpine.plugin(Norska);
(window as any).Alpine = Alpine;
Alpine.start();