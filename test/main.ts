import Alpine from "alpinejs";
// @ts-ignore
import Norska from '@plumie/norska';

Alpine.plugin(Norska as any);
(window as any).Alpine = Alpine;
Alpine.start();
