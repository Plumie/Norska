import * as f from "three";
import { Scene as _, PerspectiveCamera as y, WebGLRenderer as N, Color as p, Texture as v, Mesh as w, Light as E } from "three";
import { OBJLoader as b } from "three/examples/jsm/loaders/OBJLoader";
import { GLTFLoader as C } from "three/examples/jsm/loaders/GLTFLoader";
import { MMDLoader as L } from "three/examples/jsm/loaders/MMDLoader";
import { DRACOLoader as O } from "three/examples/jsm/loaders/DRACOLoader";
import { OrbitControls as j } from "three/examples/jsm/controls/OrbitControls";
import { DragControls as A } from "three/examples/jsm/controls/DragControls";
import { FirstPersonControls as M } from "three/examples/jsm/controls/FirstPersonControls";
import { FlyControls as V } from "three/examples/jsm/controls/FlyControls";
import { PointerLockControls as P } from "three/examples/jsm/controls/PointerLockControls";
import { TrackballControls as x } from "three/examples/jsm/controls/TrackballControls";
import { TransformControls as S } from "three/examples/jsm/controls/TransformControls";
const T = (e, { expression: t }, { evaluateLater: a, effect: c }) => {
  const { camera: o } = window.Norska, s = a(t);
  c(() => {
    s(({ position: n, rotation: r, lookAt: i }) => {
      n && Array.isArray(n) && o.position.set(n[0], n[1], n[2]), r && Array.isArray(r) && o.rotation.set(r[0], r[1], r[2]), i && Array.isArray(i) && o.lookAt(i);
    });
  });
}, F = (e) => {
  const { scene: t, camera: a, renderer: c } = window.Norska = {
    scene: new _(),
    camera: new y(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1e3
    ),
    renderer: new N(),
    controls: null
  }, o = document.createElement("div");
  o.style.width = "100%", o.style.height = "100%", [...e.querySelectorAll("*")].forEach((i) => {
    i._norska = {};
  }), e.insertAdjacentElement("beforebegin", o);
  const s = () => {
    const { width: i, height: m } = o.getBoundingClientRect();
    return { width: i, height: m };
  }, n = () => {
    const { width: i, height: m } = s();
    a.aspect = i / m, a.updateProjectionMatrix(), c.setSize(i, m);
  };
  window.addEventListener("resize", n), o.appendChild(c.domElement), e.style.display = "none", n();
  const r = () => {
    requestAnimationFrame(r), window.Norska.controls && window.Norska.controls.update(), c.render(t, a);
  };
  r();
}, R = (e, { expression: t }, { evaluateLater: a, effect: c }) => {
  const { scene: o } = window.Norska, s = a(t);
  c(() => {
    s(({ background: n }) => {
      n && (n instanceof p && o.background.set(n), n instanceof v ? o.background = n : o.background = new p(n));
    });
  });
}, z = (e, { expression: t }, { evaluateLater: a, cleanup: c }) => {
  const o = a(t), { scene: s } = window.Norska, n = () => {
    o(([m]) => {
      i(m).load(m, (g) => {
        e._norska.mesh = g.scene.children[0], e.parentNode._norska && e.parentNode._norska.mesh ? e.parentNode._norska.mesh.add(e._norska.mesh) : s.add(e._norska.mesh), e.dispatchEvent(new CustomEvent("norska:load:end"));
      });
    });
  }, r = () => {
    var m;
    (m = e._norska.mesh) != null && m.parent ? e._norska.mesh.parent.remove(e._norska.mesh) : s.remove(e._norska.mesh);
  };
  e.hasOwnProperty("_norska") || (e._norska = {});
  const i = (m) => {
    const h = m.split(".").pop();
    switch (h) {
      case "glb":
        return new C();
      case "obj":
        return new b();
      case "pmd":
        return new L();
      case "drc":
        return new O();
      default:
        throw new Error(`Unknown file extension: ${h}`);
    }
  };
  n(), c(() => r());
};
let d = {
  OrbitControls: j,
  DragControls: A,
  FirstPersonControls: M,
  FlyControls: V,
  PointerLockControls: P,
  TrackballControls: x,
  TransformControls: S
};
Object.entries(d).forEach(([e, t]) => {
  const a = (c, { expression: o }, { evaluateLater: s, effect: n }) => {
    const r = s(o);
    n(() => {
      r((i) => {
        window.Norska.controls ? Object.assign(window.Norska.controls, i[1]) : (Array.isArray(i[0]) ? (d = new t(...i[0]), Object.assign(d, i[1])) : d = new t(...i), window.Norska.controls = d), window.Norska.controls.update();
      });
    });
  };
  d[e] = a;
});
d = Object.fromEntries(
  Object.entries(d).map(([e, t]) => [e.toLowerCase(), t])
);
const $ = d, q = (e, { expression: t }, { evaluateLater: a, effect: c }) => {
  const o = a(t), s = () => {
    o((n) => {
      e._norska.i.position.set(...n);
    });
  };
  e.addEventListener("norska:load:end", s), c(s);
}, B = (e, { expression: t }, { evaluateLater: a, effect: c }) => {
  const o = a(t), s = () => {
    o((n) => {
      const { mesh: r, light: i } = e._norska;
      r && r.rotation.set(...n), i && i.rotation.set(...n);
    });
  };
  e.addEventListener("norska:load:end", s), c(s);
}, D = (e, { expression: t }, { evaluateLater: a, effect: c }) => {
  const o = a(t), s = () => {
    o((n) => {
      const { mesh: r, light: i } = e._norska;
      r && r.scale.set(...n), i && i.scale.set(...n);
    });
  };
  e.addEventListener("norska:load:end", s), c(s);
}, G = {
  camera: T,
  canvas: F,
  scene: R,
  load: z,
  position: q,
  rotation: B,
  scale: D,
  ...$
}, H = (e, { expression: t }, { evaluateLater: a, effect: c }, o) => {
  const s = a(t);
  c(() => {
    const { i: n } = e._norska;
    n instanceof w && s(([, r]) => {
      n.geometry.uuid !== o.uuid && (n.geometry = o), Object.assign(n.geometry, r);
    });
  });
}, U = (e, { expression: t }, { evaluateLater: a, effect: c }, o) => {
  const s = a(t);
  c(() => {
    const { i: n } = e._norska;
    n instanceof w && s(({ color: r, ...i }) => {
      n.material.uuid !== o.uuid && (n.material = o), r && n.material.color.set(r), Object.assign(n.material, i);
    });
  });
}, W = (e, {}, { cleanup: t }) => {
  const { scene: a } = window.Norska, c = () => {
    var s, n, r;
    if (e._norska.i = new w(), (s = e.parentNode) != null && s._norska && ((n = e.parentNode) == null ? void 0 : n._norska.i) instanceof w) {
      (r = e.parentNode) == null || r._norska.i.add(e._norska.i);
      return;
    }
    a.add(e._norska.i);
  }, o = () => {
    var s;
    if (e._norska.i.parent) {
      (s = e._norska.i) == null || s.parent.remove(e._norska.i);
      return;
    }
    a.remove(e._norska.i);
  };
  e.hasOwnProperty("_norska") || (e._norska = {}), c(), t(() => o());
}, J = (e, { expression: t }, { evaluateLater: a, effect: c }, o) => {
  const { scene: s } = window.Norska, n = t ? a(t) : [];
  c(() => {
    const { i: r } = e._norska;
    n(([, i]) => {
      if (!r) {
        Object.assign(o, i), s.add(o), e._norska.i = o;
        return;
      }
      r instanceof E && Object.assign(r, i);
    });
  });
}, I = {
  geometry: H,
  material: U,
  mesh: W,
  light: J
}, K = (e) => {
  e.magic("three", () => f);
}, Q = (e) => {
  e.magic("frame", () => (t) => {
    const a = () => {
      t(), requestAnimationFrame(a);
    };
    a();
  });
}, X = (e) => {
  e.magic("n", (t) => t._norska), e.magic("N", () => window.Norska);
}, Y = {
  three: K,
  frame: Q,
  n: X
}, k = {
  core: G,
  primitives: I
}, l = {
  ...Y
}, u = Object.fromEntries(
  Object.entries(f).map(([e, t]) => [e.toLowerCase(), t])
), fe = (e) => (t) => {
  const a = {
    prefix: "3",
    ...e
  };
  t.directive(a.prefix, (c, o, s) => {
    const n = o.expression ? s.evaluate(o.expression) : [];
    try {
      if (o.modifiers[0] in k.core) {
        k.core[o.modifiers[0]](c, o, s);
        return;
      }
      const r = Array.isArray(n) ? new u[o.modifiers[0]](...n) : new u[o.modifiers[0]]({ ...n }), i = () => {
        if (r instanceof f.Mesh)
          return "mesh";
        if (r instanceof f.Light)
          return "light";
        if (r instanceof f.BufferGeometry)
          return "geometry";
        if (r instanceof f.Material)
          return "material";
        throw new Error(`Unknown instance type: ${r}`);
      };
      k.primitives[i()](c, o, s, r);
    } catch (r) {
      console.error(r);
    }
  }), Object.keys(l).forEach((c) => {
    l[c](t);
  });
};
export {
  fe as default
};
