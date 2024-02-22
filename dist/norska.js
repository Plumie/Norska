import * as u from "three";
import { Scene as k, PerspectiveCamera as _, WebGLRenderer as y } from "three";
const v = (e) => {
  const { camera: t } = window.Norska;
  if (!e.hasOwnProperty("_norska")) {
    e._norska = {};
    return;
  }
  e._norska = t;
}, l = (e) => {
  var d;
  const { scene: t, camera: a, renderer: s } = window.Norska = {
    scene: new k(),
    camera: new _(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1e3
    ),
    renderer: new y(),
    controls: null
  }, n = document.createElement("div");
  n.style.width = "100%", n.style.height = "100%", [...e.querySelectorAll("*")].forEach((c) => {
    c._norska = null;
  }), (d = e.parentNode) == null || d.appendChild(n);
  const i = () => {
    const { width: c, height: w } = n.getBoundingClientRect();
    return { width: c, height: w };
  }, o = () => {
    const { width: c, height: w } = i();
    a.aspect = c / w, a.updateProjectionMatrix(), s.setSize(c, w);
  };
  window.addEventListener("resize", o), n.appendChild(s.domElement), e.style.display = "none", o();
  const r = () => {
    requestAnimationFrame(r), window.Norska.controls && window.Norska.controls.update(), s.render(t, a);
  };
  r();
}, j = (e) => {
  const { scene: t } = window.Norska;
  if (!e.hasOwnProperty("_norska")) {
    e._norska = {};
    return;
  }
  e._norska = t;
}, E = (e, { modifiers: t, expression: a }, { evaluateLater: s, effect: n }) => {
  const i = s(a);
  n(() => {
    const o = e._norska;
    o && i((r) => {
      var w;
      const d = t[t.length - 1];
      let c = o;
      if (t.forEach((f) => {
        if (c[f] === void 0)
          throw new Error(`Property ${t.join(".")} does not exist`);
        f !== d && (c = c[f]);
      }), (w = c[d]) != null && w.set) {
        if (Array.isArray(r)) {
          c[d].set(...r);
          return;
        }
        c[d].set(r);
        return;
      }
      c[d] = r;
    });
  });
}, N = (e, { modifiers: t }, { effect: a }) => {
  a(() => {
    const s = e._norska, n = e.parentNode._norska;
    if (!s || !n)
      return;
    t.shift();
    const i = t[t.length - 1];
    let o = n;
    t.forEach((r) => {
      if (o[r] === void 0)
        throw new Error(`Property ${t.join(".")} does not exist`);
      r !== i && (o = o[r]);
    }), o[i] = s;
  });
}, x = (e, {}, { cleanup: t }, a) => {
  const { scene: s } = window.Norska, n = () => {
    var r;
    return (r = e.parentNode) == null ? void 0 : r._norska;
  }, i = () => {
    var r;
    if (e._norska = a, !!a.isObject3D) {
      if (n()) {
        (r = e.parentNode) == null || r._norska.add(e._norska);
        return;
      }
      s.add(e._norska);
    }
  }, o = () => {
    var r;
    if (a.isObject3D) {
      if (n()) {
        (r = e._norska) == null || r.parent.remove(e._norska);
        return;
      }
      s.remove(e._norska);
    }
  };
  e.hasOwnProperty("_norska") || (e._norska = {}), i(), t(() => o());
}, h = {
  core: {
    camera: v,
    canvas: l,
    scene: j,
    p: E,
    attach: N
  },
  instance: x
}, O = (e) => {
  e.magic("three", () => u), e.magic("math", () => u.MathUtils), e.magic("3", () => window.Norska);
}, P = (e) => {
  e.magic("frame", () => (t) => {
    const a = () => {
      t(), requestAnimationFrame(a);
    };
    a();
  });
}, b = (e) => {
  e.magic("i", (t) => t._norska);
}, p = {
  three: O,
  frame: P,
  i: b
}, m = Object.fromEntries(
  Object.entries(u).map(([e, t]) => [e.toLowerCase(), t])
), C = (e) => (t) => {
  const a = {
    prefix: "3",
    ...e
  };
  t.directive(a.prefix, (s, n, i) => {
    const o = n.expression ? i.evaluate(n.expression) : [];
    try {
      if (n.modifiers[0] in h.core) {
        h.core[n.modifiers[0]](s, n, i);
        return;
      }
      if (n.modifiers[0].charAt(0) === "$") {
        n.modifiers[0] = n.modifiers[0].slice(1), h.core.p(s, n, i);
        return;
      }
      const r = () => {
        if (m[n.modifiers[0]] === void 0)
          throw new Error(`The object ${n.modifiers[0]} does not exist in the three.js namespace`);
        return Array.isArray(o) ? new m[n.modifiers[0]](...o) : o != null && o.constructor.name === "Object" ? new m[n.modifiers[0]]({ ...o }) : new m[n.modifiers[0]](o);
      };
      h.instance(s, n, i, r());
    } catch (r) {
      console.error(r);
    }
  }), Object.keys(p).forEach((s) => {
    p[s](t);
  });
};
export {
  C as default
};
