# Norska ⛰️

_Three.js plugin for Alpine_

Check out the full documentation here: https://docs.plume.moe/norska

# Installation

_How to install Norska with AlpineJS_

Run the following command to install Norska and its dependencies.

```bash
npm install @norska/core alpinejs three
```

Import Norska and initialize it as an Alpine plugin.

**Please note that Norska must be registered as a plugin before Alpine is initialized**

```typescript
import norska from '@norska/core';

// Initialize Norksa
const Norska = norska({
  /* options... */
});

// Register Norska as an Alpine plugin
Alpine.plugin(Norska);
window.Alpine = Alpine;
Alpine.start();
```

# Quick Start

_How to use Norska_

## Initializing a canvas

```html
<div x-3.canvas></div>
```

To create a ThreeJS scene in our document, we need to initialize a Canvas, for this it is possible to use `x-3.canvas` which will create a basic scene, a camera, and a renderer with each of the default parameters that can be adjusted.

By default, the canvas element size is determined by the directive's parent's size.

## Populating our scene

There are many ways to fill your scene, but we'll keep it simple for now.

Let's start with a cube.

**The hierarchy of the scene is the same as that of the HTML blocks in the canvas. A good way to do this is to use `<div>` for elements with children, and void elements like `<br/>` for the rest.**

We declare a mesh with `x-3.mesh`, then we can attach a geometry and a material with the corresponding directives.

```html
<div x-data>
    <div x-3.canvas>
        <div x-3.mesh>
            <br         
                x-3.boxGeometry
                x-3.attach.geometry
            />
            <br         
                x-3.meshBasicMaterial="{color: 0xff0000}"
                x-3.attach.material
            />
        </div>
    </div>
</div>
```
