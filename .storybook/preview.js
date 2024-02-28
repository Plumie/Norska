import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three';
import Alpine from 'alpinejs'
import './preview.css';
import './pico.min.css';
import norska from '@/main'
import aoi from '@addons/aoi';

if (!window.Alpine) {
  Alpine.plugin(norska({
    loaders: [GLTFLoader, TextureLoader],
    addons: [aoi]
  }));
  window.Alpine = Alpine
  Alpine.start()
}

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["Mesh", "Reactivity", "Events"],
      },
    }
  },
};

export default preview;
