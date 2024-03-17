import * as L from "three";
import { Object3D as N, Vector2 as R, Raycaster as W, WebGLRenderer as x, Camera as z, PerspectiveCamera as D, Scene as A, MathUtils as H } from "three";
const S = (n) => Array.isArray(n), E = (n) => n != null && n.constructor.name === "Object", p = (n) => n instanceof N, q = ["click", "dblclick", "pointerdown", "pointerup", "contextmenu", "wheel"], U = [
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
], u = new R(0), l = new R(0), $ = new W(), B = (n, t) => new CustomEvent(n, { detail: t }), G = (n) => {
  var t;
  return (t = n[0]) == null ? void 0 : t.object.el;
}, C = (n) => ($.setFromCamera(n, window._norska.camera), $.intersectObjects(window._norska.scene.children)), y = (n, t, e) => {
  const d = G(n);
  d && d.dispatchEvent(B(t, e));
}, K = (n) => n ? U.some((t) => {
  var e;
  return (e = n.object.el) == null ? void 0 : e.hasAttribute(t);
}) : !1, X = (n) => {
  if (u.x = n.clientX / window.innerWidth * 2 - 1, u.y = -(n.clientY / window.innerHeight) * 2 + 1, !l.x && !l.y) {
    l.copy(u);
    return;
  }
  const t = C(u), e = C(l), d = K(t[0]);
  document.body.style.cursor = d ? "pointer" : "auto";
  const f = {
    in: t.length && !e.length,
    out: e.length && !t.length,
    over: e.length && t.length
  };
  f.in && y(t, "pointerenter", n), f.out && y(e, "pointerout", n), f.over && y(t, "pointerover", n), l.copy(u);
}, Y = () => {
  q.forEach(
    (n) => window.addEventListener(n, (t) => y(C(u), n, t))
  ), window.addEventListener("pointermove", X);
}, J = (n, { expression: t }, { effect: e, evaluateLater: d }) => {
  const f = d(t.length ? t : "false"), i = (r) => {
    if (r instanceof x)
      return r;
    const h = new x();
    return E(r) && Object.assign(h, r), h;
  }, o = (r) => {
    if (r instanceof z)
      return r;
    const h = new D(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1e3
    );
    return h.position.z = 5, E(r) && Object.assign(h, r), h;
  }, s = (r) => {
    if (r instanceof A)
      return r;
    const h = new A();
    return E(r) && Object.assign(h, r), h;
  }, c = () => {
    [...n.querySelectorAll("*")].forEach((r) => {
      r._norska = void 0;
    });
  }, a = () => {
    var h;
    const r = document.createElement("div");
    return r.style.width = "100%", r.style.height = "100%", (h = n.parentNode) == null || h.appendChild(r), r.appendChild(window._norska.renderer.domElement), r;
  }, w = (r) => {
    const { width: h, height: k } = r.getBoundingClientRect();
    window._norska.camera.aspect = h / k, window._norska.camera.updateProjectionMatrix(), window._norska.renderer.setSize(h, k);
  }, m = () => {
    const r = a();
    w(r), window.addEventListener("resize", () => w(r)), n.style.display = "none";
  }, g = () => {
    const { camera: r, renderer: h, scene: k, controls: v } = window._norska;
    requestAnimationFrame(g), h.render(k, r), v && v.update();
  };
  e(() => {
    f((r) => {
      window._norska = {
        scene: s(r.scene),
        camera: o(r.camera),
        renderer: i(r.renderer)
      }, m(), Y(), c(), g();
    });
  });
}, j = (n) => n._norska, _ = (n) => {
  var t;
  return (t = n.parentNode) == null ? void 0 : t._norska;
}, V = (n, t) => {
  n._norska = t, n._norska.el = n;
}, F = (n) => {
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
}, I = (n) => n.map((t) => t.replace(/-./g, (e) => e.charAt(1).toUpperCase())), O = (n, t) => {
  const e = t[t.length - 1];
  let d = n;
  return t.forEach((f) => {
    if (d[f] === void 0)
      throw new Error(`Property: ${t.join(".")} does not exist`);
    f !== e && (d = d[f]);
  }), [d, e];
}, Q = (n, { modifiers: t, expression: e }, { evaluateLater: d, effect: f }) => {
  const i = d(e.length ? e : "true"), o = (s, c, a) => {
    var w, m, g, r;
    if ((w = s[c]) != null && w.set) {
      if (S(a)) {
        (m = s[c]) == null || m.set(...a);
        return;
      }
      if (E(a)) {
        (g = s[c]) == null || g.set({ ...a });
        return;
      }
      (r = s[c]) == null || r.set(a);
      return;
    }
    s[c] = a;
  };
  f(() => {
    i((s) => {
      const c = j(n);
      if (!c)
        throw new Error(`Property: instance not found for element ${n}`);
      const a = I(t), [w, m] = O(c, a);
      o(w, m, s);
    });
  });
}, Z = (n, { modifiers: t }, { effect: e, cleanup: d }) => {
  const f = (o, s, c) => {
    var a, w;
    if ((a = o[s]) != null && a.set) {
      (w = o[s]) == null || w.copy(c);
      return;
    }
    o[s] = c;
  }, i = (o, s) => {
    o[s] = null;
  };
  e(() => {
    const o = j(n), s = _(n);
    if (!o)
      throw new Error(`Attach: Instance not found for element ${n}`);
    if (!s)
      throw new Error(`Attach: Parent instance not found for element ${n}`);
    const c = I(t.slice(1)), [a, w] = O(s, c);
    f(a, w, o);
  }), d(() => {
    const o = _(n);
    if (!o)
      return;
    const s = I(t.slice(1)), [c, a] = O(o, s);
    i(c, a);
  });
}, nn = Object.fromEntries(
  Object.entries(L).map(([n, t]) => [n.toLowerCase(), t])
), tn = (n, { expression: t, modifiers: e }, { effect: d, cleanup: f, evaluateLater: i }) => {
  const o = i(t.length ? t : "false"), s = (c) => {
    const a = nn[e[0]];
    if (!a)
      throw new Error(`Instance: no constructor found for ${e[0]}`);
    return S(c) ? new a(...c) : E(c) ? new a({ ...c }) : c ? new a(c) : new a();
  };
  d(() => {
    o((c) => {
      const a = s(c);
      p(a) && M(n, a), V(n, a);
    });
  }), f(() => {
    const c = j(n);
    p(c) && T(n, c), F(n);
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
    const o = new N();
    V(n, o), M(n, o), i((s) => {
      if (!p(s))
        throw new Error(`Primitive: expected an instance of Object3D, got ${(s == null ? void 0 : s.type) ?? s} instead.`);
      o.add(s);
    });
  }), f(() => {
    const o = j(n);
    p(o) && T(n, o), F(n);
  });
}, b = {
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
  n.magic("load", () => async (t, e) => new Promise((f) => {
    t.load(e, (i) => {
      f(i);
    });
  }));
}, dn = (n, t) => {
  n.magic("loaders", () => t);
}, fn = (n) => {
  n.magic("math", () => H);
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
  }, f = () => e.addons.map((i) => i.namespace);
  t.directive(e.prefix, (i, o, s) => {
    const c = o.modifiers[0];
    if (!f().includes(c)) {
      if (c.charAt(0) === "$") {
        o.modifiers[0] = c.slice(1), b.property(i, o, s);
        return;
      }
      if (b[c]) {
        b[c](i, o, s);
        return;
      }
      b.instance(i, o, s);
      return;
    }
    e.addons.forEach((w) => {
      if (o.modifiers[0] === w.namespace) {
        const m = o.modifiers[1];
        w.directives && w.directives[m] && w.directives[m](i, o, s);
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
