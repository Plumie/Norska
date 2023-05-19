import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Base',
};

export default meta;

export const Material: StoryObj = {
  render: () => `
    <div style="height: 100vh">
      <div x-3.canvas>
        <br x-3.camera="{position: [0, 0, 3]}" />
				<br x-3.mesh x-3.boxGeometry="[1, 1, 1]" x-3.meshBasicMaterial="{color: 0xff0000}"/>
      </div>
    </div>
	`,
};
