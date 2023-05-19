import {beforeEach, describe, expect, it} from 'vitest';
import {init} from '@/tests/utils';
import { NorskaWindow } from '@/types/Norska';

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
    expect((window as NorskaWindow).Norska.camera).toBeTruthy();
  })

  it('should initialize a scene', () => {
    expect((window as NorskaWindow).Norska.scene).toBeTruthy();
  });
})
