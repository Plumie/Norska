import type { Meta, StoryObj } from '@storybook/html';
import * as THREE from 'three';
import { showcase } from '@/stories/utils';

const meta: Meta = {
  title: 'Mesh',
};

export default meta;

export const Mesh: StoryObj = {
  args: {
    meshAttributes: 'x-3.$rotation="[$math.degToRad(22.5), $math.degToRad(45), 0]"',
    geometry: "BoxGeometry",
    geometryAttributes: '',
    material: "MeshStandardMaterial",
    materialAttributes: '',
  },
  argTypes: {
    meshAttributes: {
      control: {
        type: 'text',
      },
    },
    geometry: {
      options: Object.keys(THREE).filter((key) => key.endsWith('Geometry')),
      control: {
        type: 'select',
      },
    },
    geometryAttributes: {
      control: {
        type: 'text',
      },
    },
    material: {
      options: Object.keys(THREE).filter((key) => key.endsWith('Material')),
      control: {
        type: 'select',
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
    geometry = "BoxGeometry",
    geometryAttributes = '',
    material = "meshStandardMaterial",
    materialAttributes = '',
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
              x-3.${material} 
              x-3.attach.material
              ${materialAttributes}
            />
            <br 
              x-3.${geometry} 
              x-3.attach.geometry
              ${geometryAttributes}
            />
          </div>
        </div>
      </div>
    `)
  }
};
