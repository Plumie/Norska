import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Loader',
};

export default meta;

export const Loader: StoryObj = {
  render: () => {
    return (`
      <div x-data="{visible: true}">
        <button @click="visible = !visible">Toggle</button>
        <div x-3.canvas>

          <div
            x-3.three.scene
          >
            <br x-3.color="'#151414'" x-3.attach.background />
          </div>
          <br 
            x-3.three.camera
            x-3.$position="[0, 0, 5]"
          />

          <br x-3.pointLight="[0xffffff, 5, 100]" x-3.$position="[3, 3, 3]"/>
          <br x-3.hemisphereLight="[0xffffff, 0x151414, 1]" />
          <br 
            x-3.primitive="$load($loaders.GLTFLoader, 'Damaged.glb', (model) => model.scene)" 
            x-3.$visible="visible"
          />
        </div>
      </div>
    `)
  }
};
