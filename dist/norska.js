import * as u from "three";
import { Scene as k, PerspectiveCamera as _, WebGLRenderer as y } from "three";
const v = (e) => {
  const { camera: r } = window.Norska;
  if (!e.hasOwnProperty("_norska")) {
    e._norska = {};
    return;
  }
  e._norska = r;
}, l = (e) => {
  var d;
  const { scene: r, camera: a, renderer: s } = window.Norska = {
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
  const t = () => {
    requestAnimationFrame(t), window.Norska.controls && window.Norska.controls.update(), s.render(r, a);
  };
  t();
}, j = (e) => {
  const { scene: r } = window.Norska;
  if (!e.hasOwnProperty("_norska")) {
    e._norska = {};
    return;
  }
  e._norska = r;
}, E = (e, { modifiers: r, expression: a }, { evaluateLater: s, effect: n }) => {
  const i = s(a);
  n(() => {
    const o = e._norska;
    o && i((t) => {
      var w;
      const d = r[r.length - 1];
      let c = o;
      if (r.forEach((f) => {
        if (c[f] === void 0)
          throw new Error(`Property ${r.join(".")} does not exist`);
        f !== d && (c = c[f]);
      }), (w = c[d]) != null && w.set) {
        if (Array.isArray(t)) {
          c[d].set(...t);
          return;
        }
        c[d].set(t);
        return;
      }
      c[d] = t;
    });
  });
}, N = (e, { modifiers: r }, { effect: a }) => {
  a(() => {
    const s = e._norska, n = e.parentNode._norska;
    if (!s || !n)
      return;
    r.shift();
    const i = r[r.length - 1];
    let o = n;
    r.forEach((t) => {
      if (o[t] === void 0)
        throw new Error(`Property ${r.join(".")} does not exist`);
      t !== i && (o = o[t]);
    }), o[i] = s;
  });
}, x = (e, {}, { cleanup: r }, a) => {
  const { scene: s } = window.Norska, n = () => {
    var t;
    return (t = e.parentNode) == null ? void 0 : t._norska;
  }, i = () => {
    var t;
    if (e._norska = a, !!a.isObject3D) {
      if (n()) {
        (t = e.parentNode) == null || t._norska.add(e._norska);
        return;
      }
      s.add(e._norska);
    }
  }, o = () => {
    var t;
    if (a.isObject3D) {
      if (n()) {
        (t = e._norska) == null || t.parent.remove(e._norska);
        return;
      }
      s.remove(e._norska);
    }
  };
  e.hasOwnProperty("_norska") || (e._norska = {}), i(), r(() => o());
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
  e.magic("three", () => u), e.magic("3", () => window.Norska);
}, P = (e) => {
  e.magic("frame", () => (r) => {
    const a = () => {
      r(), requestAnimationFrame(a);
    };
    a();
  });
}, b = (e) => {
  e.magic("i", (r) => r._norska);
}, p = {
  three: O,
  frame: P,
  i: b
}, m = Object.fromEntries(
  Object.entries(u).map(([e, r]) => [e.toLowerCase(), r])
), A = (e) => (r) => {
  const a = {
    prefix: "3",
    ...e
  };
  r.directive(a.prefix, (s, n, i) => {
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
      const t = () => {
        if (m[n.modifiers[0]] === void 0)
          throw new Error(`The object ${n.modifiers[0]} does not exist in the three.js namespace`);
        return Array.isArray(o) ? new m[n.modifiers[0]](...o) : o != null && o.constructor.name === "Object" ? new m[n.modifiers[0]]({ ...o }) : new m[n.modifiers[0]](o);
      };
      h.instance(s, n, i, t());
    } catch (t) {
      console.error(t);
    }
  }), Object.keys(p).forEach((s) => {
    p[s](r);
  });
};
export {
  A as default
};
