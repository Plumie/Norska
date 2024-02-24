import type { Meta, StoryObj } from '@storybook/html';
import * as THREE from 'three';

const meta: Meta = {
  title: 'Mesh',
};

export default meta;

export const Mesh: StoryObj = {
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
    }
  },
  render: ({
    geometry = "BoxGeometry",
    material = "meshStandardMaterial",
  }) => {

    return (`
      <div x-data>
        <div x-3.canvas>

          <div
            x-3.three.scene
          >
            <br x-3.color="'#151414'" x-3.attach.background />
          </div>
          <br 
            x-3.three.camera
            x-3.$position="[0, 0, 5]"
          />

          <br x-3.pointLight="[0xffffff, 5, 100]" x-3.$position="[3, 3, 3]"/>
          <br x-3.hemisphereLight="[0xffffff, 0x151414, 1]" />
          <div
            x-3.mesh
            x-3.$rotation="[$math.degToRad(22.5), $math.degToRad(45), 0]"
          >
            <br 
              x-3.${material} 
              x-3.$color="'red'"
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
