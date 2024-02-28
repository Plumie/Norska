import { ElementWithNorskaAttributes } from "@/types/norska";
import { Intersection, Object3D, Raycaster, Vector2 } from "three";

type NorskaIntersection = Intersection<Object3D & {el: ElementWithNorskaAttributes}>

const eventTypes = [ 'click', 'dblclick', 'pointerdown', 'pointerup', 'contextmenu', 'wheel' ];

const cursorAttributesWhitelist = [
  '@click', '@dblclick', '@pointerdown', '@pointerup', 
  ':click', ':dblclick', ':pointerdown', ':pointerup',
  'x-on:click', 'x-on:dblclick', 'x-on:pointerdown', 'x-on:pointerup'
];

const pointer = new Vector2(0);
const oldPointer = new Vector2(0);
const raycaster = new Raycaster();

const createCustomEvent = (name: string, detail: any) => new CustomEvent(name, { detail });

const getIntersectedObjectEl = (intersections: NorskaIntersection[]) => {
  return intersections[0]?.object.el;
}

const getIntersects = (pointer: Vector2): NorskaIntersection[] => {
  raycaster.setFromCamera(pointer, window._norska.camera);
  return raycaster.intersectObjects(window._norska.scene.children);
};

const sendCustomEvent = (intersects: NorskaIntersection[], event: string, e: Event) => {
  const el = getIntersectedObjectEl(intersects);
  if (!el) return;
  el.dispatchEvent(createCustomEvent(event, e));
}

const hasClickEventLister = (intersect: NorskaIntersection) => {
  if (!intersect) return false;
  return cursorAttributesWhitelist.some((attr) => intersect.object.el.hasAttribute(attr));
}

const onPointerMove = (e: PointerEvent) => {
  pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;

  if (!oldPointer.x && !oldPointer.y) {
    oldPointer.copy(pointer);
    return;
  }

  const intersects = getIntersects(pointer);

  const isWaitingForClick = hasClickEventLister(intersects[0]);

  document.body.style.cursor = isWaitingForClick ? 'pointer' : 'auto';

  if (isWaitingForClick) {
    const oldIntersects = getIntersects(oldPointer);

    const pointerStatus = {
      in: intersects.length && !oldIntersects.length,
      out: oldIntersects.length && !intersects.length,
      over: oldIntersects.length && intersects.length
    }

    if (pointerStatus.in) sendCustomEvent(intersects, 'pointerenter', e);
    if (pointerStatus.out) sendCustomEvent(oldIntersects, 'pointerout', e);
    if (pointerStatus.over) sendCustomEvent(intersects, 'pointerover', e);;
  }

  oldPointer.copy(pointer);
}

export const createEventManager = () => {
  eventTypes.forEach((event) =>
    window.addEventListener(event, (e) => sendCustomEvent(getIntersects(pointer), event, e))
  );
  window.addEventListener('pointermove', onPointerMove);
}

export const deleteEventManager = () => {
  eventTypes.forEach((event) =>
    window.removeEventListener(event, (e) => sendCustomEvent(getIntersects(pointer), event, e))
  );
  window.removeEventListener('pointermove', onPointerMove);
}

