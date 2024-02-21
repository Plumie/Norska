import { Alpine } from 'alpinejs';
import { Scene, Camera, Renderer, Controls } from 'three'

declare global {
  interface Window {
    Alpine: Alpine
    Norska: {
      scene: Scene,
      camera: Camera,
      renderer: Renderer,
      controls: Controls,
    }
  }
}
