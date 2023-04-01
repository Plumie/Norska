import { describe, expect, it, beforeEach } from 'vitest';
import { init, update } from '@/tests/utils';
import { NorskaElement } from '@/types/Norska';

describe('BoxGeometry', () => {
  let meshEl: NorskaElement;
  let mesh: any;

  beforeEach(async () => {
    const root = init(`
      <div id="mesh" x-3.mesh x-3.boxGeometry="[1, 1, 1]"></div>
    `);
    await update();
    meshEl = root.querySelector<NorskaElement>('#mesh')!;
    mesh = meshEl._norska.mesh;
  });

  it('should create a geometry on mesh', () => {
    expect(mesh.geometry).toBeTruthy();
    expect(mesh.geometry.parameters).toContain({ width: 1, height: 1, depth: 1 });
  });

  it('should update geometry when attribute is changed', async () => {
    meshEl.setAttribute('x-3.boxGeometry', '[2, 2, 2]');
    await update();
    expect(mesh.geometry.parameters).toContain({ width: 2, height: 2, depth: 2 });
  });

  it('should be equal to scene mesh geometry', () => {
    expect((window as any).Norska.scene.children[0].geometry).toBe(mesh.geometry);
  });
});
