const showcase = `
  <div
    x-3.three.scene
  >
    <br x-3.color="'#151414'" x-3.attach.background />
  </div>
  <br
    x-3.three.camera
    x-3.$position.z="3"
  />
  <br x-3.pointLight="[0xffffff, 5, 100]" x-3.$position="[3, 3, 3]"/>
  <br x-3.hemisphereLight="[0xffffff, 0x151414, 1]" />
`

export default showcase;
