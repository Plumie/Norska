import type { Meta, StoryObj } from '@storybook/html';
import { showcase } from './utils';

const meta: Meta = {
  title: 'Core/Properties',
};

export default meta;

export const Properties: StoryObj = {
  args: {
    meshAttributes: 'x-3.$rotation="[$math.degToRad(22.5), $math.degToRad(45), 0]"',
    materialAttributes: 'x-3.$color="`red`"',
  },
  argTypes: {
    meshAttributes: {
      control: {
        type: 'text',
      },
    },
    materialAttributes: {
      control: {
        type: 'text',
      },
    },
  },
  render: ({
    meshAttributes,
    geometryAttributes,
    materialAttributes,
  }) => {

    return (`
      <div x-data>
        <div x-3.canvas>
          ${showcase}
          <div
            x-3.mesh
            ${meshAttributes}
          >
            <br 
              x-3.meshStandardMaterial
              x-3.attach.material
              ${materialAttributes}
            />
            <br 
              x-3.boxGeometry 
              x-3.attach.geometry
              ${geometryAttributes}
            />
          </div>
        </div>
      </div>
    `)
  }
};
