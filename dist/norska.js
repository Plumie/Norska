import * as f from "three";
import { Scene as g, PerspectiveCamera as y, WebGLRenderer as N, Color as p, Texture as b, Mesh as w, Light as E } from "three";
import { OBJLoader as O } from "three/examples/jsm/loaders/OBJLoader";
import { GLTFLoader as v } from "three/examples/jsm/loaders/GLTFLoader";
import { MMDLoader as L } from "three/examples/jsm/loaders/MMDLoader";
import { DRACOLoader as j } from "three/examples/jsm/loaders/DRACOLoader";
import { OrbitControls as C } from "three/examples/jsm/controls/OrbitControls";
import { DragControls as P } from "three/examples/jsm/controls/DragControls";
import { FirstPersonControls as M } from "three/examples/jsm/controls/FirstPersonControls";
import { FlyControls as S } from "three/examples/jsm/controls/FlyControls";
import { PointerLockControls as V } from "three/examples/jsm/controls/PointerLockControls";
import { TrackballControls as x } from "three/examples/jsm/controls/TrackballControls";
import { TransformControls as A } from "three/examples/jsm/controls/TransformControls";
const T = (e) => {
  const { camera: r } = window.Norska;
  e._norska.i = r, e.hasOwnProperty("_norska") || (e._norska = {});
}, F = (e) => {
  const { scene: r, camera: s, renderer: i } = window.Norska = {
    scene: new g(),
    camera: new y(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1e3
    ),
    renderer: new N(),
    controls: null
  }, n = document.createElement("div");
  n.style.width = "100%", n.style.height = "100%", [...e.querySelectorAll("*")].forEach((c) => {
    c._norska = {};
  }), e.insertAdjacentElement("beforebegin", n);
  const t = () => {
    const { width: c, height: m } = n.getBoundingClientRect();
    return { width: c, height: m };
  }, o = () => {
    const { width: c, height: m } = t();
    s.aspect = c / m, s.updateProjectionMatrix(), i.setSize(c, m);
  };
  window.addEventListener("resize", o), n.appendChild(i.domElement), e.style.display = "none", o();
  const a = () => {
    requestAnimationFrame(a), window.Norska.controls && window.Norska.controls.update(), i.render(r, s);
  };
  a();
}, R = (e, { expression: r }, { evaluateLater: s, effect: i }) => {
  const { scene: n } = window.Norska, t = s(r);
  i(() => {
    t(({ background: o }) => {
      o && (o instanceof p && n.background.set(o), o instanceof b ? n.background = o : n.background = new p(o));
    });
  });
}, $ = (e, { expression: r }, { evaluateLater: s, cleanup: i }) => {
  const n = s(r), { scene: t } = window.Norska, o = () => {
    n(([m]) => {
      c(m).load(m, (_) => {
        e._norska.mesh = _.scene.children[0], e.parentNode._norska && e.parentNode._norska.mesh ? e.parentNode._norska.mesh.add(e._norska.mesh) : t.add(e._norska.mesh), e.dispatchEvent(new CustomEvent("norska:load:end"));
      });
    });
  }, a = () => {
    var m;
    (m = e._norska.mesh) != null && m.parent ? e._norska.mesh.parent.remove(e._norska.mesh) : t.remove(e._norska.mesh);
  };
  e.hasOwnProperty("_norska") || (e._norska = {});
  const c = (m) => {
    const k = m.split(".").pop();
    switch (k) {
      case "glb":
        return new v();
      case "obj":
        return new O();
      case "pmd":
        return new L();
      case "drc":
        return new j();
      default:
        throw new Error(`Unknown file extension: ${k}`);
    }
  };
  o(), i(() => a());
};
let d = {
  OrbitControls: C,
  DragControls: P,
  FirstPersonControls: M,
  FlyControls: S,
  PointerLockControls: V,
  TrackballControls: x,
  TransformControls: A
};
Object.entries(d).forEach(([e, r]) => {
  const s = (i, { expression: n }, { evaluateLater: t, effect: o }) => {
    const a = t(n);
    o(() => {
      a((c) => {
        window.Norska.controls ? Object.assign(window.Norska.controls, c[1]) : (Array.isArray(c[0]) ? (d = new r(...c[0]), Object.assign(d, c[1])) : d = new r(...c), window.Norska.controls = d), window.Norska.controls.update();
      });
    });
  };
  d[e] = s;
});
d = Object.fromEntries(
  Object.entries(d).map(([e, r]) => [e.toLowerCase(), r])
);
const z = d, G = (e, { expression: r }, { evaluateLater: s, effect: i }) => {
  const n = s(r), t = () => {
    n((o) => {
      if (e._norska.i.position.set(...o), o.some((a) => typeof a != "number"))
        throw new Error(`Position should be a number array. Got ${JSON.stringify(o)} instead.`);
    });
  };
  e.addEventListener("norska:load:end", t), i(t);
}, q = (e, { expression: r }, { evaluateLater: s, effect: i }) => {
  const n = s(r), t = () => {
    n((o) => {
      e._norska.i.rotation.set(...o);
    });
  };
  e.addEventListener("norska:load:end", t), i(t);
}, B = (e, { expression: r }, { evaluateLater: s, effect: i }) => {
  const n = s(r), t = () => {
    n((o) => {
      e._norska.i.scale.set(...o);
    });
  };
  e.addEventListener("norska:load:end", t), i(t);
}, D = {
  camera: T,
  canvas: F,
  scene: R,
  load: $,
  position: G,
  rotation: q,
  scale: B,
  ...z
}, H = (e, { expression: r }, { evaluateLater: s, effect: i }, n) => {
  const t = s(r);
  i(() => {
    const { i: o } = e._norska;
    o instanceof w && t(([, a]) => {
      o.geometry.uuid !== n.uuid && (o.geometry = n), Object.assign(o.geometry, a);
    });
  });
}, J = (e, { expression: r }, { evaluateLater: s, effect: i }, n) => {
  const t = s(r);
  i(() => {
    const { i: o } = e._norska;
    o instanceof w && t(({ color: a, ...c }) => {
      o.material.uuid !== n.uuid && (o.material = n), a && o.material.color.set(a), Object.assign(o.material, c);
    });
  });
}, U = (e, {}, { cleanup: r }) => {
  const { scene: s } = window.Norska, i = () => {
    var t, o, a;
    if (e._norska.i = new w(), (t = e.parentNode) != null && t._norska && ((o = e.parentNode) == null ? void 0 : o._norska.i) instanceof w) {
      (a = e.parentNode) == null || a._norska.i.add(e._norska.i);
      return;
    }
    s.add(e._norska.i);
  }, n = () => {
    var t;
    if (e._norska.i.parent) {
      (t = e._norska.i) == null || t.parent.remove(e._norska.i);
      return;
    }
    s.remove(e._norska.i);
  };
  e.hasOwnProperty("_norska") || (e._norska = {}), i(), r(() => n());
}, W = (e, { expression: r }, { evaluateLater: s, effect: i }, n) => {
  const { scene: t } = window.Norska, o = r ? s(r) : [];
  i(() => {
    const { i: a } = e._norska;
    o(([, c]) => {
      if (!a) {
        Object.assign(n, c), t.add(n), e._norska.i = n;
        return;
      }
      a instanceof E && Object.assign(a, c);
    });
  });
}, I = {
  geometry: H,
  material: J,
  mesh: U,
  light: W
}, K = (e) => {
  e.magic("three", () => f);
}, Q = (e) => {
  e.magic("frame", () => (r) => {
    const s = () => {
      r(), requestAnimationFrame(s);
    };
    s();
  });
}, X = (e) => {
  e.magic("n", (r) => r._norska), e.magic("N", () => window.Norska);
}, Y = {
  three: K,
  frame: Q,
  n: X
}, h = {
  core: D,
  primitives: I
}, u = {
  ...Y
}, l = Object.fromEntries(
  Object.entries(f).map(([e, r]) => [e.toLowerCase(), r])
), fe = (e) => (r) => {
  const s = {
    prefix: "3",
    ...e
  };
  r.directive(s.prefix, (i, n, t) => {
    const o = n.expression ? t.evaluate(n.expression) : [];
    try {
      if (n.modifiers[0] in h.core) {
        h.core[n.modifiers[0]](i, n, t);
        return;
      }
      const a = Array.isArray(o) ? new l[n.modifiers[0]](...o) : new l[n.modifiers[0]]({ ...o }), c = () => {
        if (a instanceof f.Mesh)
          return "mesh";
        if (a instanceof f.Light)
          return "light";
        if (a instanceof f.BufferGeometry)
          return "geometry";
        if (a instanceof f.Material)
          return "material";
        throw new Error(`Unknown instance type: ${a}`);
      };
      h.primitives[c()](i, n, t, a);
    } catch (a) {
      console.error(a);
    }
  }), Object.keys(u).forEach((i) => {
    u[i](r);
  });
};
export {
  fe as default
};
