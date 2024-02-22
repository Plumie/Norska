import * as d from "three";
import { Scene as k, PerspectiveCamera as p, WebGLRenderer as y, Mesh as f, Light as g } from "three";
const _ = (e) => {
  const { camera: o } = window.Norska;
  if (!e.hasOwnProperty("_norska")) {
    e._norska = {};
    return;
  }
  e._norska.i = o;
}, l = (e) => {
  const { scene: o, camera: s, renderer: i } = window.Norska = {
    scene: new k(),
    camera: new p(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1e3
    ),
    renderer: new y(),
    controls: null
  }, t = document.createElement("div");
  t.style.width = "100%", t.style.height = "100%", [...e.querySelectorAll("*")].forEach((c) => {
    c._norska = {};
  }), e.insertAdjacentElement("beforebegin", t);
  const a = () => {
    const { width: c, height: m } = t.getBoundingClientRect();
    return { width: c, height: m };
  }, n = () => {
    const { width: c, height: m } = a();
    s.aspect = c / m, s.updateProjectionMatrix(), i.setSize(c, m);
  };
  window.addEventListener("resize", n), t.appendChild(i.domElement), e.style.display = "none", n();
  const r = () => {
    requestAnimationFrame(r), window.Norska.controls && window.Norska.controls.update(), i.render(o, s);
  };
  r();
}, b = (e) => {
  const { scene: o } = window.Norska;
  if (!e.hasOwnProperty("_norska")) {
    e._norska = {};
    return;
  }
  e._norska.i = o;
}, v = (e, { expression: o }, { evaluateLater: s, effect: i }) => {
  const t = s(o), a = () => {
    t((n) => {
      if (e._norska.i.position.set(...n), n.some((r) => typeof r != "number"))
        throw new Error(`Position should be a array of numbers. Got ${JSON.stringify(n)} instead.`);
    });
  };
  e.addEventListener("norska:load:end", a), i(a);
}, E = (e, { expression: o }, { evaluateLater: s, effect: i }) => {
  const t = s(o), a = () => {
    t((n) => {
      if (e._norska.i.rotation.set(...n), n.some((r) => typeof r != "number"))
        throw new Error(`Rotation should be a array of numbers. Got ${JSON.stringify(n)} instead.`);
    });
  };
  e.addEventListener("norska:load:end", a), i(a);
}, N = (e, { expression: o }, { evaluateLater: s, effect: i }) => {
  const t = s(o), a = () => {
    t((n) => {
      if (e._norska.i.scale.set(...n), n.some((r) => typeof r != "number"))
        throw new Error(`Scale should be a array of numbers. Got ${JSON.stringify(n)} instead.`);
    });
  };
  e.addEventListener("norska:load:end", a), i(a);
}, O = (e, { modifiers: o, expression: s }, { evaluateLater: i, effect: t }) => {
  const a = i(s);
  t(() => {
    const { i: n } = e._norska;
    n && a((r) => {
      n[o[1]] = r;
    });
  });
}, S = {
  camera: _,
  canvas: l,
  scene: b,
  position: v,
  rotation: E,
  scale: N,
  p: O
}, P = (e, { expression: o }, { evaluateLater: s, effect: i }, t) => {
  const a = s(o);
  i(() => {
    const { i: n } = e._norska;
    n instanceof f && a(([, r]) => {
      n.geometry.uuid !== t.uuid && (n.geometry = t), Object.assign(n.geometry, r);
    });
  });
}, j = (e, { expression: o }, { evaluateLater: s, effect: i }, t) => {
  const a = s(o);
  i(() => {
    const { i: n } = e._norska;
    n instanceof f && a(({ color: r, ...c }) => {
      n.material.uuid !== t.uuid && (n.material = t), r && n.material.color.set(r), Object.assign(n.material, c);
    });
  });
}, L = (e, {}, { cleanup: o }) => {
  const { scene: s } = window.Norska, i = () => {
    var n, r;
    return ((n = e.parentNode) == null ? void 0 : n._norska) && ((r = e.parentNode) == null ? void 0 : r._norska.i) instanceof f;
  }, t = () => {
    var n;
    if (e._norska.i = new f(), i()) {
      (n = e.parentNode) == null || n._norska.i.add(e._norska.i);
      return;
    }
    s.add(e._norska.i);
  }, a = () => {
    var n;
    if (i()) {
      (n = e._norska.i) == null || n.parent.remove(e._norska.i);
      return;
    }
    s.remove(e._norska.i);
  };
  e.hasOwnProperty("_norska") || (e._norska = {}), t(), o(() => a());
}, V = (e, { expression: o }, { evaluateLater: s, effect: i }, t) => {
  const { scene: a } = window.Norska, n = o ? s(o) : [];
  i(() => {
    const { i: r } = e._norska;
    n(([, c]) => {
      if (!r) {
        Object.assign(t, c), a.add(t), e._norska.i = t;
        return;
      }
      r instanceof g && Object.assign(r, c);
    });
  });
}, M = {
  geometry: P,
  material: j,
  mesh: L,
  light: V
}, x = (e) => {
  e.magic("3", () => d);
}, C = (e) => {
  e.magic("frame", () => (o) => {
    const s = () => {
      o(), requestAnimationFrame(s);
    };
    s();
  });
}, G = (e) => {
  e.magic("n", (o) => o._norska), e.magic("N", () => window.Norska);
}, R = {
  three: x,
  frame: C,
  i: G
}, u = {
  core: S,
  primitives: M
}, w = {
  ...R
}, h = Object.fromEntries(
  Object.entries(d).map(([e, o]) => [e.toLowerCase(), o])
), z = (e) => (o) => {
  const s = {
    prefix: "3",
    ...e
  };
  o.directive(s.prefix, (i, t, a) => {
    const n = t.expression ? a.evaluate(t.expression) : [];
    try {
      if (t.modifiers[0] in u.core) {
        u.core[t.modifiers[0]](i, t, a);
        return;
      }
      const r = Array.isArray(n) ? new h[t.modifiers[0]](...n) : new h[t.modifiers[0]]({ ...n }), c = () => {
        if (r instanceof d.Mesh)
          return "mesh";
        if (r instanceof d.Light)
          return "light";
        if (r instanceof d.BufferGeometry)
          return "geometry";
        if (r instanceof d.Material)
          return "material";
        throw new Error(`Unknown instance type: ${r}`);
      };
      u.primitives[c()](i, t, a, r);
    } catch (r) {
      console.error(r);
    }
  }), Object.keys(w).forEach((i) => {
    w[i](o);
  });
};
export {
  z as default
};
