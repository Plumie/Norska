import { describe, expect, it, beforeEach } from 'vitest';
import { init, update } from '@/tests/utils';
import { NorskaElement, NorskaWindow } from '@/types/Norska';
import { Mesh, MeshStandardMaterial } from 'three';

describe('material', () => {
  let root: HTMLElement;
  let meshEl: NorskaElement;
  let mesh: Mesh;

  beforeEach(async () => {
    root = init(`
      <div id="mesh" x-3.mesh x-3.meshStandardMaterial="{color: 0xff0000}"></div>
    `);
    await update();
    meshEl = root.querySelector<NorskaElement>('#mesh')!;
    mesh = meshEl._norska.mesh!;
  });

  it('should create a material on mesh', () => {
    expect(mesh?.material).toBeTruthy();
  });

  it('should add material to the scene', () => {
    const { scene } = window.Norska;
    expect(
			( scene.children[0] as Mesh).material
		).toBe(mesh.material);
  });

  it('should set color on material', () => {
    expect(
			(mesh.material as MeshStandardMaterial).color.getHex()
		).toBe(0xff0000);
  });

  it('should update color on material', async () => {
    meshEl.setAttribute('x-3.meshStandardMaterial', '{color: 0x00ff00}');
    await update();
    expect(
			(mesh.material as MeshStandardMaterial).color.getHex()
		).toBe(0x00ff00);
  });

  it('should be equal to scene mesh material', () => {
    expect((window as NorskaWindow).Norska.scene.children[0].material).toBe(mesh?.material);
  });
});
