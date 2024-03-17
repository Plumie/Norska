import showcase from '@/stories/utils/showcase';
import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Aoi/OrbitControls',
  args: {
    orbitControlsProps: {
      enableDamping: true,
      dampingFactor: 0.25,
      autoRotate: true,
      autoRotateSpeed: 0.5,
      enableZoom: true,
      enablePan: true,
      enableRotate: true
    }
  },
  argTypes: {
    orbitControlsProps: {
      control: {
        type: 'object',
      },
    }
  }
};

export default meta;

export const OrbitControls: StoryObj = {
  render: ({
    orbitControlsProps
  }) => {
    return (`
      <div x-data>
        <div x-3.canvas>
          ${showcase}
          <br x-3.aoi.orbitcontrols='${JSON.stringify(orbitControlsProps)}' />
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
