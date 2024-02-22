import 'three';
import Alpine from 'alpinejs'
import './preview.css';
import './pico.min.css';
import norska from '../src/main'

Alpine.plugin(norska());
window.Alpine = Alpine
 
Alpine.start()

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
