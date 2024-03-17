import type { Meta, StoryObj } from '@storybook/html';
import * as THREE from 'three';
import { showcase } from './utils';

const meta: Meta = {
  title: 'Core/Instance',
};

export default meta;

export const Instance: StoryObj = {
  args: {
    geometry: "BoxGeometry",
    material: "MeshStandardMaterial",
  },
  argTypes: {
    geometry: {
      options: Object.keys(THREE).filter((key) => key.endsWith('Geometry')),
      control: {
        type: 'select',
      },
    },
    material: {
      options: Object.keys(THREE).filter((key) => key.endsWith('Material')),
      control: {
        type: 'select',
      },
    },
  },
  render: ({
    geometry,
    material,
  }) => {

    return (`
      <div x-data>
        <div x-3.canvas>
          ${showcase}
          <div
            x-3.mesh
            x-3.$rotation="[$math.degToRad(22.5), $math.degToRad(45), 0]"
          >
            <br 
              x-3.${material} 
              x-3.attach.material
            />
            <br 
              x-3.${geometry} 
              x-3.attach.geometry
            />
          </div>
        </div>
      </div>
    `)
  }
};
