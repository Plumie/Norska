import { showcase } from '@/stories/utils';
import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Addons',
};

export default meta;

export const Addons: StoryObj = {
  render: ({
  }) => {
    return (`
      <div x-data>
        <div x-3.canvas>
          ${showcase}
          <br x-3.aoi.orbitcontrols />
          <div
            x-3.mesh
            x-3.$rotation="[$math.degToRad(22.5), $math.degToRad(45), 0]"
          >
            <br 
              x-3.meshStandardMaterial 
              x-3.attach.material
            />
            <br 
              x-3.boxGeometry
              x-3.attach.geometry
            />
          </div>
        </div>
      </div>
    `)
  }
};
