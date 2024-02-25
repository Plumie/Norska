import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Loader',
};

export default meta;

export const Loader: StoryObj = {
  render: () => {
    return (`
      <div 
        x-data="{
        }"
      >

        <div x-3.canvas>

          <div
            x-3.three.scene
          >
            <br x-3.color="'#151414'" x-3.attach.background />
          </div>

          <br x-3.ambientLight />

          <br 
            x-3.primitive="const model = await $load($loaders.GLTFLoader, 'duck.glb'); return model.scene;" 
            x-3.$position="[1, 0, 0]"
          />
        </div>
      </div>
    `)
  }
};
