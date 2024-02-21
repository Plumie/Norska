import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Geometries',
};

export default meta;

export const Geometries: StoryObj = {
  render: () => `
    <div x-data>
      <div x-3.canvas>
        <br x-3.camera="{position: [0, 0, 5]}" />
        <br
          x-3.mesh
          x-3.boxGeometry="[1, 1, 1]"
          x-3.meshBasicMaterial="{color: 0xff0000}"
        />
      </div>
    </div>
  `,
};
