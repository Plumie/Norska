import Alpine from 'alpinejs';
import {vi} from 'vitest';
import norska from '@/main';
import { NorskaWindow } from '@/types/Norska';

const init = (template?: string) => {
  vi.mock('three', async () => {
    const THREE =  await vi.importActual('three') as any;

    return {
      ...THREE,
      WebGLRenderer: vi.fn().mockReturnValue({
        domElement: document.createElement('canvas'),
        setSize: vi.fn(),
        render: vi.fn(),
      })
    }
  });

  const root = document.createElement('div');
  root.setAttribute('x-data', '{}');
  root.innerHTML = `
    <div style="width: 500px; height: 500px;">
      <div x-3.canvas>
        ${template}
      </div>
    </div>
  `;
  document.body.appendChild(root);

  (window as NorskaWindow).Alpine = Alpine;

  const Norska = norska();
  Alpine.plugin(Norska);
  Alpine.start();

  return root;
}

const update = () => new Promise((resolve) => requestAnimationFrame(resolve));

export {
  init,
  update
}
