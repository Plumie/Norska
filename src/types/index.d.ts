import { Alpine } from 'alpinejs';
import { Scene, Camera, Renderer, Controls } from 'three'

declare global {
  interface Window {
    Alpine: Alpine
    _norska: {
      scene: Scene
      camera: Camera
      renderer: Renderer
    }
  }
}
