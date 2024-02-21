import { defineConfig } from 'vite';
import path from 'path';

const blacklist = [
  'three',
  'alpine',
  'three/examples/jsm/controls/OrbitControls',
  'three/examples/jsm/controls/DragControls',
  'three/examples/jsm/controls/FirstPersonControls',
  'three/examples/jsm/controls/FlyControls',
  'three/examples/jsm/controls/PointerLockControls',
  'three/examples/jsm/controls/TrackballControls',
  'three/examples/jsm/controls/TransformControls',
  'three/examples/jsm/loaders/OBJLoader', 
  'three/examples/jsm/loaders/GLTFLoader',
  'three/examples/jsm/loaders/MMDLoader',
  'three/examples/jsm/loaders/DRACOLoader',
]

export default defineConfig({
  build: {
     rollupOptions: {
      external: [
        ...blacklist
      ]
    },
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'Norska',
      formats: ['es'],
      fileName: 'norska'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
});
