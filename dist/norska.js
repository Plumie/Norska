import * as f from "three";
import { Scene as g, PerspectiveCamera as _, WebGLRenderer as y, Color as k, Texture as E, Mesh as N } from "three";
import { OBJLoader as v } from "three/examples/jsm/loaders/OBJLoader";
import { GLTFLoader as C } from "three/examples/jsm/loaders/GLTFLoader";
import { MMDLoader as b } from "three/examples/jsm/loaders/MMDLoader";
import { DRACOLoader as O } from "three/examples/jsm/loaders/DRACOLoader";
import { OrbitControls as L } from "three/examples/jsm/controls/OrbitControls";
import { DragControls as j } from "three/examples/jsm/controls/DragControls";
import { FirstPersonControls as A } from "three/examples/jsm/controls/FirstPersonControls";
import { FlyControls as M } from "three/examples/jsm/controls/FlyControls";
import { PointerLockControls as V } from "three/examples/jsm/controls/PointerLockControls";
import { TrackballControls as P } from "three/examples/jsm/controls/TrackballControls";
import { TransformControls as x } from "three/examples/jsm/controls/TransformControls";
const S = (e, { expression: s }, { evaluateLater: i, effect: c }) => {
  const { camera: n } = window.Norska, t = i(s);
  c(() => {
    t(({ position: o, rotation: r, lookAt: a }) => {
      o && Array.isArray(o) && n.position.set(o[0], o[1], o[2]), r && Array.isArray(r) && n.rotation.set(r[0], r[1], r[2]), a && Array.isArray(a) && n.lookAt(a);
    });
  });
}, T = (e) => {
  const { scene: s, camera: i, renderer: c } = window.Norska = {
    scene: new g(),
    camera: new _(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1e3
    ),
    renderer: new y(),
    controls: null
  }, n = document.createElement("div");
  n.style.width = "100%", n.style.height = "100%", [...e.querySelectorAll("*")].forEach((a) => {
    a._norska = {};
  }), e.insertAdjacentElement("beforebegin", n);
  const t = () => {
    const { width: a, height: m } = n.getBoundingClientRect();
    return { width: a, height: m };
  }, o = () => {
    const { width: a, height: m } = t();
    i.aspect = a / m, i.updateProjectionMatrix(), c.setSize(a, m);
  };
  window.addEventListener("resize", o), n.appendChild(c.domElement), e.style.display = "none", o();
  const r = () => {
    requestAnimationFrame(r), window.Norska.controls && window.Norska.controls.update(), c.render(s, i);
  };
  r();
}, R = (e, { expression: s }, { evaluateLater: i, effect: c }) => {
  const { scene: n } = window.Norska, t = i(s);
  c(() => {
    t(({ background: o }) => {
      o && (o instanceof k && n.background.set(o), o instanceof E ? n.background = o : n.background = new k(o));
    });
  });
}, F = (e, { expression: s }, { evaluateLater: i, cleanup: c }) => {
  const n = i(s), { scene: t } = window.Norska, o = () => {
    n(([m]) => {
      a(m).load(m, (u) => {
        e._norska.mesh = u.scene.children[0], e.parentNode._norska && e.parentNode._norska.mesh ? e.parentNode._norska.mesh.add(e._norska.mesh) : t.add(e._norska.mesh), e.dispatchEvent(new CustomEvent("norska:load:end"));
      });
    });
  }, r = () => {
    var m;
    (m = e._norska.mesh) != null && m.parent ? e._norska.mesh.parent.remove(e._norska.mesh) : t.remove(e._norska.mesh);
  };
  e.hasOwnProperty("_norska") || (e._norska = {});
  const a = (m) => {
    const h = m.split(".").pop();
    switch (h) {
      case "glb":
        return new C();
      case "obj":
        return new v();
      case "pmd":
        return new b();
      case "drc":
        return new O();
      default:
        throw new Error(`Unknown file extension: ${h}`);
    }
  };
  o(), c(() => r());
};
let d = {
  OrbitControls: L,
  DragControls: j,
  FirstPersonControls: A,
  FlyControls: M,
  PointerLockControls: V,
  TrackballControls: P,
  TransformControls: x
};
Object.entries(d).forEach(([e, s]) => {
  const i = (c, { expression: n }, { evaluateLater: t, effect: o }) => {
    const r = t(n);
    o(() => {
      r((a) => {
        window.Norska.controls ? Object.assign(window.Norska.controls, a[1]) : (Array.isArray(a[0]) ? (d = new s(...a[0]), Object.assign(d, a[1])) : d = new s(...a), window.Norska.controls = d), window.Norska.controls.update();
      });
    });
  };
  d[e] = i;
});
d = Object.fromEntries(
  Object.entries(d).map(([e, s]) => [e.toLowerCase(), s])
);
const z = d, $ = (e, { expression: s }, { evaluateLater: i, effect: c }) => {
  const n = i(s), t = () => {
    n((o) => {
      const { mesh: r, light: a } = e._norska;
      r && r.position.set(...o), a && a.position.set(...o);
    });
  };
  e.addEventListener("norska:load:end", t), c(t);
}, q = (e, { expression: s }, { evaluateLater: i, effect: c }) => {
  const n = i(s), t = () => {
    n((o) => {
      const { mesh: r, light: a } = e._norska;
      r && r.rotation.set(...o), a && a.rotation.set(...o);
    });
  };
  e.addEventListener("norska:load:end", t), c(t);
}, B = (e, { expression: s }, { evaluateLater: i, effect: c }) => {
  const n = i(s), t = () => {
    n((o) => {
      const { mesh: r, light: a } = e._norska;
      r && r.scale.set(...o), a && a.scale.set(...o);
    });
  };
  e.addEventListener("norska:load:end", t), c(t);
}, D = {
  camera: S,
  canvas: T,
  scene: R,
  load: F,
  position: $,
  rotation: q,
  scale: B,
  ...z
}, G = (e, { expression: s }, { evaluateLater: i, effect: c }, n) => {
  const t = i(s);
  c(() => {
    const { mesh: o } = e._norska;
    o && t(([, r]) => {
      o.geometry.uuid !== n.uuid && (o.geometry = n), Object.assign(o.geometry, r);
    });
  });
}, H = (e, { expression: s }, { evaluateLater: i, effect: c }, n) => {
  const t = i(s);
  c(() => {
    const { mesh: o } = e._norska;
    o && t(({ color: r, ...a }) => {
      o.material.uuid !== n.uuid && (o.material = n), r && o.material.color.set(r), Object.assign(o.material, a);
    });
  });
}, U = (e, {}, { cleanup: s }) => {
  const { scene: i } = window.Norska, c = () => {
    var t, o, r;
    e._norska.mesh = new N(), (t = e.parentNode) != null && t._norska && ((o = e.parentNode) != null && o._norska.mesh) ? (r = e.parentNode) == null || r._norska.mesh.add(e._norska.mesh) : i.add(e._norska.mesh);
  }, n = () => {
    var t, o;
    (t = e._norska.mesh) != null && t.parent ? (o = e._norska.mesh) == null || o.parent.remove(e._norska.mesh) : i.remove(e._norska.mesh);
  };
  e.hasOwnProperty("_norska") || (e._norska = {}), c(), s(() => n());
}, W = (e, { expression: s }, { evaluateLater: i, effect: c }, n) => {
  const { scene: t } = window.Norska, o = s ? i(s) : [];
  c(() => {
    const { light: r } = e._norska;
    o(([, a]) => {
      r ? Object.assign(r, a) : (Object.assign(n, a), t.add(n), e._norska.light = n);
    });
  });
}, J = {
  geometry: G,
  material: H,
  mesh: U,
  light: W
}, I = (e) => {
  e.magic("three", () => f);
}, K = (e) => {
  e.magic("frame", () => (s) => {
    const i = () => {
      s(), requestAnimationFrame(i);
    };
    i();
  });
}, Q = (e) => {
  e.magic("n", (s) => s._norska), e.magic("N", () => window.Norska);
}, X = {
  three: I,
  frame: K,
  n: Q
}, w = {
  core: D,
  primitives: J
}, l = {
  ...X
}, p = Object.fromEntries(
  Object.entries(f).map(([e, s]) => [e.toLowerCase(), s])
), de = (e) => (s) => {
  const i = {
    prefix: "3",
    ...e
  };
  s.directive(i.prefix, (c, n, t) => {
    const o = n.expression ? t.evaluate(n.expression) : [];
    try {
      if (n.modifiers[0] in w.core) {
        w.core[n.modifiers[0]](c, n, t);
        return;
      }
      const r = Array.isArray(o) ? new p[n.modifiers[0]](...o) : new p[n.modifiers[0]]({ ...o }), a = () => {
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
      w.primitives[a()](c, n, t, r);
    } catch (r) {
      console.error(r);
    }
  }), Object.keys(l).forEach((c) => {
    l[c](s);
  });
};
export {
  de as default
};
