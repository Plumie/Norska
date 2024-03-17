import type { Meta, StoryObj } from '@storybook/html';
import { showcase } from './utils';
const meta: Meta = {
  title: 'Core/Events',
};

export default meta;

export const Events: StoryObj = {
  args: {
    events: 'click',
  },
  argTypes: {
    events: {
      options: ['click', 'dblclick', 'pointerdown', 'pointerup', 'contextmenu', 'wheel', 'pointerover', 'pointerenter', 'pointerout'],
      control: {
        type: 'select',
      },
    }
  },
  render: ({
    events
  }) => {
    return (`
      <div x-data>
        <div x-3.canvas>
          ${showcase}
          <div
            x-3.mesh
            x-3.$rotation="[$math.degToRad(22.5), $math.degToRad(45), 0]"
            @${events}="() => $i.material.color.setHex(Math.random() * 0xffffff)"
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
