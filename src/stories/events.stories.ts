import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Events',
};

export default meta;

export const Events: StoryObj = {
  argTypes: {
    events: {
      options: ['click', 'dblclick', 'pointerdown', 'pointerup', 'contextmenu', 'wheel', 'pointerover', 'pointerenter', 'pointerout'],
      control: {
        type: 'select',
      },
    }
  },
  render: ({
    events = "click"
  }) => {
    return (`
      <div x-data>
        <div x-3.canvas>
          <div
            x-3.three.scene
          >
            <br x-3.color="'#151414'" x-3.attach.background />
          </div>

          <br x-3.pointLight="[0xffffff, 5, 100]" x-3.$position="[3, 3, 3]"/>
          <br x-3.hemisphereLight="[0xffffff, 0x151414, 1]" />

          <div
            x-3.mesh
            x-3.$rotation="[$math.degToRad(22.5), $math.degToRad(45), 0]"
            @${events}="() => $i.material.color.setHex(Math.random() * 0xffffff)"
          >
            <br 
              x-3.meshBasicMaterial 
              x-3.$color="'red'"
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
