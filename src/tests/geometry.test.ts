import { describe, expect, it, beforeEach } from 'vitest';
import { init, update } from '@/tests/utils';
import { NorskaElement, NorskaWindow } from '@/types/Norska';
import { Mesh } from 'three';

describe('BoxGeometry', () => {
  let meshEl: NorskaElement;
  let mesh: Mesh & {geometry: any} | undefined;

  beforeEach(async () => {
    const root = init(`
      <div id="mesh" x-3.mesh x-3.boxGeometry="[1, 1, 1]"></div>
    `);
    await update();
    meshEl = root.querySelector<NorskaElement>('#mesh')!;
    mesh = meshEl._norska.mesh;
  });

  it('should create a geometry on mesh', () => {
    expect(mesh?.geometry).toBeTruthy();
    expect(mesh?.geometry.parameters).toContain({ width: 1, height: 1, depth: 1 });
  });

  it('should update geometry when attribute is changed', async () => {
    meshEl.setAttribute('x-3.boxGeometry', '[2, 2, 2]');
    await update();
    expect(mesh?.geometry.parameters).toContain({ width: 2, height: 2, depth: 2 });
  });

  it('should be equal to scene mesh geometry', () => {
			const sceneMesh = (window as NorskaWindow).Norska.scene.children[0];
			if (sceneMesh instanceof Mesh) {
				expect(sceneMesh.geometry).toBe(mesh?.geometry);
			}
  });
});
