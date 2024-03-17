import type { Meta, StoryObj } from '@storybook/html';
import { showcase } from './utils';

const meta: Meta = {
  title: 'Core/Loaders',
};

export default meta;

export const Loaders: StoryObj = {
  render: () => {
    return (`
      <div x-data>
        <div x-3.canvas>
          ${showcase}
          <br 
            x-3.primitive="(await $load($loaders.GLTFLoader, 'duck.glb')).scene"
            x-3.$position.y="-0.8"
          />
        </div>
      </div>
    `)
  }
};
