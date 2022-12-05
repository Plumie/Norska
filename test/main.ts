import Alpine from "alpinejs";
import Norska from '../dist/bundle';

Alpine.plugin(Norska as any);
(window as any).Alpine = Alpine;
Alpine.start();