# Installation
*How to install Norska with AlpineJS*

## As a module

Run the following command to install it.

```bash
npm install @plumie/norska alpinejs three.js
```

Import Norska and initialize it as an Alpine plugin.

**Please note that Norska must be registered as a plugin before Alpine is initialized**

```typescript
import Norska from '@plumie/norska'

Alpine.plugin(Norska)
window.Alpine = Alpine
Alpine.start()
```

# Quick Start
*How to use Norska*

## Initializing a canvas

```html
<div x-canvas></div>
```

To create a ThreeJS scene in our document, we need to initialize a Canvas, for this it is possible to use `x-canvas` which will create a basic scene, a camera, and a renderer with each of the default parameters that can be adjusted.

## Populating our scene

There are many ways to fill your scene, but we'll keep it simple for now.

Let's start with a simple cube.

**The hierarchy of the scene is the same as that of the HTML blocks in x-canvas. A good way to do this is to use `<div>` for elements with children, and void elements like `<br/>` for the rest.**

The scene already has a camera but its default position is 0 on all axes, that's why we move it back slightly to avoid it being in the cube.
We declare a mesh with `x-mesh`, then we can attach a geometry and a material with the corresponding directives.

```html
<div x-data>
    <div x-canvas>
        <br x-camera="{position: [0, 0, 5]}" />
        <br
            x-mesh
            x-geometry="['BoxGeometry', [1, 1, 1]]"
            x-material="['MeshBasicMaterial', {color: 0xff0000}]"
        />
    </div>
</div>
```
