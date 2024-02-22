import type { Meta, StoryObj } from '@storybook/html';

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
          <div 
            x-3.scene 
          >
            <br
              x-3.color="'#151414'"
              x-3.attach.background
            />
          </div>

          <br x-3.camera x-3.$position="[0, 0, 4]" />
          <br x-3.pointLight="[0xffffff, 5, 100]" x-3.$position="[3, 3, 3]"/>
          <br x-3.hemisphereLight="[0xffffff, 0x151414, 1]" />

          <template x-if="show">
            <div
              x-3.mesh
              x-3.$rotation="[$math.degToRad(22.5), $math.degToRad(45), 0]"
            >
              <br 
                x-3.meshStandardMaterial 
                x-3.$color="'white'"
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
          <div 
            x-3.scene 
          >
            <br
              x-3.color="'#151414'"
              x-3.attach.background
            />
          </div>

          <br x-3.camera x-3.$position="[0, 0, 4]" />
          <br x-3.pointLight="[0xffffff, 5, 100]" x-3.$position="[3, 3, 3]"/>
          <br x-3.hemisphereLight="[0xffffff, 0x151414, 1]" />

          <template x-for="i in [...Array(count)]">
            <div
              x-3.mesh
              x-3.$rotation="[$math.randInt(0, 360), $math.randInt(0, 360), $math.randInt(0, 360)]"
              x-3.$position="[$math.randFloat(-2, 2), $math.randFloat(-2, 2), $math.randFloat(-2, 2)]"
              x-3.$scale="[0.2, 0.2, 0.2]"
            >
              <br 
                x-3.meshStandardMaterial 
                x-3.$color="'white'"
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
