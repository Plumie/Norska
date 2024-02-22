import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Geometries',
};

export default meta;

export const Geometries: StoryObj = {
  render: () => `
    <div x-data>
      <div x-3.canvas>
        <div 
          x-3.scene 
        >
          <br
            x-3.color="'cyan'"
            x-3.attach.background
          />
        </div>
        <br x-3.camera x-3.$position="[0, 0, 3]" />
        <br x-3.pointLight="[0xffffff, 10, 100]" />
        <br x-3.hemisphereLight="[0xffffff, 0x151414, 1]" />

        <div
          x-3.mesh
          x-3.$position="[0, 1, 0]"
        >
          <br 
            x-3.meshStandardMaterial="{roughness: 1, metalness: 0}"
            x-3.$color="'red'"
            x-3.$metalness="1"
            x-3.attach.material
          />
          <br 
            x-3.boxGeometry="[1, 1, 1]" 
            x-3.attach.geometry
          />
        </div>
      </div>
    </div>
  `,
};
