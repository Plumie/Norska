import * as L from "three";
import { Object3D as z, Vector2 as N, Raycaster as D, WebGLRenderer as x, Camera as F, PerspectiveCamera as H, Scene as A, MathUtils as W } from "three";
const R = (n) => Array.isArray(n), E = (n) => n != null && n.constructor.name === "Object", p = (n) => n instanceof z, q = ["click", "dblclick", "pointerdown", "pointerup", "contextmenu", "wheel"], U = [
  "@click",
  "@dblclick",
  "@pointerdown",
  "@pointerup",
  ":click",
  ":dblclick",
  ":pointerdown",
  ":pointerup",
  "x-on:click",
  "x-on:dblclick",
  "x-on:pointerdown",
  "x-on:pointerup"
], u = new N(0), l = new N(0), $ = new D(), B = (n, t) => new CustomEvent(n, { detail: t }), G = (n) => {
  var t;
  return (t = n[0]) == null ? void 0 : t.object.el;
}, I = (n) => ($.setFromCamera(n, window._norska.camera), $.intersectObjects(window._norska.scene.children)), b = (n, t, e) => {
  const d = G(n);
  d && d.dispatchEvent(B(t, e));
}, K = (n) => n ? U.some((t) => n.object.el.hasAttribute(t)) : !1, X = (n) => {
  if (u.x = n.clientX / window.innerWidth * 2 - 1, u.y = -(n.clientY / window.innerHeight) * 2 + 1, !l.x && !l.y) {
    l.copy(u);
    return;
  }
  const t = I(l), e = I(u), d = {
    in: e.length && !t.length,
    out: t.length && !e.length,
    over: t.length && e.length
  };
  d.in && b(e, "pointerenter", n), d.out && b(t, "pointerout", n), d.over && b(e, "pointerover", n), document.body.style.cursor = K(e[0]) ? "pointer" : "auto", l.copy(u);
}, Y = () => {
  q.forEach(
    (n) => window.addEventListener(n, (t) => b(I(u), n, t))
  ), window.addEventListener("pointermove", X);
}, J = (n, { expression: t }, { effect: e, evaluateLater: d }) => {
  const f = d(t.length ? t : "false"), i = (r) => {
    if (r instanceof x)
      return r;
    const h = new x();
    return E(r) && Object.assign(h, r), h;
  }, o = (r) => {
    if (r instanceof F)
      return r;
    const h = new H(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1e3
    );
    return h.position.z = 5, E(r) && Object.assign(h, r), h;
  }, a = (r) => {
    if (r instanceof A)
      return r;
    const h = new A();
    return E(r) && Object.assign(h, r), h;
  }, c = () => {
    [...n.querySelectorAll("*")].forEach((r) => {
      r._norska = void 0;
    });
  }, s = () => {
    var h;
    const r = document.createElement("div");
    return r.style.setProperty("width", "100%"), r.style.setProperty("heigth", "100%"), (h = n.parentNode) == null || h.appendChild(r), r.appendChild(window._norska.renderer.domElement), r;
  }, w = (r) => {
    const { width: h, height: k } = r.getBoundingClientRect();
    window._norska.camera.aspect = h / k, window._norska.camera.updateProjectionMatrix(), window._norska.renderer.setSize(h, k);
  }, m = () => {
    const r = s();
    w(r), window.addEventListener("resize", () => w(r)), n.style.display = "none";
  }, g = () => {
    const { camera: r, renderer: h, scene: k, controls: v } = window._norska;
    requestAnimationFrame(g), h.render(k, r), v && v.update();
  };
  e(() => {
    f((r) => {
      window._norska = {
        scene: a(r.scene),
        camera: o(r.camera),
        renderer: i(r.renderer)
      }, m(), Y(), c(), g();
    });
  });
}, j = (n) => n._norska, _ = (n) => {
  var t;
  return (t = n.parentNode) == null ? void 0 : t._norska;
}, S = (n, t) => {
  n._norska = t, n._norska.el = n;
}, V = (n) => {
  n._norska = void 0;
}, M = (n, t) => {
  const e = _(n);
  if (p(e)) {
    e.add(t);
    return;
  }
  window._norska.scene.add(t);
}, T = (n, t) => {
  const e = _(n);
  if (p(e)) {
    e.remove(t);
    return;
  }
  window._norska.scene.remove(t);
}, C = (n) => n.map((t) => t.replace(/-./g, (e) => e.charAt(1).toUpperCase())), O = (n, t) => {
  const e = t[t.length - 1];
  let d = n;
  return t.forEach((f) => {
    if (d[f] === void 0)
      throw new Error(`Property: ${t.join(".")} does not exist`);
    f !== e && (d = d[f]);
  }), [d, e];
}, Q = (n, { modifiers: t, expression: e }, { evaluateLater: d, effect: f }) => {
  const i = d(e.length ? e : "true"), o = (a, c, s) => {
    var w, m, g, r;
    if ((w = a[c]) != null && w.set) {
      if (R(s)) {
        (m = a[c]) == null || m.set(...s);
        return;
      }
      if (E(s)) {
        (g = a[c]) == null || g.set({ ...s });
        return;
      }
      (r = a[c]) == null || r.set(s);
      return;
    }
    a[c] = s;
  };
  f(() => {
    i((a) => {
      const c = j(n);
      if (!c)
        throw new Error(`Property: instance not found for element ${n}`);
      const s = C(t), [w, m] = O(c, s);
      o(w, m, a);
    });
  });
}, Z = (n, { modifiers: t }, { effect: e, cleanup: d }) => {
  const f = (o, a, c) => {
    var s, w;
    if ((s = o[a]) != null && s.set) {
      (w = o[a]) == null || w.copy(c);
      return;
    }
    o[a] = c;
  }, i = (o, a) => {
    o[a] = null;
  };
  e(() => {
    const o = j(n), a = _(n);
    if (!o)
      throw new Error(`Attach: Instance not found for element ${n}`);
    if (!a)
      throw new Error(`Attach: Parent instance not found for element ${n}`);
    const c = C(t.slice(1)), [s, w] = O(a, c);
    f(s, w, o);
  }), d(() => {
    const o = _(n);
    if (!o)
      return;
    const a = C(t.slice(1)), [c, s] = O(o, a);
    i(c, s);
  });
}, nn = Object.fromEntries(
  Object.entries(L).map(([n, t]) => [n.toLowerCase(), t])
), tn = (n, { expression: t, modifiers: e }, { effect: d, cleanup: f, evaluateLater: i }) => {
  const o = i(t.length ? t : "false"), a = (c) => {
    const s = nn[e[0]];
    if (!s)
      throw new Error(`Instance: no constructor found for ${e[0]}`);
    return R(c) ? new s(...c) : E(c) ? new s({ ...c }) : c ? new s(c) : new s();
  };
  d(() => {
    o((c) => {
      const s = a(c);
      p(s) && M(n, s), S(n, s);
    });
  }), f(() => {
    const c = j(n);
    p(c) && T(n, c), V(n);
  });
}, en = (n, { modifiers: t }, { effect: e, cleanup: d }) => {
  e(() => {
    const f = window._norska[t[1]];
    if (!f)
      throw new Error(`Three: no global state property found for ${t[1]}`);
    n._norska = f;
  }), d(() => {
    n._norska = void 0;
  });
}, on = (n, { expression: t }, { evaluateLater: e, effect: d, cleanup: f }) => {
  const i = e(t.length ? t : "false");
  d(() => {
    i((o) => {
      if (!p(o))
        throw new Error(`Primitive: expected an instance of Object3D, got ${(o == null ? void 0 : o.type) ?? o} instead.`);
      S(n, o), M(n, o);
    });
  }), f(() => {
    const o = j(n);
    p(o) && T(n, o), V(n);
  });
}, y = {
  canvas: J,
  property: Q,
  attach: Z,
  instance: tn,
  three: en,
  primitive: on
}, rn = (n) => {
  n.magic("3", () => L), n.magic("three", () => window._norska);
}, cn = (n) => {
  n.magic("frame", () => (t) => {
    const e = () => {
      t(), requestAnimationFrame(e);
    };
    e();
  });
}, sn = (n) => {
  n.magic("i", (t) => t._norska);
}, an = (n) => {
  n.magic("load", () => async (t, e) => await t.loadAsync(e));
}, dn = (n, t) => {
  n.magic("loaders", () => t);
}, fn = (n) => {
  n.magic("math", () => W);
}, P = {
  three: rn,
  math: fn,
  frame: cn,
  i: sn,
  load: an,
  loaders: dn
}, hn = (n) => (t) => {
  const e = {
    prefix: "3",
    loaders: [],
    addons: [],
    ...n
  }, d = () => {
    const i = {};
    return e.loaders.forEach((o) => {
      i[o.name] = new o();
    }), i;
  }, f = () => e.addons.map((i) => i.prefix);
  t.directive(e.prefix, (i, o, a) => {
    const c = o.modifiers[0];
    if (!f().includes(c)) {
      if (c.charAt(0) === "$") {
        o.modifiers[0] = c.slice(1), y.property(i, o, a);
        return;
      }
      if (y[c]) {
        y[c](i, o, a);
        return;
      }
      y.instance(i, o, a);
      return;
    }
    e.addons.forEach((w) => {
      if (o.modifiers[0] === w.prefix) {
        const m = o.modifiers[1];
        w.directives && w.directives[m] && w.directives[m](i, o, a);
      }
    });
  }), Object.keys(P).forEach((i) => {
    if (i === "loaders") {
      P[i](t, d());
      return;
    }
    P[i](t);
  }), e.addons.forEach((i) => {
    i.magics && Object.keys(i.magics).forEach((o) => {
      i.magics[o](t);
    });
  });
};
export {
  hn as default
};
