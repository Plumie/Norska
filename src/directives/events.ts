import { Raycaster, Vector2 } from "three";

export function createEventListeners(camera: any, scene: any) {

  const pointer = new Vector2(0);
  const oldPointer = new Vector2(0);
  const raycaster = new Raycaster();

  const onPointerMove = (event: PointerEvent) => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Fix first frame issue
    if (!oldPointer.x && !oldPointer.y) {
      oldPointer.copy(pointer);
      return;
    }

    const oldIntersects = getIntersects(oldPointer);
    const intersects = getIntersects(pointer);

    if (intersects.length) {
      intersects[0].object.el.dispatchEvent(new CustomEvent('pointerover', { detail: event }));
    }

    if (!oldIntersects.length && intersects.length) {
      intersects[0].object.el.dispatchEvent(new CustomEvent('pointerenter', { detail: event }));
    }

    if (oldIntersects.length && !intersects.length) {
      oldIntersects[0].object.el.dispatchEvent(new CustomEvent('pointerout', { detail: event }));
    }

    document.body.style.cursor = intersects.length ? 'pointer' : 'auto';

    oldPointer.copy(pointer);
  }

  const getIntersects: any = (pointer: any) => {
    raycaster.setFromCamera(pointer, camera);
    return raycaster.intersectObjects(scene.children);
  };

  [
    'click',
    'dblclick',
    'pointerdown',
    'pointerup',
    'contextmenu',
    'wheel',
  ].forEach((event) =>
    window.addEventListener(event, (e) => {
      const intersects = getIntersects(pointer);
      if (!intersects.length) return;
      intersects[0].object.el.dispatchEvent(
        new CustomEvent(event, { detail: e })
      );
    })
  );

  window.addEventListener('pointermove', onPointerMove);
}
