import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Base',
};

export default meta;

export const Geometry: StoryObj = {
  render: () => `
    <div style="height: 100vh">
      <div x-3.canvas>
        <br x-3.camera="{position: [0, 0, 3]}" />
				<br x-3.mesh x-3.boxGeometry="[1, 1, 1]" />
      </div>
    </div>
	`,
};
