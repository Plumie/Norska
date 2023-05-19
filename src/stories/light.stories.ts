import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Base',
};

export default meta;

export const Light: StoryObj = {
  render: () => `
    <div style="height: 100vh">
      <div x-3.canvas>
        <br x-3.camera="{position: [0, 0, 3]}" />
				<br x-3.mesh x-3.boxGeometry="[1, 1, 1]" x-3.meshStandardMaterial="{color: 0x1f1f1f}" />
				<br x-3.ambientLight="[0xff0000, 0.5]" />
      </div>
    </div>
	`,
};
