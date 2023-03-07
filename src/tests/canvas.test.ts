import {describe, it} from 'vitest';
import Alpine from 'alpinejs';
import norska from '@/main';

const JSDOM = require('jsdom').JSDOM;
const Norska = norska({});

const { window } = new JSDOM(`<!DOCTYPE html><html><body></body></html>`, {pretendToBeVisual: true});
global.window = window;
global.document = window.document;

const MyComponent = `
  <div x-data>
    <span x-3.canvas></span>
  </div>
`;

describe('#canvas', () => { 
  it('displays the message', async () => {
    const el = document.createElement('div');
    el.innerHTML = MyComponent;
    Alpine.plugin(Norska);
    Alpine.initTree(el);
  });
})
