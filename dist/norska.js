import * as _ from "three";
import { WebGLRenderer as b, Camera as E, PerspectiveCamera as P, Scene as l } from "three";
const g = (e, { expression: t }, { evaluate: a }) => {
  const n = t ? a(t) : {}, o = () => {
    var u;
    if (n.renderer instanceof b)
      return n.renderer;
    const d = new b();
    return ((u = n.renderer) == null ? void 0 : u.constructor.name) === "Object" && Object.assign(d, n.renderer), d;
  }, c = () => {
    var u;
    if (n.camera instanceof E)
      return n.camera;
    const d = new P(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1e3
    );
    return ((u = n.camera) == null ? void 0 : u.constructor.name) === "Object" && Object.assign(d, n.camera), d;
  }, s = () => {
    var u;
    if (n.scene instanceof l)
      return n.scene;
    const d = new l();
    return ((u = n.scene) == null ? void 0 : u.constructor.name) === "Object" && Object.assign(d, n.scene), d;
  }, { scene: r, camera: m, renderer: i } = {
    scene: s(),
    renderer: o(),
    camera: c()
  }, h = (() => {
    var u;
    const d = document.createElement("div");
    return d.style.width = "100%", d.style.height = "100%", [...e.querySelectorAll("*")].forEach((O) => {
      O._norska = null;
    }), (u = e.parentNode) == null || u.appendChild(d), d;
  })();
  h.appendChild(i.domElement);
  const y = () => {
    const { width: d, height: u } = h.getBoundingClientRect();
    return { width: d, height: u };
  }, j = () => {
    const { width: d, height: u } = y();
    m.aspect = d / u, m.updateProjectionMatrix(), i.setSize(d, u);
  }, v = () => {
    requestAnimationFrame(v), i.render(r, m);
  };
  e.style.display = "none", j(), window.addEventListener("resize", j), v(), window._norska = {
    scene: r,
    camera: m,
    renderer: i
  };
}, x = (e, { modifiers: t, expression: a }, { evaluateLater: n, effect: o }) => {
  const c = n(a);
  o(() => {
    const s = e._norska;
    s && c((r) => {
      var f;
      const m = t[t.length - 1];
      let i = s;
      if (t.forEach((h) => {
        if (i[h] === void 0)
          throw new Error(`Property ${t.join(".")} does not exist`);
        h !== m && (i = i[h]);
      }), (f = i[m]) != null && f.set) {
        if (Array.isArray(r)) {
          i[m].set(...r);
          return;
        }
        i[m].set(r);
        return;
      }
      i[m] = r;
    });
  });
}, C = (e, { modifiers: t }, { effect: a }) => {
  a(() => {
    var r, m;
    const n = e._norska, o = ((r = e.parentNode) == null ? void 0 : r._norska) || window._norska;
    if (!n || !o)
      return;
    t.shift();
    const c = t[t.length - 1];
    let s = o;
    if (t.forEach((i) => {
      if (s[i] === void 0)
        throw new Error(`Property ${t.join(".")} does not exist`);
      i !== c && (s = s[i]);
    }), (m = s[c]) != null && m.set) {
      s[c].copy(n);
      return;
    }
    s[c] = n;
  });
}, N = (e, {}, { cleanup: t }, a) => {
  const { scene: n } = window._norska, o = () => {
    var r;
    return (r = e.parentNode) == null ? void 0 : r._norska;
  }, c = () => {
    var r;
    if (e._norska = a, !!a.isObject3D) {
      if (o()) {
        (r = e.parentNode) == null || r._norska.add(e._norska);
        return;
      }
      n.add(e._norska);
    }
  }, s = () => {
    var r;
    if (a.isObject3D) {
      if (o()) {
        (r = e._norska) == null || r.parent.remove(e._norska);
        return;
      }
      n.remove(e._norska);
    }
  };
  c(), t(() => s());
}, S = (e, { modifiers: t }) => {
  e._norska = window._norska[t[1]];
}, A = (e, { expression: t }, { evaluateLater: a, effect: n, cleanup: o }) => {
  const { scene: c } = window._norska, s = a(t), r = () => {
    var f;
    return (f = e.parentNode) == null ? void 0 : f._norska;
  }, m = (f) => {
    var h;
    if (e._norska = f, r()) {
      (h = e.parentNode) == null || h._norska.add(e._norska);
      return;
    }
    c.add(e._norska);
  }, i = () => {
    var f;
    if (r()) {
      (f = e._norska) == null || f.parent.remove(e._norska);
      return;
    }
    c.remove(e._norska);
  };
  n(() => {
    s((f) => {
      m(f);
    });
  }), o(() => i());
}, w = {
  core: {
    canvas: g,
    p: x,
    attach: C,
    three: S,
    object: A
  },
  instance: N
}, $ = (e) => {
  e.magic("3", () => _), e.magic("math", () => _.MathUtils);
}, z = (e) => {
  e.magic("frame", () => (t) => {
    const a = () => {
      t(), requestAnimationFrame(a);
    };
    a();
  });
}, I = (e) => {
  e.magic("i", (t) => t._norska), e.magic("three", () => window._norska);
}, R = (e, t) => {
  e.magic("load", () => async (a, n) => {
    const o = new a();
    return await new Promise((r, m) => {
      o.load(n, r, void 0, m);
    });
  }), e.magic("loaders", () => t);
}, k = {
  three: $,
  frame: z,
  i: I,
  load: R
}, p = Object.fromEntries(
  Object.entries(_).map(([e, t]) => [e.toLowerCase(), t])
), L = (e) => (t) => {
  const a = {
    prefix: "3",
    loaders: [],
    ...e
  };
  t.directive(a.prefix, (n, o, c) => {
    try {
      if (o.modifiers[0] in w.core) {
        w.core[o.modifiers[0]](n, o, c);
        return;
      }
      if (o.modifiers[0].charAt(0) === "$") {
        o.modifiers[0] = o.modifiers[0].slice(1), w.core.p(n, o, c);
        return;
      }
      const s = () => {
        const r = o.expression ? c.evaluate(o.expression) : [];
        if (p[o.modifiers[0]] === void 0)
          throw new Error(`The object ${o.modifiers[0]} does not exist in the three.js namespace`);
        return Array.isArray(r) ? new p[o.modifiers[0]](...r) : r != null && r.constructor.name === "Object" ? new p[o.modifiers[0]]({ ...r }) : new p[o.modifiers[0]](r);
      };
      w.instance(n, o, c, s());
    } catch (s) {
      console.error(s);
    }
  }), Object.keys(k).forEach((n) => {
    if (n === "load") {
      k[n](t, a.loaders);
      return;
    }
    k[n](t);
  });
};
export {
  L as default
};
