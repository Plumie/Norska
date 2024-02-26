import * as j from "three";
import { Vector2 as E, Raycaster as C, WebGLRenderer as v, Camera as O, PerspectiveCamera as P, Scene as _, MathUtils as N } from "three";
function A(e, t) {
  const c = new E(0), r = new E(0), p = new C(), u = (n) => {
    if (c.x = n.clientX / window.innerWidth * 2 - 1, c.y = -(n.clientY / window.innerHeight) * 2 + 1, !r.x && !r.y) {
      r.copy(c);
      return;
    }
    const s = i(r), o = i(c);
    o.length && o[0].object.el.dispatchEvent(new CustomEvent("pointerover", { detail: n })), !s.length && o.length && o[0].object.el.dispatchEvent(new CustomEvent("pointerenter", { detail: n })), s.length && !o.length && s[0].object.el.dispatchEvent(new CustomEvent("pointerout", { detail: n })), document.body.style.cursor = o.length ? "pointer" : "auto", r.copy(c);
  }, i = (n) => (p.setFromCamera(n, e), p.intersectObjects(t.children));
  [
    "click",
    "dblclick",
    "pointerdown",
    "pointerup",
    "contextmenu",
    "wheel"
  ].forEach(
    (n) => window.addEventListener(n, (s) => {
      const o = i(c);
      o.length && o[0].object.el.dispatchEvent(
        new CustomEvent(n, { detail: s })
      );
    })
  ), window.addEventListener("pointermove", u);
}
const I = (e, { expression: t }, { evaluate: c }) => {
  const r = t ? c(t) : {}, p = () => {
    var h;
    if (r.renderer instanceof v)
      return r.renderer;
    const m = new v();
    return ((h = r.renderer) == null ? void 0 : h.constructor.name) === "Object" && Object.assign(m, r.renderer), m;
  }, u = () => {
    var h;
    if (r.camera instanceof O)
      return r.camera;
    const m = new P(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1e3
    );
    return m.position.z = 5, ((h = r.camera) == null ? void 0 : h.constructor.name) === "Object" && Object.assign(m, r.camera), m;
  }, i = () => {
    var h;
    if (r.scene instanceof _)
      return r.scene;
    const m = new _();
    return ((h = r.scene) == null ? void 0 : h.constructor.name) === "Object" && Object.assign(m, r.scene), m;
  }, { scene: n, camera: s, renderer: o, raycaster: d } = {
    scene: i(),
    renderer: p(),
    camera: u()
  }, l = (() => {
    var h;
    const m = document.createElement("div");
    return m.style.width = "100%", m.style.height = "100%", [...e.querySelectorAll("*")].forEach((b) => {
      b._norska = null;
    }), (h = e.parentNode) == null || h.appendChild(m), m.appendChild(o.domElement), m;
  })(), w = () => {
    const { width: m, height: h } = l.getBoundingClientRect();
    s.aspect = m / h, s.updateProjectionMatrix(), o.setSize(m, h);
  };
  window.addEventListener("resize", w), A(s, n);
  const f = () => {
    requestAnimationFrame(f), o.render(n, s);
  };
  e.style.display = "none", w(), f(), window._norska = {
    scene: n,
    camera: s,
    renderer: o
  };
}, L = (e, { modifiers: t, expression: c }, { evaluateLater: r, effect: p }) => {
  const u = r(c);
  t = t.map((n) => n.replace(/-./g, (s) => s.charAt(1).toUpperCase())), console.log(t);
  const i = () => {
    u((n) => {
      var a;
      const s = e._norska;
      if (!s)
        return;
      let o = s;
      const d = t[t.length - 1];
      if (t.forEach((l) => {
        if (o[l] === void 0)
          throw new Error(`Property ${t.join(".")} does not exist`);
        l !== d && (o = o[l]);
      }), (a = o[d]) != null && a.set) {
        if (Array.isArray(n)) {
          o[d].set(...n);
          return;
        }
        o[d].set(n);
        return;
      }
      o[d] = n;
    });
  };
  p(() => {
    i();
  });
}, x = (e, { modifiers: t }, { effect: c, cleanup: r }) => {
  t = t.map((i) => i.replace(/-./g, (n) => n.charAt(1).toUpperCase()));
  const p = () => {
    var d;
    const i = (d = e.parentNode) == null ? void 0 : d._norska;
    if (!e._norska || !i)
      return;
    let n = i;
    const s = t.slice(1), o = s[s.length - 1];
    return s.forEach((a) => {
      if (n[a] === void 0)
        throw new Error(`Property ${s.join(".")} does not exist`);
      a !== o && (n = n[a]);
    }), [n, o];
  }, u = () => {
    var d;
    const i = p();
    if (!i)
      return;
    const [n, s] = i, o = e._norska;
    if ((d = n[s]) != null && d.set) {
      n[s].copy(o);
      return;
    }
    n[s] = o;
  };
  c(() => {
    e.parentNode.addEventListener("norska:update", u), u();
  }), r(() => e.parentNode.removeEventListener("norska:update", u));
}, k = Object.fromEntries(
  Object.entries(j).map(([e, t]) => [e.toLowerCase(), t])
), S = (e, { expression: t, modifiers: c }, { Alpine: r, effect: p, cleanup: u, evaluate: i }) => {
  const { scene: n } = window._norska, s = () => {
    var a;
    return (a = e.parentNode) == null ? void 0 : a._norska;
  }, o = () => {
    var f;
    const a = t ? i(t) : [], w = Array.isArray(a) ? new k[c[0]](...a) : a != null && a.constructor.name === "Object" ? new k[c[0]]({ ...a }) : new k[c[0]](a);
    if (e._norska = w, e._norska.el = e, !!w.isObject3D) {
      if (s()) {
        (f = e.parentNode) == null || f._norska.add(w);
        return;
      }
      n.add(w);
    }
  }, d = () => {
    const a = e._norska;
    if (!(!a || !a.isObject3D)) {
      if (s()) {
        a.parent.remove(e._norska);
        return;
      }
      n.remove(a);
    }
  };
  p(() => {
    o();
  }), u(() => d());
}, R = (e, { modifiers: t }) => {
  e._norska = window._norska[t[1]];
}, z = async (e, { expression: t }, { evaluateLater: c, effect: r, cleanup: p }) => {
  const { scene: u } = window._norska, i = c(t), n = () => {
    var d;
    return (d = e.parentNode) == null ? void 0 : d._norska;
  }, s = () => {
    i((d) => {
      var a;
      if (e._norska = d, n()) {
        (a = e.parentNode) == null || a._norska.add(e._norska);
        return;
      }
      u.add(e._norska);
    });
  }, o = () => {
    var d;
    if (n()) {
      (d = e.parentNode) == null || d._norska.remove(e._norska);
      return;
    }
    u.remove(e._norska);
  };
  r(() => s()), p(() => o());
}, g = {
  canvas: I,
  prop: L,
  attach: x,
  instance: S,
  three: R,
  primitive: z
}, $ = (e) => {
  e.magic("3", () => j);
}, q = (e) => {
  e.magic("frame", () => (t) => {
    const c = () => {
      t(), requestAnimationFrame(c);
    };
    c();
  });
}, F = (e) => {
  e.magic("i", (t) => t._norska), e.magic("three", () => window._norska);
}, H = (e) => {
  e.magic("load", () => async (t, c) => await t.loadAsync(c));
}, M = (e, t) => {
  e.magic("loaders", () => t);
}, T = (e) => {
  e.magic("math", () => N);
}, y = {
  three: $,
  math: T,
  frame: q,
  i: F,
  load: H,
  loaders: M
}, V = (e) => (t) => {
  const c = {
    prefix: "3",
    loaders: [],
    ...e
  };
  t.directive(c.prefix, (r, p, u) => {
    const i = p.modifiers[0];
    if (i.charAt(0) === "$") {
      p.modifiers[0] = i.slice(1), g.prop(r, p, u);
      return;
    }
    if (g[i]) {
      g[i](r, p, u);
      return;
    }
    g.instance(r, p, u);
  }), Object.keys(y).forEach((r) => {
    if (r === "loaders") {
      const p = {};
      c.loaders.forEach((u) => {
        p[u.name] = new u();
      }), y[r](t, p);
      return;
    }
    y[r](t);
  });
};
export {
  V as default
};
