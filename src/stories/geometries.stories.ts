import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Geometries',
};

export default meta;

export const Geometries: StoryObj = {
  render: () => `
    <div x-data>
      <div x-3.canvas>
        <br x-3.scene="{background: 0x151414}" />
        <br x-3.camera x-3.position="[0, 0, '3']" />
        <br x-3.pointLight="[0xffffff, 10, 100]" x-3.position="[3, 3, 3]" />
        <br x-3.hemisphereLight="[0xffffff, 0x151414, 1]" />
        <br
          x-3.mesh
          x-3.boxGeometry="[1, 1, 1]"
          x-3.meshStandardMaterial="{color: 0xffffff, roughness: 1, metalness: 0}"
        />
      </div>
    </div>
  `,
};
