import type { Meta, StoryObj } from '@storybook/html';
import { showcase } from './utils';

const meta: Meta = {
  title: 'Reactivity',
};

export default meta;

export const xif: StoryObj = {
  name: 'x-if',
  render: () => {
    return (`
      <div x-data="{show: true}">
        <button 
          style="position: absolute; top: 16px; left: 16px" class="contrast"
          @click="show = !show"
          x-text="show ? 'Hide' : 'Show'"
        ></button>
        <div x-3.canvas>
          ${showcase}
          <template x-if="show">
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
          </template>
        </div>

      </div>
    `)
  }
};

export const xfor: StoryObj = {
  name: 'x-for',
  render: () => {
    return (`
      <div x-data="{count: 0}">
        <button 
          style="position: absolute; top: 16px; left: 16px" class="contrast"
          @click="count++"
        >Add !</button>
        <div x-3.canvas>
          ${showcase}
          <template x-for="i in [...Array(count)]">
            <div
              x-3.mesh
              x-3.$rotation="[$math.randInt(0, 360), $math.randInt(0, 360), $math.randInt(0, 360)]"
              x-3.$position="[$math.randFloat(-2, 2), $math.randFloat(-2, 2), $math.randFloat(-2, 2)]"
              x-3.$scale="[0.2, 0.2, 0.2]"
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
          </template>
        </div>

      </div>
    `)
  }
};
