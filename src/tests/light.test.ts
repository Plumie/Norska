import { describe, expect, it, beforeEach } from 'vitest';
import { init, update } from '@/tests/utils';
import { NorskaElement } from '@/types/Norska';
import { Light } from 'three';

describe('light', () => {
  let root: HTMLElement;
  let lightEl: NorskaElement;
  let light: Light;

  beforeEach(async () => {
    root = init(`
      <div id="light" x-3.ambientLight="[0xff0000]"></div>
    `);
    await update();
    lightEl = root.querySelector<NorskaElement>('#light')!;
    light = lightEl._norska.light!;
  });

  it('should create a light', () => {
    expect(light).toBeTruthy();
  });

  it('should add light to the scene', () => {
    const { scene } = window.Norska;
    expect(scene.children[0]).toBe(light);
  });

  it('should set color on light', () => {
    expect(light.color.getHex()).toBe(0xff0000);
  });
});
