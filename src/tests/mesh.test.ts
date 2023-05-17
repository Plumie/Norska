import { beforeEach, describe, expect, it } from "vitest";
import { init, update } from "@/tests/utils";
import { NorskaElement } from "@/types/Norska";
import { Mesh } from "three";

describe("mesh", () => {
  let root: HTMLElement;
  let mesh: Mesh;

  beforeEach(async () => {
    root = init(`
      <div id="mesh" x-3.mesh></div>
    `);
    await update();
    const meshEl = root.querySelector<NorskaElement>("#mesh")!;
    mesh = meshEl._norska.mesh!;
  });

  it("should create a mesh element", () => {
    expect(mesh).toBeTruthy();
  });

  it("should add mesh element to the scene", () => {
    const { scene } = window.Norska;
    expect(scene.children).toContain(mesh);
  });

  it("should update scene based on x-if state", async () => {
    root = init(`
      <template x-if="true">
        <div id="mesh" x-3.mesh></div>
      </template>
    `);

    const { scene } = window.Norska;
    expect(scene.children.length).toBe(1);

    root.querySelector("template")?.setAttribute("x-if", "false");
    await update();
    expect(scene.children.length).toBe(0);
  });

  it("should update scene based on x-for state", async () => {
    root = init(`
      <template x-for="i in [...Array(5)]">
        <div id="mesh" x-3.mesh></div>
      </template>
    `);
    const { scene } = window.Norska;
    expect(scene.children.length).toBe(5);
  });
});
