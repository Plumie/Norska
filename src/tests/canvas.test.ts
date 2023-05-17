import {beforeEach, describe, expect, it} from 'vitest';
import {init} from '@/tests/utils';

describe('Canvas Component', () => {
  let root: HTMLElement;

  beforeEach(async () => {  
    root = init();
  });

  it('should render a canvas element', () => {
    const canvas = root.querySelector('canvas');
    expect(canvas).toBeTruthy();
  })

  it('should initialize a camera', () => {
    expect((window as any).Norska.camera).toBeTruthy();
  })

  it('should initialize a scene', () => {
    expect((window as any).Norska.scene).toBeTruthy();
  });
})
