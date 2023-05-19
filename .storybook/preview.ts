import type { Preview } from '@storybook/html';
import './main';

import norska from '../src/main';
import Alpine from 'alpinejs';

const Norska = norska();
Alpine.plugin(Norska);
(window as any).Alpine = Alpine;
Alpine.start();

const preview: Preview = {
  parameters: {
		layout: 'fullscreen',	
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
