import * as Ie from "three";
import { Scene as _n, PerspectiveCamera as an, WebGLRenderer as An, Color as $, Texture as gt, Loader as vn, LoaderUtils as xe, FileLoader as cn, SpotLight as Ln, PointLight as Rn, DirectionalLight as Pn, MeshBasicMaterial as Me, sRGBEncoding as _e, MeshPhysicalMaterial as Ae, Vector2 as C, Matrix4 as Oe, Vector3 as b, Quaternion as K, InstancedMesh as kn, Object3D as Ke, TangentSpaceNormalMap as In, TextureLoader as On, ImageBitmapLoader as Nn, InterleavedBuffer as Dn, InterleavedBufferAttribute as Cn, BufferAttribute as It, LinearFilter as ln, LinearMipmapLinearFilter as hn, RepeatWrapping as wt, PointsMaterial as jn, Material as ot, LineBasicMaterial as un, MeshStandardMaterial as Mt, DoubleSide as pn, PropertyBinding as Fn, BufferGeometry as yt, SkinnedMesh as Hn, Mesh as M, LineSegments as Un, Line as le, LineLoop as Gn, Points as Xn, Group as it, MathUtils as be, OrthographicCamera as Yn, InterpolateLinear as dn, AnimationClip as Kn, Bone as zn, Skeleton as Vn, TriangleFanDrawMode as fn, NearestFilter as Bn, NearestMipmapNearestFilter as Zn, LinearMipmapNearestFilter as Qn, NearestMipmapLinearFilter as qn, ClampToEdgeWrapping as Wn, MirroredRepeatWrapping as $n, InterpolateDiscrete as Jn, FrontSide as es, TriangleStripDrawMode as ts, VectorKeyframeTrack as ns, QuaternionKeyframeTrack as Ot, NumberKeyframeTrack as ss, Box3 as os, Sphere as is, Interpolant as rs, EventDispatcher as Ve, MOUSE as he, TOUCH as Le, Spherical as Et, Plane as as, Raycaster as mn, Euler as gn, CylinderGeometry as Q, BoxGeometry as V, Float32BufferAttribute as Nt, OctahedronGeometry as Qe, SphereGeometry as cs, TorusGeometry as Ce, PlaneGeometry as ls } from "three";
const hs = (l, { expression: s }, { evaluateLater: o, effect: e }) => {
  const { camera: t } = window.Norska, i = o(s);
  e(() => {
    i((n) => {
      n.position && t.position.set(...n.position), n.rotation && t.rotation.set(...n.rotation), n.lookAt && t.lookAt(...n.lookAt);
    });
  });
}, us = (l) => {
  const { scene: s, camera: o, renderer: e } = window.Norska = {
    scene: new _n(),
    camera: new an(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1e3
    ),
    renderer: new An(),
    controls: null
  }, t = document.createElement("div");
  t.style.width = "100%", t.style.height = "100%", [...l.querySelectorAll("*")].forEach((r) => {
    r._norska = {};
  }), l.insertAdjacentElement("beforebegin", t);
  const i = () => {
    const { width: r, height: c } = t.getBoundingClientRect();
    return { width: r, height: c };
  }, n = () => {
    const { width: r, height: c } = i();
    o.aspect = r / c, o.updateProjectionMatrix(), e.setSize(r, c);
  };
  window.addEventListener("resize", n), t.appendChild(e.domElement), l.style.display = "none", n();
  const a = () => {
    requestAnimationFrame(a), window.Norska.controls && window.Norska.controls.update(), e.render(s, o);
  };
  a();
}, ps = (l, { expression: s }, { evaluateLater: o, effect: e }) => {
  const { scene: t } = window.Norska, i = o(s);
  e(() => {
    i(({ background: n }) => {
      n && (n instanceof $ && t.background.set(n), n instanceof gt ? t.background = n : t.background = new $(n));
    });
  });
};
class ds extends vn {
  constructor(s) {
    super(s), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(o) {
      return new ys(o);
    }), this.register(function(o) {
      return new _s(o);
    }), this.register(function(o) {
      return new As(o);
    }), this.register(function(o) {
      return new bs(o);
    }), this.register(function(o) {
      return new Ts(o);
    }), this.register(function(o) {
      return new Ss(o);
    }), this.register(function(o) {
      return new Ms(o);
    }), this.register(function(o) {
      return new ws(o);
    }), this.register(function(o) {
      return new xs(o);
    }), this.register(function(o) {
      return new Es(o);
    }), this.register(function(o) {
      return new ms(o);
    }), this.register(function(o) {
      return new vs(o);
    }), this.register(function(o) {
      return new Ls(o);
    });
  }
  load(s, o, e, t) {
    const i = this;
    let n;
    this.resourcePath !== "" ? n = this.resourcePath : this.path !== "" ? n = this.path : n = xe.extractUrlBase(s), this.manager.itemStart(s);
    const a = function(c) {
      t ? t(c) : console.error(c), i.manager.itemError(s), i.manager.itemEnd(s);
    }, r = new cn(this.manager);
    r.setPath(this.path), r.setResponseType("arraybuffer"), r.setRequestHeader(this.requestHeader), r.setWithCredentials(this.withCredentials), r.load(s, function(c) {
      try {
        i.parse(c, n, function(p) {
          o(p), i.manager.itemEnd(s);
        }, a);
      } catch (p) {
        a(p);
      }
    }, e, a);
  }
  setDRACOLoader(s) {
    return this.dracoLoader = s, this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(s) {
    return this.ktx2Loader = s, this;
  }
  setMeshoptDecoder(s) {
    return this.meshoptDecoder = s, this;
  }
  register(s) {
    return this.pluginCallbacks.indexOf(s) === -1 && this.pluginCallbacks.push(s), this;
  }
  unregister(s) {
    return this.pluginCallbacks.indexOf(s) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(s), 1), this;
  }
  parse(s, o, e, t) {
    let i;
    const n = {}, a = {};
    if (typeof s == "string")
      i = JSON.parse(s);
    else if (s instanceof ArrayBuffer)
      if (xe.decodeText(new Uint8Array(s, 0, 4)) === wn) {
        try {
          n[L.KHR_BINARY_GLTF] = new Rs(s);
        } catch (p) {
          t && t(p);
          return;
        }
        i = JSON.parse(n[L.KHR_BINARY_GLTF].content);
      } else
        i = JSON.parse(xe.decodeText(new Uint8Array(s)));
    else
      i = s;
    if (i.asset === void 0 || i.asset.version[0] < 2) {
      t && t(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const r = new Xs(i, {
      path: o || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    r.fileLoader.setRequestHeader(this.requestHeader);
    for (let c = 0; c < this.pluginCallbacks.length; c++) {
      const p = this.pluginCallbacks[c](r);
      a[p.name] = p, n[p.name] = !0;
    }
    if (i.extensionsUsed)
      for (let c = 0; c < i.extensionsUsed.length; ++c) {
        const p = i.extensionsUsed[c], h = i.extensionsRequired || [];
        switch (p) {
          case L.KHR_MATERIALS_UNLIT:
            n[p] = new gs();
            break;
          case L.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
            n[p] = new Is();
            break;
          case L.KHR_DRACO_MESH_COMPRESSION:
            n[p] = new Ps(i, this.dracoLoader);
            break;
          case L.KHR_TEXTURE_TRANSFORM:
            n[p] = new ks();
            break;
          case L.KHR_MESH_QUANTIZATION:
            n[p] = new Os();
            break;
          default:
            h.indexOf(p) >= 0 && a[p] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + p + '".');
        }
      }
    r.setExtensions(n), r.setPlugins(a), r.parse(e, t);
  }
  parseAsync(s, o) {
    const e = this;
    return new Promise(function(t, i) {
      e.parse(s, o, t, i);
    });
  }
}
function fs() {
  let l = {};
  return {
    get: function(s) {
      return l[s];
    },
    add: function(s, o) {
      l[s] = o;
    },
    remove: function(s) {
      delete l[s];
    },
    removeAll: function() {
      l = {};
    }
  };
}
const L = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class ms {
  constructor(s) {
    this.parser = s, this.name = L.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const s = this.parser, o = this.parser.json.nodes || [];
    for (let e = 0, t = o.length; e < t; e++) {
      const i = o[e];
      i.extensions && i.extensions[this.name] && i.extensions[this.name].light !== void 0 && s._addNodeRef(this.cache, i.extensions[this.name].light);
    }
  }
  _loadLight(s) {
    const o = this.parser, e = "light:" + s;
    let t = o.cache.get(e);
    if (t)
      return t;
    const i = o.json, r = ((i.extensions && i.extensions[this.name] || {}).lights || [])[s];
    let c;
    const p = new $(16777215);
    r.color !== void 0 && p.fromArray(r.color);
    const h = r.range !== void 0 ? r.range : 0;
    switch (r.type) {
      case "directional":
        c = new Pn(p), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new Rn(p), c.distance = h;
        break;
      case "spot":
        c = new Ln(p), c.distance = h, r.spot = r.spot || {}, r.spot.innerConeAngle = r.spot.innerConeAngle !== void 0 ? r.spot.innerConeAngle : 0, r.spot.outerConeAngle = r.spot.outerConeAngle !== void 0 ? r.spot.outerConeAngle : Math.PI / 4, c.angle = r.spot.outerConeAngle, c.penumbra = 1 - r.spot.innerConeAngle / r.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + r.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, r.intensity !== void 0 && (c.intensity = r.intensity), c.name = o.createUniqueName(r.name || "light_" + s), t = Promise.resolve(c), o.cache.add(e, t), t;
  }
  createNodeAttachment(s) {
    const o = this, e = this.parser, i = e.json.nodes[s], a = (i.extensions && i.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(r) {
      return e._getNodeRef(o.cache, a, r);
    });
  }
}
class gs {
  constructor() {
    this.name = L.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Me;
  }
  extendParams(s, o, e) {
    const t = [];
    s.color = new $(1, 1, 1), s.opacity = 1;
    const i = o.pbrMetallicRoughness;
    if (i) {
      if (Array.isArray(i.baseColorFactor)) {
        const n = i.baseColorFactor;
        s.color.fromArray(n), s.opacity = n[3];
      }
      i.baseColorTexture !== void 0 && t.push(e.assignTexture(s, "map", i.baseColorTexture, _e));
    }
    return Promise.all(t);
  }
}
class ws {
  constructor(s) {
    this.parser = s, this.name = L.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(s, o) {
    const t = this.parser.json.materials[s];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const i = t.extensions[this.name].emissiveStrength;
    return i !== void 0 && (o.emissiveIntensity = i), Promise.resolve();
  }
}
class ys {
  constructor(s) {
    this.parser = s, this.name = L.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(s) {
    const e = this.parser.json.materials[s];
    return !e.extensions || !e.extensions[this.name] ? null : Ae;
  }
  extendMaterialParams(s, o) {
    const e = this.parser, t = e.json.materials[s];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const i = [], n = t.extensions[this.name];
    if (n.clearcoatFactor !== void 0 && (o.clearcoat = n.clearcoatFactor), n.clearcoatTexture !== void 0 && i.push(e.assignTexture(o, "clearcoatMap", n.clearcoatTexture)), n.clearcoatRoughnessFactor !== void 0 && (o.clearcoatRoughness = n.clearcoatRoughnessFactor), n.clearcoatRoughnessTexture !== void 0 && i.push(e.assignTexture(o, "clearcoatRoughnessMap", n.clearcoatRoughnessTexture)), n.clearcoatNormalTexture !== void 0 && (i.push(e.assignTexture(o, "clearcoatNormalMap", n.clearcoatNormalTexture)), n.clearcoatNormalTexture.scale !== void 0)) {
      const a = n.clearcoatNormalTexture.scale;
      o.clearcoatNormalScale = new C(a, a);
    }
    return Promise.all(i);
  }
}
class Es {
  constructor(s) {
    this.parser = s, this.name = L.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(s) {
    const e = this.parser.json.materials[s];
    return !e.extensions || !e.extensions[this.name] ? null : Ae;
  }
  extendMaterialParams(s, o) {
    const e = this.parser, t = e.json.materials[s];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const i = [], n = t.extensions[this.name];
    return n.iridescenceFactor !== void 0 && (o.iridescence = n.iridescenceFactor), n.iridescenceTexture !== void 0 && i.push(e.assignTexture(o, "iridescenceMap", n.iridescenceTexture)), n.iridescenceIor !== void 0 && (o.iridescenceIOR = n.iridescenceIor), o.iridescenceThicknessRange === void 0 && (o.iridescenceThicknessRange = [100, 400]), n.iridescenceThicknessMinimum !== void 0 && (o.iridescenceThicknessRange[0] = n.iridescenceThicknessMinimum), n.iridescenceThicknessMaximum !== void 0 && (o.iridescenceThicknessRange[1] = n.iridescenceThicknessMaximum), n.iridescenceThicknessTexture !== void 0 && i.push(e.assignTexture(o, "iridescenceThicknessMap", n.iridescenceThicknessTexture)), Promise.all(i);
  }
}
class bs {
  constructor(s) {
    this.parser = s, this.name = L.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(s) {
    const e = this.parser.json.materials[s];
    return !e.extensions || !e.extensions[this.name] ? null : Ae;
  }
  extendMaterialParams(s, o) {
    const e = this.parser, t = e.json.materials[s];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const i = [];
    o.sheenColor = new $(0, 0, 0), o.sheenRoughness = 0, o.sheen = 1;
    const n = t.extensions[this.name];
    return n.sheenColorFactor !== void 0 && o.sheenColor.fromArray(n.sheenColorFactor), n.sheenRoughnessFactor !== void 0 && (o.sheenRoughness = n.sheenRoughnessFactor), n.sheenColorTexture !== void 0 && i.push(e.assignTexture(o, "sheenColorMap", n.sheenColorTexture, _e)), n.sheenRoughnessTexture !== void 0 && i.push(e.assignTexture(o, "sheenRoughnessMap", n.sheenRoughnessTexture)), Promise.all(i);
  }
}
class Ts {
  constructor(s) {
    this.parser = s, this.name = L.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(s) {
    const e = this.parser.json.materials[s];
    return !e.extensions || !e.extensions[this.name] ? null : Ae;
  }
  extendMaterialParams(s, o) {
    const e = this.parser, t = e.json.materials[s];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const i = [], n = t.extensions[this.name];
    return n.transmissionFactor !== void 0 && (o.transmission = n.transmissionFactor), n.transmissionTexture !== void 0 && i.push(e.assignTexture(o, "transmissionMap", n.transmissionTexture)), Promise.all(i);
  }
}
class Ss {
  constructor(s) {
    this.parser = s, this.name = L.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(s) {
    const e = this.parser.json.materials[s];
    return !e.extensions || !e.extensions[this.name] ? null : Ae;
  }
  extendMaterialParams(s, o) {
    const e = this.parser, t = e.json.materials[s];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const i = [], n = t.extensions[this.name];
    o.thickness = n.thicknessFactor !== void 0 ? n.thicknessFactor : 0, n.thicknessTexture !== void 0 && i.push(e.assignTexture(o, "thicknessMap", n.thicknessTexture)), o.attenuationDistance = n.attenuationDistance || 1 / 0;
    const a = n.attenuationColor || [1, 1, 1];
    return o.attenuationColor = new $(a[0], a[1], a[2]), Promise.all(i);
  }
}
class Ms {
  constructor(s) {
    this.parser = s, this.name = L.KHR_MATERIALS_IOR;
  }
  getMaterialType(s) {
    const e = this.parser.json.materials[s];
    return !e.extensions || !e.extensions[this.name] ? null : Ae;
  }
  extendMaterialParams(s, o) {
    const t = this.parser.json.materials[s];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const i = t.extensions[this.name];
    return o.ior = i.ior !== void 0 ? i.ior : 1.5, Promise.resolve();
  }
}
class xs {
  constructor(s) {
    this.parser = s, this.name = L.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(s) {
    const e = this.parser.json.materials[s];
    return !e.extensions || !e.extensions[this.name] ? null : Ae;
  }
  extendMaterialParams(s, o) {
    const e = this.parser, t = e.json.materials[s];
    if (!t.extensions || !t.extensions[this.name])
      return Promise.resolve();
    const i = [], n = t.extensions[this.name];
    o.specularIntensity = n.specularFactor !== void 0 ? n.specularFactor : 1, n.specularTexture !== void 0 && i.push(e.assignTexture(o, "specularIntensityMap", n.specularTexture));
    const a = n.specularColorFactor || [1, 1, 1];
    return o.specularColor = new $(a[0], a[1], a[2]), n.specularColorTexture !== void 0 && i.push(e.assignTexture(o, "specularColorMap", n.specularColorTexture, _e)), Promise.all(i);
  }
}
class _s {
  constructor(s) {
    this.parser = s, this.name = L.KHR_TEXTURE_BASISU;
  }
  loadTexture(s) {
    const o = this.parser, e = o.json, t = e.textures[s];
    if (!t.extensions || !t.extensions[this.name])
      return null;
    const i = t.extensions[this.name], n = o.options.ktx2Loader;
    if (!n) {
      if (e.extensionsRequired && e.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return o.loadTextureImage(s, i.source, n);
  }
}
class As {
  constructor(s) {
    this.parser = s, this.name = L.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(s) {
    const o = this.name, e = this.parser, t = e.json, i = t.textures[s];
    if (!i.extensions || !i.extensions[o])
      return null;
    const n = i.extensions[o], a = t.images[n.source];
    let r = e.textureLoader;
    if (a.uri) {
      const c = e.options.manager.getHandler(a.uri);
      c !== null && (r = c);
    }
    return this.detectSupport().then(function(c) {
      if (c)
        return e.loadTextureImage(s, n.source, r);
      if (t.extensionsRequired && t.extensionsRequired.indexOf(o) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return e.loadTexture(s);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(s) {
      const o = new Image();
      o.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", o.onload = o.onerror = function() {
        s(o.height === 1);
      };
    })), this.isSupported;
  }
}
class vs {
  constructor(s) {
    this.name = L.EXT_MESHOPT_COMPRESSION, this.parser = s;
  }
  loadBufferView(s) {
    const o = this.parser.json, e = o.bufferViews[s];
    if (e.extensions && e.extensions[this.name]) {
      const t = e.extensions[this.name], i = this.parser.getDependency("buffer", t.buffer), n = this.parser.options.meshoptDecoder;
      if (!n || !n.supported) {
        if (o.extensionsRequired && o.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return i.then(function(a) {
        const r = t.byteOffset || 0, c = t.byteLength || 0, p = t.count, h = t.byteStride, d = new Uint8Array(a, r, c);
        return n.decodeGltfBufferAsync ? n.decodeGltfBufferAsync(p, h, d, t.mode, t.filter).then(function(f) {
          return f.buffer;
        }) : n.ready.then(function() {
          const f = new ArrayBuffer(p * h);
          return n.decodeGltfBuffer(new Uint8Array(f), p, h, d, t.mode, t.filter), f;
        });
      });
    } else
      return null;
  }
}
class Ls {
  constructor(s) {
    this.name = L.EXT_MESH_GPU_INSTANCING, this.parser = s;
  }
  createNodeMesh(s) {
    const o = this.parser.json, e = o.nodes[s];
    if (!e.extensions || !e.extensions[this.name] || e.mesh === void 0)
      return null;
    const t = o.meshes[e.mesh];
    for (const c of t.primitives)
      if (c.mode !== te.TRIANGLES && c.mode !== te.TRIANGLE_STRIP && c.mode !== te.TRIANGLE_FAN && c.mode !== void 0)
        return null;
    const n = e.extensions[this.name].attributes, a = [], r = {};
    for (const c in n)
      a.push(this.parser.getDependency("accessor", n[c]).then((p) => (r[c] = p, r[c])));
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(s)), Promise.all(a).then((c) => {
      const p = c.pop(), h = p.isGroup ? p.children : [p], d = c[0].count, f = [];
      for (const y of h) {
        const w = new Oe(), T = new b(), g = new K(), S = new b(1, 1, 1), x = new kn(y.geometry, y.material, d);
        for (let v = 0; v < d; v++)
          r.TRANSLATION && T.fromBufferAttribute(r.TRANSLATION, v), r.ROTATION && g.fromBufferAttribute(r.ROTATION, v), r.SCALE && S.fromBufferAttribute(r.SCALE, v), x.setMatrixAt(v, w.compose(T, g, S));
        for (const v in r)
          v !== "TRANSLATION" && v !== "ROTATION" && v !== "SCALE" && y.geometry.setAttribute(v, r[v]);
        Ke.prototype.copy.call(x, y), x.frustumCulled = !1, this.parser.assignFinalMaterial(x), f.push(x);
      }
      return p.isGroup ? (p.clear(), p.add(...f), p) : f[0];
    }));
  }
}
const wn = "glTF", je = 12, Dt = { JSON: 1313821514, BIN: 5130562 };
class Rs {
  constructor(s) {
    this.name = L.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const o = new DataView(s, 0, je);
    if (this.header = {
      magic: xe.decodeText(new Uint8Array(s.slice(0, 4))),
      version: o.getUint32(4, !0),
      length: o.getUint32(8, !0)
    }, this.header.magic !== wn)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const e = this.header.length - je, t = new DataView(s, je);
    let i = 0;
    for (; i < e; ) {
      const n = t.getUint32(i, !0);
      i += 4;
      const a = t.getUint32(i, !0);
      if (i += 4, a === Dt.JSON) {
        const r = new Uint8Array(s, je + i, n);
        this.content = xe.decodeText(r);
      } else if (a === Dt.BIN) {
        const r = je + i;
        this.body = s.slice(r, r + n);
      }
      i += n;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Ps {
  constructor(s, o) {
    if (!o)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = L.KHR_DRACO_MESH_COMPRESSION, this.json = s, this.dracoLoader = o, this.dracoLoader.preload();
  }
  decodePrimitive(s, o) {
    const e = this.json, t = this.dracoLoader, i = s.extensions[this.name].bufferView, n = s.extensions[this.name].attributes, a = {}, r = {}, c = {};
    for (const p in n) {
      const h = Tt[p] || p.toLowerCase();
      a[h] = n[p];
    }
    for (const p in s.attributes) {
      const h = Tt[p] || p.toLowerCase();
      if (n[p] !== void 0) {
        const d = e.accessors[s.attributes[p]], f = ze[d.componentType];
        c[h] = f.name, r[h] = d.normalized === !0;
      }
    }
    return o.getDependency("bufferView", i).then(function(p) {
      return new Promise(function(h) {
        t.decodeDracoFile(p, function(d) {
          for (const f in d.attributes) {
            const y = d.attributes[f], w = r[f];
            w !== void 0 && (y.normalized = w);
          }
          h(d);
        }, a, c);
      });
    });
  }
}
class ks {
  constructor() {
    this.name = L.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(s, o) {
    return o.texCoord !== void 0 && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), o.offset === void 0 && o.rotation === void 0 && o.scale === void 0 || (s = s.clone(), o.offset !== void 0 && s.offset.fromArray(o.offset), o.rotation !== void 0 && (s.rotation = o.rotation), o.scale !== void 0 && s.repeat.fromArray(o.scale), s.needsUpdate = !0), s;
  }
}
class bt extends Mt {
  constructor(s) {
    super(), this.isGLTFSpecularGlossinessMaterial = !0;
    const o = [
      "#ifdef USE_SPECULARMAP",
      "	uniform sampler2D specularMap;",
      "#endif"
    ].join(`
`), e = [
      "#ifdef USE_GLOSSINESSMAP",
      "	uniform sampler2D glossinessMap;",
      "#endif"
    ].join(`
`), t = [
      "vec3 specularFactor = specular;",
      "#ifdef USE_SPECULARMAP",
      "	vec4 texelSpecular = texture2D( specularMap, vUv );",
      "	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture",
      "	specularFactor *= texelSpecular.rgb;",
      "#endif"
    ].join(`
`), i = [
      "float glossinessFactor = glossiness;",
      "#ifdef USE_GLOSSINESSMAP",
      "	vec4 texelGlossiness = texture2D( glossinessMap, vUv );",
      "	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture",
      "	glossinessFactor *= texelGlossiness.a;",
      "#endif"
    ].join(`
`), n = [
      "PhysicalMaterial material;",
      "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );",
      "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );",
      "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );",
      "material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.",
      "material.roughness += geometryRoughness;",
      "material.roughness = min( material.roughness, 1.0 );",
      "material.specularColor = specularFactor;"
    ].join(`
`), a = {
      specular: { value: new $().setHex(16777215) },
      glossiness: { value: 1 },
      specularMap: { value: null },
      glossinessMap: { value: null }
    };
    this._extraUniforms = a, this.onBeforeCompile = function(r) {
      for (const c in a)
        r.uniforms[c] = a[c];
      r.fragmentShader = r.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", o).replace("#include <metalnessmap_pars_fragment>", e).replace("#include <roughnessmap_fragment>", t).replace("#include <metalnessmap_fragment>", i).replace("#include <lights_physical_fragment>", n);
    }, Object.defineProperties(this, {
      specular: {
        get: function() {
          return a.specular.value;
        },
        set: function(r) {
          a.specular.value = r;
        }
      },
      specularMap: {
        get: function() {
          return a.specularMap.value;
        },
        set: function(r) {
          a.specularMap.value = r, r ? this.defines.USE_SPECULARMAP = "" : delete this.defines.USE_SPECULARMAP;
        }
      },
      glossiness: {
        get: function() {
          return a.glossiness.value;
        },
        set: function(r) {
          a.glossiness.value = r;
        }
      },
      glossinessMap: {
        get: function() {
          return a.glossinessMap.value;
        },
        set: function(r) {
          a.glossinessMap.value = r, r ? (this.defines.USE_GLOSSINESSMAP = "", this.defines.USE_UV = "") : (delete this.defines.USE_GLOSSINESSMAP, delete this.defines.USE_UV);
        }
      }
    }), delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this.setValues(s);
  }
  copy(s) {
    return super.copy(s), this.specularMap = s.specularMap, this.specular.copy(s.specular), this.glossinessMap = s.glossinessMap, this.glossiness = s.glossiness, delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this;
  }
}
class Is {
  constructor() {
    this.name = L.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS, this.specularGlossinessParams = [
      "color",
      "map",
      "lightMap",
      "lightMapIntensity",
      "aoMap",
      "aoMapIntensity",
      "emissive",
      "emissiveIntensity",
      "emissiveMap",
      "bumpMap",
      "bumpScale",
      "normalMap",
      "normalMapType",
      "displacementMap",
      "displacementScale",
      "displacementBias",
      "specularMap",
      "specular",
      "glossinessMap",
      "glossiness",
      "alphaMap",
      "envMap",
      "envMapIntensity"
    ];
  }
  getMaterialType() {
    return bt;
  }
  extendParams(s, o, e) {
    const t = o.extensions[this.name];
    s.color = new $(1, 1, 1), s.opacity = 1;
    const i = [];
    if (Array.isArray(t.diffuseFactor)) {
      const n = t.diffuseFactor;
      s.color.fromArray(n), s.opacity = n[3];
    }
    if (t.diffuseTexture !== void 0 && i.push(e.assignTexture(s, "map", t.diffuseTexture, _e)), s.emissive = new $(0, 0, 0), s.glossiness = t.glossinessFactor !== void 0 ? t.glossinessFactor : 1, s.specular = new $(1, 1, 1), Array.isArray(t.specularFactor) && s.specular.fromArray(t.specularFactor), t.specularGlossinessTexture !== void 0) {
      const n = t.specularGlossinessTexture;
      i.push(e.assignTexture(s, "glossinessMap", n)), i.push(e.assignTexture(s, "specularMap", n, _e));
    }
    return Promise.all(i);
  }
  createMaterial(s) {
    const o = new bt(s);
    return o.fog = !0, o.color = s.color, o.map = s.map === void 0 ? null : s.map, o.lightMap = null, o.lightMapIntensity = 1, o.aoMap = s.aoMap === void 0 ? null : s.aoMap, o.aoMapIntensity = 1, o.emissive = s.emissive, o.emissiveIntensity = s.emissiveIntensity === void 0 ? 1 : s.emissiveIntensity, o.emissiveMap = s.emissiveMap === void 0 ? null : s.emissiveMap, o.bumpMap = s.bumpMap === void 0 ? null : s.bumpMap, o.bumpScale = 1, o.normalMap = s.normalMap === void 0 ? null : s.normalMap, o.normalMapType = In, s.normalScale && (o.normalScale = s.normalScale), o.displacementMap = null, o.displacementScale = 1, o.displacementBias = 0, o.specularMap = s.specularMap === void 0 ? null : s.specularMap, o.specular = s.specular, o.glossinessMap = s.glossinessMap === void 0 ? null : s.glossinessMap, o.glossiness = s.glossiness, o.alphaMap = null, o.envMap = s.envMap === void 0 ? null : s.envMap, o.envMapIntensity = 1, o;
  }
}
class Os {
  constructor() {
    this.name = L.KHR_MESH_QUANTIZATION;
  }
}
class yn extends rs {
  constructor(s, o, e, t) {
    super(s, o, e, t);
  }
  copySampleValue_(s) {
    const o = this.resultBuffer, e = this.sampleValues, t = this.valueSize, i = s * t * 3 + t;
    for (let n = 0; n !== t; n++)
      o[n] = e[i + n];
    return o;
  }
  interpolate_(s, o, e, t) {
    const i = this.resultBuffer, n = this.sampleValues, a = this.valueSize, r = a * 2, c = a * 3, p = t - o, h = (e - o) / p, d = h * h, f = d * h, y = s * c, w = y - c, T = -2 * f + 3 * d, g = f - d, S = 1 - T, x = g - d + h;
    for (let v = 0; v !== a; v++) {
      const E = n[w + v + a], N = n[w + v + r] * p, k = n[y + v + a], j = n[y + v] * p;
      i[v] = S * E + x * N + T * k + g * j;
    }
    return i;
  }
}
const Ns = new K();
class Ds extends yn {
  interpolate_(s, o, e, t) {
    const i = super.interpolate_(s, o, e, t);
    return Ns.fromArray(i).normalize().toArray(i), i;
  }
}
const te = {
  FLOAT: 5126,
  //FLOAT_MAT2: 35674,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  LINEAR: 9729,
  REPEAT: 10497,
  SAMPLER_2D: 35678,
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  UNSIGNED_BYTE: 5121,
  UNSIGNED_SHORT: 5123
}, ze = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, Ct = {
  9728: Bn,
  9729: ln,
  9984: Zn,
  9985: Qn,
  9986: qn,
  9987: hn
}, jt = {
  33071: Wn,
  33648: $n,
  10497: wt
}, Ft = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Tt = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv2",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, me = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Cs = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: dn,
  STEP: Jn
}, rt = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function js(l) {
  return l.DefaultMaterial === void 0 && (l.DefaultMaterial = new Mt({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: es
  })), l.DefaultMaterial;
}
function Fe(l, s, o) {
  for (const e in o.extensions)
    l[e] === void 0 && (s.userData.gltfExtensions = s.userData.gltfExtensions || {}, s.userData.gltfExtensions[e] = o.extensions[e]);
}
function Te(l, s) {
  s.extras !== void 0 && (typeof s.extras == "object" ? Object.assign(l.userData, s.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + s.extras));
}
function Fs(l, s, o) {
  let e = !1, t = !1, i = !1;
  for (let c = 0, p = s.length; c < p; c++) {
    const h = s[c];
    if (h.POSITION !== void 0 && (e = !0), h.NORMAL !== void 0 && (t = !0), h.COLOR_0 !== void 0 && (i = !0), e && t && i)
      break;
  }
  if (!e && !t && !i)
    return Promise.resolve(l);
  const n = [], a = [], r = [];
  for (let c = 0, p = s.length; c < p; c++) {
    const h = s[c];
    if (e) {
      const d = h.POSITION !== void 0 ? o.getDependency("accessor", h.POSITION) : l.attributes.position;
      n.push(d);
    }
    if (t) {
      const d = h.NORMAL !== void 0 ? o.getDependency("accessor", h.NORMAL) : l.attributes.normal;
      a.push(d);
    }
    if (i) {
      const d = h.COLOR_0 !== void 0 ? o.getDependency("accessor", h.COLOR_0) : l.attributes.color;
      r.push(d);
    }
  }
  return Promise.all([
    Promise.all(n),
    Promise.all(a),
    Promise.all(r)
  ]).then(function(c) {
    const p = c[0], h = c[1], d = c[2];
    return e && (l.morphAttributes.position = p), t && (l.morphAttributes.normal = h), i && (l.morphAttributes.color = d), l.morphTargetsRelative = !0, l;
  });
}
function Hs(l, s) {
  if (l.updateMorphTargets(), s.weights !== void 0)
    for (let o = 0, e = s.weights.length; o < e; o++)
      l.morphTargetInfluences[o] = s.weights[o];
  if (s.extras && Array.isArray(s.extras.targetNames)) {
    const o = s.extras.targetNames;
    if (l.morphTargetInfluences.length === o.length) {
      l.morphTargetDictionary = {};
      for (let e = 0, t = o.length; e < t; e++)
        l.morphTargetDictionary[o[e]] = e;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Us(l) {
  const s = l.extensions && l.extensions[L.KHR_DRACO_MESH_COMPRESSION];
  let o;
  return s ? o = "draco:" + s.bufferView + ":" + s.indices + ":" + Ht(s.attributes) : o = l.indices + ":" + Ht(l.attributes) + ":" + l.mode, o;
}
function Ht(l) {
  let s = "";
  const o = Object.keys(l).sort();
  for (let e = 0, t = o.length; e < t; e++)
    s += o[e] + ":" + l[o[e]] + ";";
  return s;
}
function St(l) {
  switch (l) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function Gs(l) {
  return l.search(/\.jpe?g($|\?)/i) > 0 || l.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : l.search(/\.webp($|\?)/i) > 0 || l.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
class Xs {
  constructor(s = {}, o = {}) {
    this.json = s, this.extensions = {}, this.plugins = {}, this.options = o, this.cache = new fs(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    const e = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, t = navigator.userAgent.indexOf("Firefox") > -1, i = t ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1;
    typeof createImageBitmap > "u" || e || t && i < 98 ? this.textureLoader = new On(this.options.manager) : this.textureLoader = new Nn(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new cn(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(s) {
    this.extensions = s;
  }
  setPlugins(s) {
    this.plugins = s;
  }
  parse(s, o) {
    const e = this, t = this.json, i = this.extensions;
    this.cache.removeAll(), this._invokeAll(function(n) {
      return n._markDefs && n._markDefs();
    }), Promise.all(this._invokeAll(function(n) {
      return n.beforeRoot && n.beforeRoot();
    })).then(function() {
      return Promise.all([
        e.getDependencies("scene"),
        e.getDependencies("animation"),
        e.getDependencies("camera")
      ]);
    }).then(function(n) {
      const a = {
        scene: n[0][t.scene || 0],
        scenes: n[0],
        animations: n[1],
        cameras: n[2],
        asset: t.asset,
        parser: e,
        userData: {}
      };
      Fe(i, a, t), Te(a, t), Promise.all(e._invokeAll(function(r) {
        return r.afterRoot && r.afterRoot(a);
      })).then(function() {
        s(a);
      });
    }).catch(o);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const s = this.json.nodes || [], o = this.json.skins || [], e = this.json.meshes || [];
    for (let t = 0, i = o.length; t < i; t++) {
      const n = o[t].joints;
      for (let a = 0, r = n.length; a < r; a++)
        s[n[a]].isBone = !0;
    }
    for (let t = 0, i = s.length; t < i; t++) {
      const n = s[t];
      n.mesh !== void 0 && (this._addNodeRef(this.meshCache, n.mesh), n.skin !== void 0 && (e[n.mesh].isSkinnedMesh = !0)), n.camera !== void 0 && this._addNodeRef(this.cameraCache, n.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(s, o) {
    o !== void 0 && (s.refs[o] === void 0 && (s.refs[o] = s.uses[o] = 0), s.refs[o]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(s, o, e) {
    if (s.refs[o] <= 1)
      return e;
    const t = e.clone(), i = (n, a) => {
      const r = this.associations.get(n);
      r != null && this.associations.set(a, r);
      for (const [c, p] of n.children.entries())
        i(p, a.children[c]);
    };
    return i(e, t), t.name += "_instance_" + s.uses[o]++, t;
  }
  _invokeOne(s) {
    const o = Object.values(this.plugins);
    o.push(this);
    for (let e = 0; e < o.length; e++) {
      const t = s(o[e]);
      if (t)
        return t;
    }
    return null;
  }
  _invokeAll(s) {
    const o = Object.values(this.plugins);
    o.unshift(this);
    const e = [];
    for (let t = 0; t < o.length; t++) {
      const i = s(o[t]);
      i && e.push(i);
    }
    return e;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(s, o) {
    const e = s + ":" + o;
    let t = this.cache.get(e);
    if (!t) {
      switch (s) {
        case "scene":
          t = this.loadScene(o);
          break;
        case "node":
          t = this.loadNode(o);
          break;
        case "mesh":
          t = this._invokeOne(function(i) {
            return i.loadMesh && i.loadMesh(o);
          });
          break;
        case "accessor":
          t = this.loadAccessor(o);
          break;
        case "bufferView":
          t = this._invokeOne(function(i) {
            return i.loadBufferView && i.loadBufferView(o);
          });
          break;
        case "buffer":
          t = this.loadBuffer(o);
          break;
        case "material":
          t = this._invokeOne(function(i) {
            return i.loadMaterial && i.loadMaterial(o);
          });
          break;
        case "texture":
          t = this._invokeOne(function(i) {
            return i.loadTexture && i.loadTexture(o);
          });
          break;
        case "skin":
          t = this.loadSkin(o);
          break;
        case "animation":
          t = this._invokeOne(function(i) {
            return i.loadAnimation && i.loadAnimation(o);
          });
          break;
        case "camera":
          t = this.loadCamera(o);
          break;
        default:
          throw new Error("Unknown type: " + s);
      }
      this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(s) {
    let o = this.cache.get(s);
    if (!o) {
      const e = this, t = this.json[s + (s === "mesh" ? "es" : "s")] || [];
      o = Promise.all(t.map(function(i, n) {
        return e.getDependency(s, n);
      })), this.cache.add(s, o);
    }
    return o;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(s) {
    const o = this.json.buffers[s], e = this.fileLoader;
    if (o.type && o.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + o.type + " buffer type is not supported.");
    if (o.uri === void 0 && s === 0)
      return Promise.resolve(this.extensions[L.KHR_BINARY_GLTF].body);
    const t = this.options;
    return new Promise(function(i, n) {
      e.load(xe.resolveURL(o.uri, t.path), i, void 0, function() {
        n(new Error('THREE.GLTFLoader: Failed to load buffer "' + o.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(s) {
    const o = this.json.bufferViews[s];
    return this.getDependency("buffer", o.buffer).then(function(e) {
      const t = o.byteLength || 0, i = o.byteOffset || 0;
      return e.slice(i, i + t);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(s) {
    const o = this, e = this.json, t = this.json.accessors[s];
    if (t.bufferView === void 0 && t.sparse === void 0)
      return Promise.resolve(null);
    const i = [];
    return t.bufferView !== void 0 ? i.push(this.getDependency("bufferView", t.bufferView)) : i.push(null), t.sparse !== void 0 && (i.push(this.getDependency("bufferView", t.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", t.sparse.values.bufferView))), Promise.all(i).then(function(n) {
      const a = n[0], r = Ft[t.type], c = ze[t.componentType], p = c.BYTES_PER_ELEMENT, h = p * r, d = t.byteOffset || 0, f = t.bufferView !== void 0 ? e.bufferViews[t.bufferView].byteStride : void 0, y = t.normalized === !0;
      let w, T;
      if (f && f !== h) {
        const g = Math.floor(d / f), S = "InterleavedBuffer:" + t.bufferView + ":" + t.componentType + ":" + g + ":" + t.count;
        let x = o.cache.get(S);
        x || (w = new c(a, g * f, t.count * f / p), x = new Dn(w, f / p), o.cache.add(S, x)), T = new Cn(x, r, d % f / p, y);
      } else
        a === null ? w = new c(t.count * r) : w = new c(a, d, t.count * r), T = new It(w, r, y);
      if (t.sparse !== void 0) {
        const g = Ft.SCALAR, S = ze[t.sparse.indices.componentType], x = t.sparse.indices.byteOffset || 0, v = t.sparse.values.byteOffset || 0, E = new S(n[1], x, t.sparse.count * g), N = new c(n[2], v, t.sparse.count * r);
        a !== null && (T = new It(T.array.slice(), T.itemSize, T.normalized));
        for (let k = 0, j = E.length; k < j; k++) {
          const z = E[k];
          if (T.setX(z, N[k * r]), r >= 2 && T.setY(z, N[k * r + 1]), r >= 3 && T.setZ(z, N[k * r + 2]), r >= 4 && T.setW(z, N[k * r + 3]), r >= 5)
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return T;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture>}
   */
  loadTexture(s) {
    const o = this.json, e = this.options, i = o.textures[s].source, n = o.images[i];
    let a = this.textureLoader;
    if (n.uri) {
      const r = e.manager.getHandler(n.uri);
      r !== null && (a = r);
    }
    return this.loadTextureImage(s, i, a);
  }
  loadTextureImage(s, o, e) {
    const t = this, i = this.json, n = i.textures[s], a = i.images[o], r = (a.uri || a.bufferView) + ":" + n.sampler;
    if (this.textureCache[r])
      return this.textureCache[r];
    const c = this.loadImageSource(o, e).then(function(p) {
      p.flipY = !1, p.name = n.name || a.name || "";
      const d = (i.samplers || {})[n.sampler] || {};
      return p.magFilter = Ct[d.magFilter] || ln, p.minFilter = Ct[d.minFilter] || hn, p.wrapS = jt[d.wrapS] || wt, p.wrapT = jt[d.wrapT] || wt, t.associations.set(p, { textures: s }), p;
    }).catch(function() {
      return null;
    });
    return this.textureCache[r] = c, c;
  }
  loadImageSource(s, o) {
    const e = this, t = this.json, i = this.options;
    if (this.sourceCache[s] !== void 0)
      return this.sourceCache[s].then((h) => h.clone());
    const n = t.images[s], a = self.URL || self.webkitURL;
    let r = n.uri || "", c = !1;
    if (n.bufferView !== void 0)
      r = e.getDependency("bufferView", n.bufferView).then(function(h) {
        c = !0;
        const d = new Blob([h], { type: n.mimeType });
        return r = a.createObjectURL(d), r;
      });
    else if (n.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + s + " is missing URI and bufferView");
    const p = Promise.resolve(r).then(function(h) {
      return new Promise(function(d, f) {
        let y = d;
        o.isImageBitmapLoader === !0 && (y = function(w) {
          const T = new gt(w);
          T.needsUpdate = !0, d(T);
        }), o.load(xe.resolveURL(h, i.path), y, void 0, f);
      });
    }).then(function(h) {
      return c === !0 && a.revokeObjectURL(r), h.userData.mimeType = n.mimeType || Gs(n.uri), h;
    }).catch(function(h) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", r), h;
    });
    return this.sourceCache[s] = p, p;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(s, o, e, t) {
    const i = this;
    return this.getDependency("texture", e.index).then(function(n) {
      if (e.texCoord !== void 0 && e.texCoord != 0 && !(o === "aoMap" && e.texCoord == 1) && console.warn("THREE.GLTFLoader: Custom UV set " + e.texCoord + " for texture " + o + " not yet supported."), i.extensions[L.KHR_TEXTURE_TRANSFORM]) {
        const a = e.extensions !== void 0 ? e.extensions[L.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const r = i.associations.get(n);
          n = i.extensions[L.KHR_TEXTURE_TRANSFORM].extendTexture(n, a), i.associations.set(n, r);
        }
      }
      return t !== void 0 && (n.encoding = t), s[o] = n, n;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(s) {
    const o = s.geometry;
    let e = s.material;
    const t = o.attributes.tangent === void 0, i = o.attributes.color !== void 0, n = o.attributes.normal === void 0;
    if (s.isPoints) {
      const a = "PointsMaterial:" + e.uuid;
      let r = this.cache.get(a);
      r || (r = new jn(), ot.prototype.copy.call(r, e), r.color.copy(e.color), r.map = e.map, r.sizeAttenuation = !1, this.cache.add(a, r)), e = r;
    } else if (s.isLine) {
      const a = "LineBasicMaterial:" + e.uuid;
      let r = this.cache.get(a);
      r || (r = new un(), ot.prototype.copy.call(r, e), r.color.copy(e.color), this.cache.add(a, r)), e = r;
    }
    if (t || i || n) {
      let a = "ClonedMaterial:" + e.uuid + ":";
      e.isGLTFSpecularGlossinessMaterial && (a += "specular-glossiness:"), t && (a += "derivative-tangents:"), i && (a += "vertex-colors:"), n && (a += "flat-shading:");
      let r = this.cache.get(a);
      r || (r = e.clone(), i && (r.vertexColors = !0), n && (r.flatShading = !0), t && (r.normalScale && (r.normalScale.y *= -1), r.clearcoatNormalScale && (r.clearcoatNormalScale.y *= -1)), this.cache.add(a, r), this.associations.set(r, this.associations.get(e))), e = r;
    }
    e.aoMap && o.attributes.uv2 === void 0 && o.attributes.uv !== void 0 && o.setAttribute("uv2", o.attributes.uv), s.material = e;
  }
  getMaterialType() {
    return Mt;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(s) {
    const o = this, e = this.json, t = this.extensions, i = e.materials[s];
    let n;
    const a = {}, r = i.extensions || {}, c = [];
    if (r[L.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
      const h = t[L.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
      n = h.getMaterialType(), c.push(h.extendParams(a, i, o));
    } else if (r[L.KHR_MATERIALS_UNLIT]) {
      const h = t[L.KHR_MATERIALS_UNLIT];
      n = h.getMaterialType(), c.push(h.extendParams(a, i, o));
    } else {
      const h = i.pbrMetallicRoughness || {};
      if (a.color = new $(1, 1, 1), a.opacity = 1, Array.isArray(h.baseColorFactor)) {
        const d = h.baseColorFactor;
        a.color.fromArray(d), a.opacity = d[3];
      }
      h.baseColorTexture !== void 0 && c.push(o.assignTexture(a, "map", h.baseColorTexture, _e)), a.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1, a.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1, h.metallicRoughnessTexture !== void 0 && (c.push(o.assignTexture(a, "metalnessMap", h.metallicRoughnessTexture)), c.push(o.assignTexture(a, "roughnessMap", h.metallicRoughnessTexture))), n = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(s);
      }), c.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(s, a);
      })));
    }
    i.doubleSided === !0 && (a.side = pn);
    const p = i.alphaMode || rt.OPAQUE;
    if (p === rt.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, p === rt.MASK && (a.alphaTest = i.alphaCutoff !== void 0 ? i.alphaCutoff : 0.5)), i.normalTexture !== void 0 && n !== Me && (c.push(o.assignTexture(a, "normalMap", i.normalTexture)), a.normalScale = new C(1, 1), i.normalTexture.scale !== void 0)) {
      const h = i.normalTexture.scale;
      a.normalScale.set(h, h);
    }
    return i.occlusionTexture !== void 0 && n !== Me && (c.push(o.assignTexture(a, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && n !== Me && (a.emissive = new $().fromArray(i.emissiveFactor)), i.emissiveTexture !== void 0 && n !== Me && c.push(o.assignTexture(a, "emissiveMap", i.emissiveTexture, _e)), Promise.all(c).then(function() {
      let h;
      return n === bt ? h = t[L.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a) : h = new n(a), i.name && (h.name = i.name), Te(h, i), o.associations.set(h, { materials: s }), i.extensions && Fe(t, h, i), h;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(s) {
    const o = Fn.sanitizeNodeName(s || "");
    let e = o;
    for (let t = 1; this.nodeNamesUsed[e]; ++t)
      e = o + "_" + t;
    return this.nodeNamesUsed[e] = !0, e;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(s) {
    const o = this, e = this.extensions, t = this.primitiveCache;
    function i(a) {
      return e[L.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, o).then(function(r) {
        return Ut(r, a, o);
      });
    }
    const n = [];
    for (let a = 0, r = s.length; a < r; a++) {
      const c = s[a], p = Us(c), h = t[p];
      if (h)
        n.push(h.promise);
      else {
        let d;
        c.extensions && c.extensions[L.KHR_DRACO_MESH_COMPRESSION] ? d = i(c) : d = Ut(new yt(), c, o), t[p] = { primitive: c, promise: d }, n.push(d);
      }
    }
    return Promise.all(n);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(s) {
    const o = this, e = this.json, t = this.extensions, i = e.meshes[s], n = i.primitives, a = [];
    for (let r = 0, c = n.length; r < c; r++) {
      const p = n[r].material === void 0 ? js(this.cache) : this.getDependency("material", n[r].material);
      a.push(p);
    }
    return a.push(o.loadGeometries(n)), Promise.all(a).then(function(r) {
      const c = r.slice(0, r.length - 1), p = r[r.length - 1], h = [];
      for (let f = 0, y = p.length; f < y; f++) {
        const w = p[f], T = n[f];
        let g;
        const S = c[f];
        if (T.mode === te.TRIANGLES || T.mode === te.TRIANGLE_STRIP || T.mode === te.TRIANGLE_FAN || T.mode === void 0)
          g = i.isSkinnedMesh === !0 ? new Hn(w, S) : new M(w, S), g.isSkinnedMesh === !0 && !g.geometry.attributes.skinWeight.normalized && g.normalizeSkinWeights(), T.mode === te.TRIANGLE_STRIP ? g.geometry = Gt(g.geometry, ts) : T.mode === te.TRIANGLE_FAN && (g.geometry = Gt(g.geometry, fn));
        else if (T.mode === te.LINES)
          g = new Un(w, S);
        else if (T.mode === te.LINE_STRIP)
          g = new le(w, S);
        else if (T.mode === te.LINE_LOOP)
          g = new Gn(w, S);
        else if (T.mode === te.POINTS)
          g = new Xn(w, S);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + T.mode);
        Object.keys(g.geometry.morphAttributes).length > 0 && Hs(g, i), g.name = o.createUniqueName(i.name || "mesh_" + s), Te(g, i), T.extensions && Fe(t, g, T), o.assignFinalMaterial(g), h.push(g);
      }
      for (let f = 0, y = h.length; f < y; f++)
        o.associations.set(h[f], {
          meshes: s,
          primitives: f
        });
      if (h.length === 1)
        return h[0];
      const d = new it();
      o.associations.set(d, { meshes: s });
      for (let f = 0, y = h.length; f < y; f++)
        d.add(h[f]);
      return d;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(s) {
    let o;
    const e = this.json.cameras[s], t = e[e.type];
    if (!t) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return e.type === "perspective" ? o = new an(be.radToDeg(t.yfov), t.aspectRatio || 1, t.znear || 1, t.zfar || 2e6) : e.type === "orthographic" && (o = new Yn(-t.xmag, t.xmag, t.ymag, -t.ymag, t.znear, t.zfar)), e.name && (o.name = this.createUniqueName(e.name)), Te(o, e), Promise.resolve(o);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Object>}
   */
  loadSkin(s) {
    const o = this.json.skins[s], e = { joints: o.joints };
    return o.inverseBindMatrices === void 0 ? Promise.resolve(e) : this.getDependency("accessor", o.inverseBindMatrices).then(function(t) {
      return e.inverseBindMatrices = t, e;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(s) {
    const e = this.json.animations[s], t = [], i = [], n = [], a = [], r = [];
    for (let c = 0, p = e.channels.length; c < p; c++) {
      const h = e.channels[c], d = e.samplers[h.sampler], f = h.target, y = f.node, w = e.parameters !== void 0 ? e.parameters[d.input] : d.input, T = e.parameters !== void 0 ? e.parameters[d.output] : d.output;
      t.push(this.getDependency("node", y)), i.push(this.getDependency("accessor", w)), n.push(this.getDependency("accessor", T)), a.push(d), r.push(f);
    }
    return Promise.all([
      Promise.all(t),
      Promise.all(i),
      Promise.all(n),
      Promise.all(a),
      Promise.all(r)
    ]).then(function(c) {
      const p = c[0], h = c[1], d = c[2], f = c[3], y = c[4], w = [];
      for (let g = 0, S = p.length; g < S; g++) {
        const x = p[g], v = h[g], E = d[g], N = f[g], k = y[g];
        if (x === void 0)
          continue;
        x.updateMatrix();
        let j;
        switch (me[k.path]) {
          case me.weights:
            j = ss;
            break;
          case me.rotation:
            j = Ot;
            break;
          case me.position:
          case me.scale:
          default:
            j = ns;
            break;
        }
        const z = x.name ? x.name : x.uuid, se = N.interpolation !== void 0 ? Cs[N.interpolation] : dn, W = [];
        me[k.path] === me.weights ? x.traverse(function(I) {
          I.morphTargetInfluences && W.push(I.name ? I.name : I.uuid);
        }) : W.push(z);
        let B = E.array;
        if (E.normalized) {
          const I = St(B.constructor), F = new Float32Array(B.length);
          for (let P = 0, J = B.length; P < J; P++)
            F[P] = B[P] * I;
          B = F;
        }
        for (let I = 0, F = W.length; I < F; I++) {
          const P = new j(
            W[I] + "." + me[k.path],
            v.array,
            B,
            se
          );
          N.interpolation === "CUBICSPLINE" && (P.createInterpolant = function(G) {
            const Z = this instanceof Ot ? Ds : yn;
            return new Z(this.times, this.values, this.getValueSize() / 3, G);
          }, P.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), w.push(P);
        }
      }
      const T = e.name ? e.name : "animation_" + s;
      return new Kn(T, void 0, w);
    });
  }
  createNodeMesh(s) {
    const o = this.json, e = this, t = o.nodes[s];
    return t.mesh === void 0 ? null : e.getDependency("mesh", t.mesh).then(function(i) {
      const n = e._getNodeRef(e.meshCache, t.mesh, i);
      return t.weights !== void 0 && n.traverse(function(a) {
        if (a.isMesh)
          for (let r = 0, c = t.weights.length; r < c; r++)
            a.morphTargetInfluences[r] = t.weights[r];
      }), n;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(s) {
    const o = this.json, e = this.extensions, t = this, i = o.nodes[s], n = i.name ? t.createUniqueName(i.name) : "";
    return function() {
      const a = [], r = t._invokeOne(function(c) {
        return c.createNodeMesh && c.createNodeMesh(s);
      });
      return r && a.push(r), i.camera !== void 0 && a.push(t.getDependency("camera", i.camera).then(function(c) {
        return t._getNodeRef(t.cameraCache, i.camera, c);
      })), t._invokeAll(function(c) {
        return c.createNodeAttachment && c.createNodeAttachment(s);
      }).forEach(function(c) {
        a.push(c);
      }), Promise.all(a);
    }().then(function(a) {
      let r;
      if (i.isBone === !0 ? r = new zn() : a.length > 1 ? r = new it() : a.length === 1 ? r = a[0] : r = new Ke(), r !== a[0])
        for (let c = 0, p = a.length; c < p; c++)
          r.add(a[c]);
      if (i.name && (r.userData.name = i.name, r.name = n), Te(r, i), i.extensions && Fe(e, r, i), i.matrix !== void 0) {
        const c = new Oe();
        c.fromArray(i.matrix), r.applyMatrix4(c);
      } else
        i.translation !== void 0 && r.position.fromArray(i.translation), i.rotation !== void 0 && r.quaternion.fromArray(i.rotation), i.scale !== void 0 && r.scale.fromArray(i.scale);
      return t.associations.has(r) || t.associations.set(r, {}), t.associations.get(r).nodes = s, r;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(s) {
    const o = this.json, e = this.extensions, t = this.json.scenes[s], i = this, n = new it();
    t.name && (n.name = i.createUniqueName(t.name)), Te(n, t), t.extensions && Fe(e, n, t);
    const a = t.nodes || [], r = [];
    for (let c = 0, p = a.length; c < p; c++)
      r.push(En(a[c], n, o, i));
    return Promise.all(r).then(function() {
      const c = (p) => {
        const h = /* @__PURE__ */ new Map();
        for (const [d, f] of i.associations)
          (d instanceof ot || d instanceof gt) && h.set(d, f);
        return p.traverse((d) => {
          const f = i.associations.get(d);
          f != null && h.set(d, f);
        }), h;
      };
      return i.associations = c(n), n;
    });
  }
}
function En(l, s, o, e) {
  const t = o.nodes[l];
  return e.getDependency("node", l).then(function(i) {
    if (t.skin === void 0)
      return i;
    let n;
    return e.getDependency("skin", t.skin).then(function(a) {
      n = a;
      const r = [];
      for (let c = 0, p = n.joints.length; c < p; c++)
        r.push(e.getDependency("node", n.joints[c]));
      return Promise.all(r);
    }).then(function(a) {
      return i.traverse(function(r) {
        if (!r.isMesh)
          return;
        const c = [], p = [];
        for (let h = 0, d = a.length; h < d; h++) {
          const f = a[h];
          if (f) {
            c.push(f);
            const y = new Oe();
            n.inverseBindMatrices !== void 0 && y.fromArray(n.inverseBindMatrices.array, h * 16), p.push(y);
          } else
            console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', n.joints[h]);
        }
        r.bind(new Vn(c, p), r.matrixWorld);
      }), i;
    });
  }).then(function(i) {
    s.add(i);
    const n = [];
    if (t.children) {
      const a = t.children;
      for (let r = 0, c = a.length; r < c; r++) {
        const p = a[r];
        n.push(En(p, i, o, e));
      }
    }
    return Promise.all(n);
  });
}
function Ys(l, s, o) {
  const e = s.attributes, t = new os();
  if (e.POSITION !== void 0) {
    const a = o.json.accessors[e.POSITION], r = a.min, c = a.max;
    if (r !== void 0 && c !== void 0) {
      if (t.set(
        new b(r[0], r[1], r[2]),
        new b(c[0], c[1], c[2])
      ), a.normalized) {
        const p = St(ze[a.componentType]);
        t.min.multiplyScalar(p), t.max.multiplyScalar(p);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const i = s.targets;
  if (i !== void 0) {
    const a = new b(), r = new b();
    for (let c = 0, p = i.length; c < p; c++) {
      const h = i[c];
      if (h.POSITION !== void 0) {
        const d = o.json.accessors[h.POSITION], f = d.min, y = d.max;
        if (f !== void 0 && y !== void 0) {
          if (r.setX(Math.max(Math.abs(f[0]), Math.abs(y[0]))), r.setY(Math.max(Math.abs(f[1]), Math.abs(y[1]))), r.setZ(Math.max(Math.abs(f[2]), Math.abs(y[2]))), d.normalized) {
            const w = St(ze[d.componentType]);
            r.multiplyScalar(w);
          }
          a.max(r);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    t.expandByVector(a);
  }
  l.boundingBox = t;
  const n = new is();
  t.getCenter(n.center), n.radius = t.min.distanceTo(t.max) / 2, l.boundingSphere = n;
}
function Ut(l, s, o) {
  const e = s.attributes, t = [];
  function i(n, a) {
    return o.getDependency("accessor", n).then(function(r) {
      l.setAttribute(a, r);
    });
  }
  for (const n in e) {
    const a = Tt[n] || n.toLowerCase();
    a in l.attributes || t.push(i(e[n], a));
  }
  if (s.indices !== void 0 && !l.index) {
    const n = o.getDependency("accessor", s.indices).then(function(a) {
      l.setIndex(a);
    });
    t.push(n);
  }
  return Te(l, s), Ys(l, s, o), Promise.all(t).then(function() {
    return s.targets !== void 0 ? Fs(l, s.targets, o) : l;
  });
}
function Gt(l, s) {
  let o = l.getIndex();
  if (o === null) {
    const n = [], a = l.getAttribute("position");
    if (a !== void 0) {
      for (let r = 0; r < a.count; r++)
        n.push(r);
      l.setIndex(n), o = l.getIndex();
    } else
      return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), l;
  }
  const e = o.count - 2, t = [];
  if (s === fn)
    for (let n = 1; n <= e; n++)
      t.push(o.getX(0)), t.push(o.getX(n)), t.push(o.getX(n + 1));
  else
    for (let n = 0; n < e; n++)
      n % 2 === 0 ? (t.push(o.getX(n)), t.push(o.getX(n + 1)), t.push(o.getX(n + 2))) : (t.push(o.getX(n + 2)), t.push(o.getX(n + 1)), t.push(o.getX(n)));
  t.length / 3 !== e && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
  const i = l.clone();
  return i.setIndex(t), i;
}
const Ks = (l, { expression: s }, { evaluateLater: o, cleanup: e }) => {
  const t = o(s), { scene: i } = window.Norska, n = () => {
    t(([r]) => {
      new ds().load(r, (p) => {
        l._norska.mesh = p.scene.children[0], l.parentNode._norska && l.parentNode._norska.mesh ? l.parentNode._norska.mesh.add(l._norska.mesh) : i.add(l._norska.mesh), l.dispatchEvent(new CustomEvent("norska:load:end"));
      });
    });
  }, a = () => {
    l._norska.mesh.parent ? l._norska.mesh.parent.remove(l._norska.mesh) : i.remove(l._norska.mesh);
  };
  l.hasOwnProperty("_norska") || (l._norska = {}), n(), e(() => a());
}, Xt = { type: "change" }, at = { type: "start" }, Yt = { type: "end" };
class zs extends Ve {
  constructor(s, o) {
    super(), this.object = s, this.domElement = o, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new b(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: he.ROTATE, MIDDLE: he.DOLLY, RIGHT: he.PAN }, this.touches = { ONE: Le.ROTATE, TWO: Le.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return a.phi;
    }, this.getAzimuthalAngle = function() {
      return a.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(u) {
      u.addEventListener("keydown", vt), this._domElementKeyEvents = u;
    }, this.saveState = function() {
      e.target0.copy(e.target), e.position0.copy(e.object.position), e.zoom0 = e.object.zoom;
    }, this.reset = function() {
      e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), e.dispatchEvent(Xt), e.update(), i = t.NONE;
    }, this.update = function() {
      const u = new b(), A = new K().setFromUnitVectors(s.up, new b(0, 1, 0)), U = A.clone().invert(), Y = new b(), ne = new K(), ve = 2 * Math.PI;
      return function() {
        const kt = e.object.position;
        u.copy(kt).sub(e.target), u.applyQuaternion(A), a.setFromVector3(u), e.autoRotate && i === t.NONE && z(k()), e.enableDamping ? (a.theta += r.theta * e.dampingFactor, a.phi += r.phi * e.dampingFactor) : (a.theta += r.theta, a.phi += r.phi);
        let ae = e.minAzimuthAngle, ce = e.maxAzimuthAngle;
        return isFinite(ae) && isFinite(ce) && (ae < -Math.PI ? ae += ve : ae > Math.PI && (ae -= ve), ce < -Math.PI ? ce += ve : ce > Math.PI && (ce -= ve), ae <= ce ? a.theta = Math.max(ae, Math.min(ce, a.theta)) : a.theta = a.theta > (ae + ce) / 2 ? Math.max(ae, a.theta) : Math.min(ce, a.theta)), a.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, a.phi)), a.makeSafe(), a.radius *= c, a.radius = Math.max(e.minDistance, Math.min(e.maxDistance, a.radius)), e.enableDamping === !0 ? e.target.addScaledVector(p, e.dampingFactor) : e.target.add(p), u.setFromSpherical(a), u.applyQuaternion(U), kt.copy(e.target).add(u), e.object.lookAt(e.target), e.enableDamping === !0 ? (r.theta *= 1 - e.dampingFactor, r.phi *= 1 - e.dampingFactor, p.multiplyScalar(1 - e.dampingFactor)) : (r.set(0, 0, 0), p.set(0, 0, 0)), c = 1, h || Y.distanceToSquared(e.object.position) > n || 8 * (1 - ne.dot(e.object.quaternion)) > n ? (e.dispatchEvent(Xt), Y.copy(e.object.position), ne.copy(e.object.quaternion), h = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      e.domElement.removeEventListener("contextmenu", Lt), e.domElement.removeEventListener("pointerdown", ye), e.domElement.removeEventListener("pointercancel", _t), e.domElement.removeEventListener("wheel", At), e.domElement.removeEventListener("pointermove", tt), e.domElement.removeEventListener("pointerup", nt), e._domElementKeyEvents !== null && e._domElementKeyEvents.removeEventListener("keydown", vt);
    };
    const e = this, t = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let i = t.NONE;
    const n = 1e-6, a = new Et(), r = new Et();
    let c = 1;
    const p = new b();
    let h = !1;
    const d = new C(), f = new C(), y = new C(), w = new C(), T = new C(), g = new C(), S = new C(), x = new C(), v = new C(), E = [], N = {};
    function k() {
      return 2 * Math.PI / 60 / 60 * e.autoRotateSpeed;
    }
    function j() {
      return Math.pow(0.95, e.zoomSpeed);
    }
    function z(u) {
      r.theta -= u;
    }
    function se(u) {
      r.phi -= u;
    }
    const W = function() {
      const u = new b();
      return function(U, Y) {
        u.setFromMatrixColumn(Y, 0), u.multiplyScalar(-U), p.add(u);
      };
    }(), B = function() {
      const u = new b();
      return function(U, Y) {
        e.screenSpacePanning === !0 ? u.setFromMatrixColumn(Y, 1) : (u.setFromMatrixColumn(Y, 0), u.crossVectors(e.object.up, u)), u.multiplyScalar(U), p.add(u);
      };
    }(), I = function() {
      const u = new b();
      return function(U, Y) {
        const ne = e.domElement;
        if (e.object.isPerspectiveCamera) {
          const ve = e.object.position;
          u.copy(ve).sub(e.target);
          let Ze = u.length();
          Ze *= Math.tan(e.object.fov / 2 * Math.PI / 180), W(2 * U * Ze / ne.clientHeight, e.object.matrix), B(2 * Y * Ze / ne.clientHeight, e.object.matrix);
        } else
          e.object.isOrthographicCamera ? (W(U * (e.object.right - e.object.left) / e.object.zoom / ne.clientWidth, e.object.matrix), B(Y * (e.object.top - e.object.bottom) / e.object.zoom / ne.clientHeight, e.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1);
      };
    }();
    function F(u) {
      e.object.isPerspectiveCamera ? c /= u : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom * u)), e.object.updateProjectionMatrix(), h = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function P(u) {
      e.object.isPerspectiveCamera ? c *= u : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / u)), e.object.updateProjectionMatrix(), h = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function J(u) {
      d.set(u.clientX, u.clientY);
    }
    function G(u) {
      S.set(u.clientX, u.clientY);
    }
    function Z(u) {
      w.set(u.clientX, u.clientY);
    }
    function H(u) {
      f.set(u.clientX, u.clientY), y.subVectors(f, d).multiplyScalar(e.rotateSpeed);
      const A = e.domElement;
      z(2 * Math.PI * y.x / A.clientHeight), se(2 * Math.PI * y.y / A.clientHeight), d.copy(f), e.update();
    }
    function pe(u) {
      x.set(u.clientX, u.clientY), v.subVectors(x, S), v.y > 0 ? F(j()) : v.y < 0 && P(j()), S.copy(x), e.update();
    }
    function de(u) {
      T.set(u.clientX, u.clientY), g.subVectors(T, w).multiplyScalar(e.panSpeed), I(g.x, g.y), w.copy(T), e.update();
    }
    function re(u) {
      u.deltaY < 0 ? P(j()) : u.deltaY > 0 && F(j()), e.update();
    }
    function Ne(u) {
      let A = !1;
      switch (u.code) {
        case e.keys.UP:
          I(0, e.keyPanSpeed), A = !0;
          break;
        case e.keys.BOTTOM:
          I(0, -e.keyPanSpeed), A = !0;
          break;
        case e.keys.LEFT:
          I(e.keyPanSpeed, 0), A = !0;
          break;
        case e.keys.RIGHT:
          I(-e.keyPanSpeed, 0), A = !0;
          break;
      }
      A && (u.preventDefault(), e.update());
    }
    function fe() {
      if (E.length === 1)
        d.set(E[0].pageX, E[0].pageY);
      else {
        const u = 0.5 * (E[0].pageX + E[1].pageX), A = 0.5 * (E[0].pageY + E[1].pageY);
        d.set(u, A);
      }
    }
    function De() {
      if (E.length === 1)
        w.set(E[0].pageX, E[0].pageY);
      else {
        const u = 0.5 * (E[0].pageX + E[1].pageX), A = 0.5 * (E[0].pageY + E[1].pageY);
        w.set(u, A);
      }
    }
    function Be() {
      const u = E[0].pageX - E[1].pageX, A = E[0].pageY - E[1].pageY, U = Math.sqrt(u * u + A * A);
      S.set(0, U);
    }
    function m() {
      e.enableZoom && Be(), e.enablePan && De();
    }
    function _() {
      e.enableZoom && Be(), e.enableRotate && fe();
    }
    function D(u) {
      if (E.length == 1)
        f.set(u.pageX, u.pageY);
      else {
        const U = st(u), Y = 0.5 * (u.pageX + U.x), ne = 0.5 * (u.pageY + U.y);
        f.set(Y, ne);
      }
      y.subVectors(f, d).multiplyScalar(e.rotateSpeed);
      const A = e.domElement;
      z(2 * Math.PI * y.x / A.clientHeight), se(2 * Math.PI * y.y / A.clientHeight), d.copy(f);
    }
    function X(u) {
      if (E.length === 1)
        T.set(u.pageX, u.pageY);
      else {
        const A = st(u), U = 0.5 * (u.pageX + A.x), Y = 0.5 * (u.pageY + A.y);
        T.set(U, Y);
      }
      g.subVectors(T, w).multiplyScalar(e.panSpeed), I(g.x, g.y), w.copy(T);
    }
    function ee(u) {
      const A = st(u), U = u.pageX - A.x, Y = u.pageY - A.y, ne = Math.sqrt(U * U + Y * Y);
      x.set(0, ne), v.set(0, Math.pow(x.y / S.y, e.zoomSpeed)), F(v.y), S.copy(x);
    }
    function oe(u) {
      e.enableZoom && ee(u), e.enablePan && X(u);
    }
    function xt(u) {
      e.enableZoom && ee(u), e.enableRotate && D(u);
    }
    function ye(u) {
      e.enabled !== !1 && (E.length === 0 && (e.domElement.setPointerCapture(u.pointerId), e.domElement.addEventListener("pointermove", tt), e.domElement.addEventListener("pointerup", nt)), xn(u), u.pointerType === "touch" ? Sn(u) : bn(u));
    }
    function tt(u) {
      e.enabled !== !1 && (u.pointerType === "touch" ? Mn(u) : Tn(u));
    }
    function nt(u) {
      Rt(u), E.length === 0 && (e.domElement.releasePointerCapture(u.pointerId), e.domElement.removeEventListener("pointermove", tt), e.domElement.removeEventListener("pointerup", nt)), e.dispatchEvent(Yt), i = t.NONE;
    }
    function _t(u) {
      Rt(u);
    }
    function bn(u) {
      let A;
      switch (u.button) {
        case 0:
          A = e.mouseButtons.LEFT;
          break;
        case 1:
          A = e.mouseButtons.MIDDLE;
          break;
        case 2:
          A = e.mouseButtons.RIGHT;
          break;
        default:
          A = -1;
      }
      switch (A) {
        case he.DOLLY:
          if (e.enableZoom === !1)
            return;
          G(u), i = t.DOLLY;
          break;
        case he.ROTATE:
          if (u.ctrlKey || u.metaKey || u.shiftKey) {
            if (e.enablePan === !1)
              return;
            Z(u), i = t.PAN;
          } else {
            if (e.enableRotate === !1)
              return;
            J(u), i = t.ROTATE;
          }
          break;
        case he.PAN:
          if (u.ctrlKey || u.metaKey || u.shiftKey) {
            if (e.enableRotate === !1)
              return;
            J(u), i = t.ROTATE;
          } else {
            if (e.enablePan === !1)
              return;
            Z(u), i = t.PAN;
          }
          break;
        default:
          i = t.NONE;
      }
      i !== t.NONE && e.dispatchEvent(at);
    }
    function Tn(u) {
      switch (i) {
        case t.ROTATE:
          if (e.enableRotate === !1)
            return;
          H(u);
          break;
        case t.DOLLY:
          if (e.enableZoom === !1)
            return;
          pe(u);
          break;
        case t.PAN:
          if (e.enablePan === !1)
            return;
          de(u);
          break;
      }
    }
    function At(u) {
      e.enabled === !1 || e.enableZoom === !1 || i !== t.NONE || (u.preventDefault(), e.dispatchEvent(at), re(u), e.dispatchEvent(Yt));
    }
    function vt(u) {
      e.enabled === !1 || e.enablePan === !1 || Ne(u);
    }
    function Sn(u) {
      switch (Pt(u), E.length) {
        case 1:
          switch (e.touches.ONE) {
            case Le.ROTATE:
              if (e.enableRotate === !1)
                return;
              fe(), i = t.TOUCH_ROTATE;
              break;
            case Le.PAN:
              if (e.enablePan === !1)
                return;
              De(), i = t.TOUCH_PAN;
              break;
            default:
              i = t.NONE;
          }
          break;
        case 2:
          switch (e.touches.TWO) {
            case Le.DOLLY_PAN:
              if (e.enableZoom === !1 && e.enablePan === !1)
                return;
              m(), i = t.TOUCH_DOLLY_PAN;
              break;
            case Le.DOLLY_ROTATE:
              if (e.enableZoom === !1 && e.enableRotate === !1)
                return;
              _(), i = t.TOUCH_DOLLY_ROTATE;
              break;
            default:
              i = t.NONE;
          }
          break;
        default:
          i = t.NONE;
      }
      i !== t.NONE && e.dispatchEvent(at);
    }
    function Mn(u) {
      switch (Pt(u), i) {
        case t.TOUCH_ROTATE:
          if (e.enableRotate === !1)
            return;
          D(u), e.update();
          break;
        case t.TOUCH_PAN:
          if (e.enablePan === !1)
            return;
          X(u), e.update();
          break;
        case t.TOUCH_DOLLY_PAN:
          if (e.enableZoom === !1 && e.enablePan === !1)
            return;
          oe(u), e.update();
          break;
        case t.TOUCH_DOLLY_ROTATE:
          if (e.enableZoom === !1 && e.enableRotate === !1)
            return;
          xt(u), e.update();
          break;
        default:
          i = t.NONE;
      }
    }
    function Lt(u) {
      e.enabled !== !1 && u.preventDefault();
    }
    function xn(u) {
      E.push(u);
    }
    function Rt(u) {
      delete N[u.pointerId];
      for (let A = 0; A < E.length; A++)
        if (E[A].pointerId == u.pointerId) {
          E.splice(A, 1);
          return;
        }
    }
    function Pt(u) {
      let A = N[u.pointerId];
      A === void 0 && (A = new C(), N[u.pointerId] = A), A.set(u.pageX, u.pageY);
    }
    function st(u) {
      const A = u.pointerId === E[0].pointerId ? E[1] : E[0];
      return N[A.pointerId];
    }
    e.domElement.addEventListener("contextmenu", Lt), e.domElement.addEventListener("pointerdown", ye), e.domElement.addEventListener("pointercancel", _t), e.domElement.addEventListener("wheel", At, { passive: !1 }), this.update();
  }
}
const Re = new as(), ge = new mn(), He = new C(), Kt = new b(), qe = new b(), ct = new b(), zt = new Oe();
class Vs extends Ve {
  constructor(s, o, e) {
    super(), e.style.touchAction = "none";
    let t = null, i = null;
    const n = [], a = this;
    function r() {
      e.addEventListener("pointermove", f), e.addEventListener("pointerdown", y), e.addEventListener("pointerup", w), e.addEventListener("pointerleave", w);
    }
    function c() {
      e.removeEventListener("pointermove", f), e.removeEventListener("pointerdown", y), e.removeEventListener("pointerup", w), e.removeEventListener("pointerleave", w), e.style.cursor = "";
    }
    function p() {
      c();
    }
    function h() {
      return s;
    }
    function d() {
      return ge;
    }
    function f(g) {
      if (a.enabled !== !1) {
        if (T(g), ge.setFromCamera(He, o), t) {
          ge.ray.intersectPlane(Re, qe) && t.position.copy(qe.sub(Kt).applyMatrix4(zt)), a.dispatchEvent({ type: "drag", object: t });
          return;
        }
        if (g.pointerType === "mouse" || g.pointerType === "pen")
          if (n.length = 0, ge.setFromCamera(He, o), ge.intersectObjects(s, !0, n), n.length > 0) {
            const S = n[0].object;
            Re.setFromNormalAndCoplanarPoint(o.getWorldDirection(Re.normal), ct.setFromMatrixPosition(S.matrixWorld)), i !== S && i !== null && (a.dispatchEvent({ type: "hoveroff", object: i }), e.style.cursor = "auto", i = null), i !== S && (a.dispatchEvent({ type: "hoveron", object: S }), e.style.cursor = "pointer", i = S);
          } else
            i !== null && (a.dispatchEvent({ type: "hoveroff", object: i }), e.style.cursor = "auto", i = null);
      }
    }
    function y(g) {
      a.enabled !== !1 && (T(g), n.length = 0, ge.setFromCamera(He, o), ge.intersectObjects(s, !0, n), n.length > 0 && (t = a.transformGroup === !0 ? s[0] : n[0].object, Re.setFromNormalAndCoplanarPoint(o.getWorldDirection(Re.normal), ct.setFromMatrixPosition(t.matrixWorld)), ge.ray.intersectPlane(Re, qe) && (zt.copy(t.parent.matrixWorld).invert(), Kt.copy(qe).sub(ct.setFromMatrixPosition(t.matrixWorld))), e.style.cursor = "move", a.dispatchEvent({ type: "dragstart", object: t })));
    }
    function w() {
      a.enabled !== !1 && (t && (a.dispatchEvent({ type: "dragend", object: t }), t = null), e.style.cursor = i ? "pointer" : "auto");
    }
    function T(g) {
      const S = e.getBoundingClientRect();
      He.x = (g.clientX - S.left) / S.width * 2 - 1, He.y = -(g.clientY - S.top) / S.height * 2 + 1;
    }
    r(), this.enabled = !0, this.transformGroup = !1, this.activate = r, this.deactivate = c, this.dispose = p, this.getObjects = h, this.getRaycaster = d;
  }
}
const Vt = new b(), lt = new Et(), ht = new b();
class Bs {
  constructor(s, o) {
    this.object = s, this.domElement = o, this.enabled = !0, this.movementSpeed = 1, this.lookSpeed = 5e-3, this.lookVertical = !0, this.autoForward = !1, this.activeLook = !0, this.heightSpeed = !1, this.heightCoef = 1, this.heightMin = 0, this.heightMax = 1, this.constrainVertical = !1, this.verticalMin = 0, this.verticalMax = Math.PI, this.mouseDragOn = !1, this.autoSpeedFactor = 0, this.pointerX = 0, this.pointerY = 0, this.moveForward = !1, this.moveBackward = !1, this.moveLeft = !1, this.moveRight = !1, this.viewHalfX = 0, this.viewHalfY = 0;
    let e = 0, t = 0;
    this.handleResize = function() {
      this.domElement === document ? (this.viewHalfX = window.innerWidth / 2, this.viewHalfY = window.innerHeight / 2) : (this.viewHalfX = this.domElement.offsetWidth / 2, this.viewHalfY = this.domElement.offsetHeight / 2);
    }, this.onPointerDown = function(h) {
      if (this.domElement !== document && this.domElement.focus(), this.activeLook)
        switch (h.button) {
          case 0:
            this.moveForward = !0;
            break;
          case 2:
            this.moveBackward = !0;
            break;
        }
      this.mouseDragOn = !0;
    }, this.onPointerUp = function(h) {
      if (this.activeLook)
        switch (h.button) {
          case 0:
            this.moveForward = !1;
            break;
          case 2:
            this.moveBackward = !1;
            break;
        }
      this.mouseDragOn = !1;
    }, this.onPointerMove = function(h) {
      this.domElement === document ? (this.pointerX = h.pageX - this.viewHalfX, this.pointerY = h.pageY - this.viewHalfY) : (this.pointerX = h.pageX - this.domElement.offsetLeft - this.viewHalfX, this.pointerY = h.pageY - this.domElement.offsetTop - this.viewHalfY);
    }, this.onKeyDown = function(h) {
      switch (h.code) {
        case "ArrowUp":
        case "KeyW":
          this.moveForward = !0;
          break;
        case "ArrowLeft":
        case "KeyA":
          this.moveLeft = !0;
          break;
        case "ArrowDown":
        case "KeyS":
          this.moveBackward = !0;
          break;
        case "ArrowRight":
        case "KeyD":
          this.moveRight = !0;
          break;
        case "KeyR":
          this.moveUp = !0;
          break;
        case "KeyF":
          this.moveDown = !0;
          break;
      }
    }, this.onKeyUp = function(h) {
      switch (h.code) {
        case "ArrowUp":
        case "KeyW":
          this.moveForward = !1;
          break;
        case "ArrowLeft":
        case "KeyA":
          this.moveLeft = !1;
          break;
        case "ArrowDown":
        case "KeyS":
          this.moveBackward = !1;
          break;
        case "ArrowRight":
        case "KeyD":
          this.moveRight = !1;
          break;
        case "KeyR":
          this.moveUp = !1;
          break;
        case "KeyF":
          this.moveDown = !1;
          break;
      }
    }, this.lookAt = function(h, d, f) {
      return h.isVector3 ? ht.copy(h) : ht.set(h, d, f), this.object.lookAt(ht), p(this), this;
    }, this.update = function() {
      const h = new b();
      return function(f) {
        if (this.enabled === !1)
          return;
        if (this.heightSpeed) {
          const E = be.clamp(this.object.position.y, this.heightMin, this.heightMax) - this.heightMin;
          this.autoSpeedFactor = f * (E * this.heightCoef);
        } else
          this.autoSpeedFactor = 0;
        const y = f * this.movementSpeed;
        (this.moveForward || this.autoForward && !this.moveBackward) && this.object.translateZ(-(y + this.autoSpeedFactor)), this.moveBackward && this.object.translateZ(y), this.moveLeft && this.object.translateX(-y), this.moveRight && this.object.translateX(y), this.moveUp && this.object.translateY(y), this.moveDown && this.object.translateY(-y);
        let w = f * this.lookSpeed;
        this.activeLook || (w = 0);
        let T = 1;
        this.constrainVertical && (T = Math.PI / (this.verticalMax - this.verticalMin)), t -= this.pointerX * w, this.lookVertical && (e -= this.pointerY * w * T), e = Math.max(-85, Math.min(85, e));
        let g = be.degToRad(90 - e);
        const S = be.degToRad(t);
        this.constrainVertical && (g = be.mapLinear(g, 0, Math.PI, this.verticalMin, this.verticalMax));
        const x = this.object.position;
        h.setFromSphericalCoords(1, g, S).add(x), this.object.lookAt(h);
      };
    }(), this.dispose = function() {
      this.domElement.removeEventListener("contextmenu", Bt), this.domElement.removeEventListener("pointerdown", n), this.domElement.removeEventListener("pointermove", i), this.domElement.removeEventListener("pointerup", a), window.removeEventListener("keydown", r), window.removeEventListener("keyup", c);
    };
    const i = this.onPointerMove.bind(this), n = this.onPointerDown.bind(this), a = this.onPointerUp.bind(this), r = this.onKeyDown.bind(this), c = this.onKeyUp.bind(this);
    this.domElement.addEventListener("contextmenu", Bt), this.domElement.addEventListener("pointerdown", n), this.domElement.addEventListener("pointermove", i), this.domElement.addEventListener("pointerup", a), window.addEventListener("keydown", r), window.addEventListener("keyup", c);
    function p(h) {
      const d = h.object.quaternion;
      Vt.set(0, 0, -1).applyQuaternion(d), lt.setFromVector3(Vt), e = 90 - be.radToDeg(lt.phi), t = be.radToDeg(lt.theta);
    }
    this.handleResize(), p(this);
  }
}
function Bt(l) {
  l.preventDefault();
}
const Zs = { type: "change" };
class Qs extends Ve {
  constructor(s, o) {
    super(), this.object = s, this.domElement = o, this.movementSpeed = 1, this.rollSpeed = 5e-3, this.dragToLook = !1, this.autoForward = !1;
    const e = this, t = 1e-6, i = new K(), n = new b();
    this.tmpQuaternion = new K(), this.status = 0, this.moveState = { up: 0, down: 0, left: 0, right: 0, forward: 0, back: 0, pitchUp: 0, pitchDown: 0, yawLeft: 0, yawRight: 0, rollLeft: 0, rollRight: 0 }, this.moveVector = new b(0, 0, 0), this.rotationVector = new b(0, 0, 0), this.keydown = function(d) {
      if (!d.altKey) {
        switch (d.code) {
          case "ShiftLeft":
          case "ShiftRight":
            this.movementSpeedMultiplier = 0.1;
            break;
          case "KeyW":
            this.moveState.forward = 1;
            break;
          case "KeyS":
            this.moveState.back = 1;
            break;
          case "KeyA":
            this.moveState.left = 1;
            break;
          case "KeyD":
            this.moveState.right = 1;
            break;
          case "KeyR":
            this.moveState.up = 1;
            break;
          case "KeyF":
            this.moveState.down = 1;
            break;
          case "ArrowUp":
            this.moveState.pitchUp = 1;
            break;
          case "ArrowDown":
            this.moveState.pitchDown = 1;
            break;
          case "ArrowLeft":
            this.moveState.yawLeft = 1;
            break;
          case "ArrowRight":
            this.moveState.yawRight = 1;
            break;
          case "KeyQ":
            this.moveState.rollLeft = 1;
            break;
          case "KeyE":
            this.moveState.rollRight = 1;
            break;
        }
        this.updateMovementVector(), this.updateRotationVector();
      }
    }, this.keyup = function(d) {
      switch (d.code) {
        case "ShiftLeft":
        case "ShiftRight":
          this.movementSpeedMultiplier = 1;
          break;
        case "KeyW":
          this.moveState.forward = 0;
          break;
        case "KeyS":
          this.moveState.back = 0;
          break;
        case "KeyA":
          this.moveState.left = 0;
          break;
        case "KeyD":
          this.moveState.right = 0;
          break;
        case "KeyR":
          this.moveState.up = 0;
          break;
        case "KeyF":
          this.moveState.down = 0;
          break;
        case "ArrowUp":
          this.moveState.pitchUp = 0;
          break;
        case "ArrowDown":
          this.moveState.pitchDown = 0;
          break;
        case "ArrowLeft":
          this.moveState.yawLeft = 0;
          break;
        case "ArrowRight":
          this.moveState.yawRight = 0;
          break;
        case "KeyQ":
          this.moveState.rollLeft = 0;
          break;
        case "KeyE":
          this.moveState.rollRight = 0;
          break;
      }
      this.updateMovementVector(), this.updateRotationVector();
    }, this.pointerdown = function(d) {
      if (this.dragToLook)
        this.status++;
      else {
        switch (d.button) {
          case 0:
            this.moveState.forward = 1;
            break;
          case 2:
            this.moveState.back = 1;
            break;
        }
        this.updateMovementVector();
      }
    }, this.pointermove = function(d) {
      if (!this.dragToLook || this.status > 0) {
        const f = this.getContainerDimensions(), y = f.size[0] / 2, w = f.size[1] / 2;
        this.moveState.yawLeft = -(d.pageX - f.offset[0] - y) / y, this.moveState.pitchDown = (d.pageY - f.offset[1] - w) / w, this.updateRotationVector();
      }
    }, this.pointerup = function(d) {
      if (this.dragToLook)
        this.status--, this.moveState.yawLeft = this.moveState.pitchDown = 0;
      else {
        switch (d.button) {
          case 0:
            this.moveState.forward = 0;
            break;
          case 2:
            this.moveState.back = 0;
            break;
        }
        this.updateMovementVector();
      }
      this.updateRotationVector();
    }, this.update = function(d) {
      const f = d * e.movementSpeed, y = d * e.rollSpeed;
      e.object.translateX(e.moveVector.x * f), e.object.translateY(e.moveVector.y * f), e.object.translateZ(e.moveVector.z * f), e.tmpQuaternion.set(e.rotationVector.x * y, e.rotationVector.y * y, e.rotationVector.z * y, 1).normalize(), e.object.quaternion.multiply(e.tmpQuaternion), (n.distanceToSquared(e.object.position) > t || 8 * (1 - i.dot(e.object.quaternion)) > t) && (e.dispatchEvent(Zs), i.copy(e.object.quaternion), n.copy(e.object.position));
    }, this.updateMovementVector = function() {
      const d = this.moveState.forward || this.autoForward && !this.moveState.back ? 1 : 0;
      this.moveVector.x = -this.moveState.left + this.moveState.right, this.moveVector.y = -this.moveState.down + this.moveState.up, this.moveVector.z = -d + this.moveState.back;
    }, this.updateRotationVector = function() {
      this.rotationVector.x = -this.moveState.pitchDown + this.moveState.pitchUp, this.rotationVector.y = -this.moveState.yawRight + this.moveState.yawLeft, this.rotationVector.z = -this.moveState.rollRight + this.moveState.rollLeft;
    }, this.getContainerDimensions = function() {
      return this.domElement != document ? {
        size: [this.domElement.offsetWidth, this.domElement.offsetHeight],
        offset: [this.domElement.offsetLeft, this.domElement.offsetTop]
      } : {
        size: [window.innerWidth, window.innerHeight],
        offset: [0, 0]
      };
    }, this.dispose = function() {
      this.domElement.removeEventListener("contextmenu", Zt), this.domElement.removeEventListener("pointerdown", r), this.domElement.removeEventListener("pointermove", a), this.domElement.removeEventListener("pointerup", c), window.removeEventListener("keydown", p), window.removeEventListener("keyup", h);
    };
    const a = this.pointermove.bind(this), r = this.pointerdown.bind(this), c = this.pointerup.bind(this), p = this.keydown.bind(this), h = this.keyup.bind(this);
    this.domElement.addEventListener("contextmenu", Zt), this.domElement.addEventListener("pointerdown", r), this.domElement.addEventListener("pointermove", a), this.domElement.addEventListener("pointerup", c), window.addEventListener("keydown", p), window.addEventListener("keyup", h), this.updateMovementVector(), this.updateRotationVector();
  }
}
function Zt(l) {
  l.preventDefault();
}
const Pe = new gn(0, 0, 0, "YXZ"), ke = new b(), qs = { type: "change" }, Ws = { type: "lock" }, $s = { type: "unlock" }, Qt = Math.PI / 2;
class Js extends Ve {
  constructor(s, o) {
    super(), this.domElement = o, this.isLocked = !1, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.pointerSpeed = 1;
    const e = this;
    function t(a) {
      if (e.isLocked === !1)
        return;
      const r = a.movementX || a.mozMovementX || a.webkitMovementX || 0, c = a.movementY || a.mozMovementY || a.webkitMovementY || 0;
      Pe.setFromQuaternion(s.quaternion), Pe.y -= r * 2e-3 * e.pointerSpeed, Pe.x -= c * 2e-3 * e.pointerSpeed, Pe.x = Math.max(Qt - e.maxPolarAngle, Math.min(Qt - e.minPolarAngle, Pe.x)), s.quaternion.setFromEuler(Pe), e.dispatchEvent(qs);
    }
    function i() {
      e.domElement.ownerDocument.pointerLockElement === e.domElement ? (e.dispatchEvent(Ws), e.isLocked = !0) : (e.dispatchEvent($s), e.isLocked = !1);
    }
    function n() {
      console.error("THREE.PointerLockControls: Unable to use Pointer Lock API");
    }
    this.connect = function() {
      e.domElement.ownerDocument.addEventListener("mousemove", t), e.domElement.ownerDocument.addEventListener("pointerlockchange", i), e.domElement.ownerDocument.addEventListener("pointerlockerror", n);
    }, this.disconnect = function() {
      e.domElement.ownerDocument.removeEventListener("mousemove", t), e.domElement.ownerDocument.removeEventListener("pointerlockchange", i), e.domElement.ownerDocument.removeEventListener("pointerlockerror", n);
    }, this.dispose = function() {
      this.disconnect();
    }, this.getObject = function() {
      return s;
    }, this.getDirection = function() {
      const a = new b(0, 0, -1);
      return function(r) {
        return r.copy(a).applyQuaternion(s.quaternion);
      };
    }(), this.moveForward = function(a) {
      ke.setFromMatrixColumn(s.matrix, 0), ke.crossVectors(s.up, ke), s.position.addScaledVector(ke, a);
    }, this.moveRight = function(a) {
      ke.setFromMatrixColumn(s.matrix, 0), s.position.addScaledVector(ke, a);
    }, this.lock = function() {
      this.domElement.requestPointerLock();
    }, this.unlock = function() {
      e.domElement.ownerDocument.exitPointerLock();
    }, this.connect();
  }
}
const ut = { type: "change" }, pt = { type: "start" }, dt = { type: "end" };
class eo extends Ve {
  constructor(s, o) {
    super();
    const e = this, t = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_ZOOM_PAN: 4 };
    this.object = s, this.domElement = o, this.domElement.style.touchAction = "none", this.enabled = !0, this.screen = { left: 0, top: 0, width: 0, height: 0 }, this.rotateSpeed = 1, this.zoomSpeed = 1.2, this.panSpeed = 0.3, this.noRotate = !1, this.noZoom = !1, this.noPan = !1, this.staticMoving = !1, this.dynamicDampingFactor = 0.2, this.minDistance = 0, this.maxDistance = 1 / 0, this.keys = [
      "KeyA",
      "KeyS",
      "KeyD"
      /*D*/
    ], this.mouseButtons = { LEFT: he.ROTATE, MIDDLE: he.DOLLY, RIGHT: he.PAN }, this.target = new b();
    const i = 1e-6, n = new b();
    let a = 1, r = t.NONE, c = t.NONE, p = 0, h = 0, d = 0;
    const f = new b(), y = new C(), w = new C(), T = new b(), g = new C(), S = new C(), x = new C(), v = new C(), E = [], N = {};
    this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.up0 = this.object.up.clone(), this.zoom0 = this.object.zoom, this.handleResize = function() {
      const m = e.domElement.getBoundingClientRect(), _ = e.domElement.ownerDocument.documentElement;
      e.screen.left = m.left + window.pageXOffset - _.clientLeft, e.screen.top = m.top + window.pageYOffset - _.clientTop, e.screen.width = m.width, e.screen.height = m.height;
    };
    const k = function() {
      const m = new C();
      return function(D, X) {
        return m.set(
          (D - e.screen.left) / e.screen.width,
          (X - e.screen.top) / e.screen.height
        ), m;
      };
    }(), j = function() {
      const m = new C();
      return function(D, X) {
        return m.set(
          (D - e.screen.width * 0.5 - e.screen.left) / (e.screen.width * 0.5),
          (e.screen.height + 2 * (e.screen.top - X)) / e.screen.width
          // screen.width intentional
        ), m;
      };
    }();
    this.rotateCamera = function() {
      const m = new b(), _ = new K(), D = new b(), X = new b(), ee = new b(), oe = new b();
      return function() {
        oe.set(w.x - y.x, w.y - y.y, 0);
        let ye = oe.length();
        ye ? (f.copy(e.object.position).sub(e.target), D.copy(f).normalize(), X.copy(e.object.up).normalize(), ee.crossVectors(X, D).normalize(), X.setLength(w.y - y.y), ee.setLength(w.x - y.x), oe.copy(X.add(ee)), m.crossVectors(oe, f).normalize(), ye *= e.rotateSpeed, _.setFromAxisAngle(m, ye), f.applyQuaternion(_), e.object.up.applyQuaternion(_), T.copy(m), d = ye) : !e.staticMoving && d && (d *= Math.sqrt(1 - e.dynamicDampingFactor), f.copy(e.object.position).sub(e.target), _.setFromAxisAngle(T, d), f.applyQuaternion(_), e.object.up.applyQuaternion(_)), y.copy(w);
      };
    }(), this.zoomCamera = function() {
      let m;
      r === t.TOUCH_ZOOM_PAN ? (m = p / h, p = h, e.object.isPerspectiveCamera ? f.multiplyScalar(m) : e.object.isOrthographicCamera ? (e.object.zoom /= m, e.object.updateProjectionMatrix()) : console.warn("THREE.TrackballControls: Unsupported camera type")) : (m = 1 + (S.y - g.y) * e.zoomSpeed, m !== 1 && m > 0 && (e.object.isPerspectiveCamera ? f.multiplyScalar(m) : e.object.isOrthographicCamera ? (e.object.zoom /= m, e.object.updateProjectionMatrix()) : console.warn("THREE.TrackballControls: Unsupported camera type")), e.staticMoving ? g.copy(S) : g.y += (S.y - g.y) * this.dynamicDampingFactor);
    }, this.panCamera = function() {
      const m = new C(), _ = new b(), D = new b();
      return function() {
        if (m.copy(v).sub(x), m.lengthSq()) {
          if (e.object.isOrthographicCamera) {
            const ee = (e.object.right - e.object.left) / e.object.zoom / e.domElement.clientWidth, oe = (e.object.top - e.object.bottom) / e.object.zoom / e.domElement.clientWidth;
            m.x *= ee, m.y *= oe;
          }
          m.multiplyScalar(f.length() * e.panSpeed), D.copy(f).cross(e.object.up).setLength(m.x), D.add(_.copy(e.object.up).setLength(m.y)), e.object.position.add(D), e.target.add(D), e.staticMoving ? x.copy(v) : x.add(m.subVectors(v, x).multiplyScalar(e.dynamicDampingFactor));
        }
      };
    }(), this.checkDistances = function() {
      (!e.noZoom || !e.noPan) && (f.lengthSq() > e.maxDistance * e.maxDistance && (e.object.position.addVectors(e.target, f.setLength(e.maxDistance)), g.copy(S)), f.lengthSq() < e.minDistance * e.minDistance && (e.object.position.addVectors(e.target, f.setLength(e.minDistance)), g.copy(S)));
    }, this.update = function() {
      f.subVectors(e.object.position, e.target), e.noRotate || e.rotateCamera(), e.noZoom || e.zoomCamera(), e.noPan || e.panCamera(), e.object.position.addVectors(e.target, f), e.object.isPerspectiveCamera ? (e.checkDistances(), e.object.lookAt(e.target), n.distanceToSquared(e.object.position) > i && (e.dispatchEvent(ut), n.copy(e.object.position))) : e.object.isOrthographicCamera ? (e.object.lookAt(e.target), (n.distanceToSquared(e.object.position) > i || a !== e.object.zoom) && (e.dispatchEvent(ut), n.copy(e.object.position), a = e.object.zoom)) : console.warn("THREE.TrackballControls: Unsupported camera type");
    }, this.reset = function() {
      r = t.NONE, c = t.NONE, e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.up.copy(e.up0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), f.subVectors(e.object.position, e.target), e.object.lookAt(e.target), e.dispatchEvent(ut), n.copy(e.object.position), a = e.object.zoom;
    };
    function z(m) {
      e.enabled !== !1 && (E.length === 0 && (e.domElement.setPointerCapture(m.pointerId), e.domElement.addEventListener("pointermove", se), e.domElement.addEventListener("pointerup", W)), Ne(m), m.pointerType === "touch" ? H(m) : P(m));
    }
    function se(m) {
      e.enabled !== !1 && (m.pointerType === "touch" ? pe(m) : J(m));
    }
    function W(m) {
      e.enabled !== !1 && (m.pointerType === "touch" ? de(m) : G(), fe(m), E.length === 0 && (e.domElement.releasePointerCapture(m.pointerId), e.domElement.removeEventListener("pointermove", se), e.domElement.removeEventListener("pointerup", W)));
    }
    function B(m) {
      fe(m);
    }
    function I(m) {
      e.enabled !== !1 && (window.removeEventListener("keydown", I), c === t.NONE && (m.code === e.keys[t.ROTATE] && !e.noRotate ? c = t.ROTATE : m.code === e.keys[t.ZOOM] && !e.noZoom ? c = t.ZOOM : m.code === e.keys[t.PAN] && !e.noPan && (c = t.PAN)));
    }
    function F() {
      e.enabled !== !1 && (c = t.NONE, window.addEventListener("keydown", I));
    }
    function P(m) {
      if (r === t.NONE)
        switch (m.button) {
          case e.mouseButtons.LEFT:
            r = t.ROTATE;
            break;
          case e.mouseButtons.MIDDLE:
            r = t.ZOOM;
            break;
          case e.mouseButtons.RIGHT:
            r = t.PAN;
            break;
        }
      const _ = c !== t.NONE ? c : r;
      _ === t.ROTATE && !e.noRotate ? (w.copy(j(m.pageX, m.pageY)), y.copy(w)) : _ === t.ZOOM && !e.noZoom ? (g.copy(k(m.pageX, m.pageY)), S.copy(g)) : _ === t.PAN && !e.noPan && (x.copy(k(m.pageX, m.pageY)), v.copy(x)), e.dispatchEvent(pt);
    }
    function J(m) {
      const _ = c !== t.NONE ? c : r;
      _ === t.ROTATE && !e.noRotate ? (y.copy(w), w.copy(j(m.pageX, m.pageY))) : _ === t.ZOOM && !e.noZoom ? S.copy(k(m.pageX, m.pageY)) : _ === t.PAN && !e.noPan && v.copy(k(m.pageX, m.pageY));
    }
    function G() {
      r = t.NONE, e.dispatchEvent(dt);
    }
    function Z(m) {
      if (e.enabled !== !1 && e.noZoom !== !0) {
        switch (m.preventDefault(), m.deltaMode) {
          case 2:
            g.y -= m.deltaY * 0.025;
            break;
          case 1:
            g.y -= m.deltaY * 0.01;
            break;
          default:
            g.y -= m.deltaY * 25e-5;
            break;
        }
        e.dispatchEvent(pt), e.dispatchEvent(dt);
      }
    }
    function H(m) {
      switch (De(m), E.length) {
        case 1:
          r = t.TOUCH_ROTATE, w.copy(j(E[0].pageX, E[0].pageY)), y.copy(w);
          break;
        default:
          r = t.TOUCH_ZOOM_PAN;
          const _ = E[0].pageX - E[1].pageX, D = E[0].pageY - E[1].pageY;
          h = p = Math.sqrt(_ * _ + D * D);
          const X = (E[0].pageX + E[1].pageX) / 2, ee = (E[0].pageY + E[1].pageY) / 2;
          x.copy(k(X, ee)), v.copy(x);
          break;
      }
      e.dispatchEvent(pt);
    }
    function pe(m) {
      switch (De(m), E.length) {
        case 1:
          y.copy(w), w.copy(j(m.pageX, m.pageY));
          break;
        default:
          const _ = Be(m), D = m.pageX - _.x, X = m.pageY - _.y;
          h = Math.sqrt(D * D + X * X);
          const ee = (m.pageX + _.x) / 2, oe = (m.pageY + _.y) / 2;
          v.copy(k(ee, oe));
          break;
      }
    }
    function de(m) {
      switch (E.length) {
        case 0:
          r = t.NONE;
          break;
        case 1:
          r = t.TOUCH_ROTATE, w.copy(j(m.pageX, m.pageY)), y.copy(w);
          break;
        case 2:
          r = t.TOUCH_ZOOM_PAN;
          for (let _ = 0; _ < E.length; _++)
            if (E[_].pointerId !== m.pointerId) {
              const D = N[E[_].pointerId];
              w.copy(j(D.x, D.y)), y.copy(w);
              break;
            }
          break;
      }
      e.dispatchEvent(dt);
    }
    function re(m) {
      e.enabled !== !1 && m.preventDefault();
    }
    function Ne(m) {
      E.push(m);
    }
    function fe(m) {
      delete N[m.pointerId];
      for (let _ = 0; _ < E.length; _++)
        if (E[_].pointerId == m.pointerId) {
          E.splice(_, 1);
          return;
        }
    }
    function De(m) {
      let _ = N[m.pointerId];
      _ === void 0 && (_ = new C(), N[m.pointerId] = _), _.set(m.pageX, m.pageY);
    }
    function Be(m) {
      const _ = m.pointerId === E[0].pointerId ? E[1] : E[0];
      return N[_.pointerId];
    }
    this.dispose = function() {
      e.domElement.removeEventListener("contextmenu", re), e.domElement.removeEventListener("pointerdown", z), e.domElement.removeEventListener("pointercancel", B), e.domElement.removeEventListener("wheel", Z), e.domElement.removeEventListener("pointermove", se), e.domElement.removeEventListener("pointerup", W), window.removeEventListener("keydown", I), window.removeEventListener("keyup", F);
    }, this.domElement.addEventListener("contextmenu", re), this.domElement.addEventListener("pointerdown", z), this.domElement.addEventListener("pointercancel", B), this.domElement.addEventListener("wheel", Z, { passive: !1 }), window.addEventListener("keydown", I), window.addEventListener("keyup", F), this.handleResize(), this.update();
  }
}
const Ee = new mn(), q = new b(), we = new b(), O = new K(), qt = {
  X: new b(1, 0, 0),
  Y: new b(0, 1, 0),
  Z: new b(0, 0, 1)
}, ft = { type: "change" }, Wt = { type: "mouseDown" }, $t = { type: "mouseUp", mode: null }, Jt = { type: "objectChange" };
class to extends Ke {
  constructor(s, o) {
    super(), o === void 0 && (console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'), o = document), this.isTransformControls = !0, this.visible = !1, this.domElement = o, this.domElement.style.touchAction = "none";
    const e = new ao();
    this._gizmo = e, this.add(e);
    const t = new co();
    this._plane = t, this.add(t);
    const i = this;
    function n(S, x) {
      let v = x;
      Object.defineProperty(i, S, {
        get: function() {
          return v !== void 0 ? v : x;
        },
        set: function(E) {
          v !== E && (v = E, t[S] = E, e[S] = E, i.dispatchEvent({ type: S + "-changed", value: E }), i.dispatchEvent(ft));
        }
      }), i[S] = x, t[S] = x, e[S] = x;
    }
    n("camera", s), n("object", void 0), n("enabled", !0), n("axis", null), n("mode", "translate"), n("translationSnap", null), n("rotationSnap", null), n("scaleSnap", null), n("space", "world"), n("size", 1), n("dragging", !1), n("showX", !0), n("showY", !0), n("showZ", !0);
    const a = new b(), r = new b(), c = new K(), p = new K(), h = new b(), d = new K(), f = new b(), y = new b(), w = new b(), T = 0, g = new b();
    n("worldPosition", a), n("worldPositionStart", r), n("worldQuaternion", c), n("worldQuaternionStart", p), n("cameraPosition", h), n("cameraQuaternion", d), n("pointStart", f), n("pointEnd", y), n("rotationAxis", w), n("rotationAngle", T), n("eye", g), this._offset = new b(), this._startNorm = new b(), this._endNorm = new b(), this._cameraScale = new b(), this._parentPosition = new b(), this._parentQuaternion = new K(), this._parentQuaternionInv = new K(), this._parentScale = new b(), this._worldScaleStart = new b(), this._worldQuaternionInv = new K(), this._worldScale = new b(), this._positionStart = new b(), this._quaternionStart = new K(), this._scaleStart = new b(), this._getPointer = no.bind(this), this._onPointerDown = oo.bind(this), this._onPointerHover = so.bind(this), this._onPointerMove = io.bind(this), this._onPointerUp = ro.bind(this), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointermove", this._onPointerHover), this.domElement.addEventListener("pointerup", this._onPointerUp);
  }
  // updateMatrixWorld  updates key transformation variables
  updateMatrixWorld() {
    this.object !== void 0 && (this.object.updateMatrixWorld(), this.object.parent === null ? console.error("TransformControls: The attached 3D object must be a part of the scene graph.") : this.object.parent.matrixWorld.decompose(this._parentPosition, this._parentQuaternion, this._parentScale), this.object.matrixWorld.decompose(this.worldPosition, this.worldQuaternion, this._worldScale), this._parentQuaternionInv.copy(this._parentQuaternion).invert(), this._worldQuaternionInv.copy(this.worldQuaternion).invert()), this.camera.updateMatrixWorld(), this.camera.matrixWorld.decompose(this.cameraPosition, this.cameraQuaternion, this._cameraScale), this.camera.isOrthographicCamera ? this.camera.getWorldDirection(this.eye).negate() : this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(), super.updateMatrixWorld(this);
  }
  pointerHover(s) {
    if (this.object === void 0 || this.dragging === !0)
      return;
    Ee.setFromCamera(s, this.camera);
    const o = mt(this._gizmo.picker[this.mode], Ee);
    o ? this.axis = o.object.name : this.axis = null;
  }
  pointerDown(s) {
    if (!(this.object === void 0 || this.dragging === !0 || s.button !== 0) && this.axis !== null) {
      Ee.setFromCamera(s, this.camera);
      const o = mt(this._plane, Ee, !0);
      o && (this.object.updateMatrixWorld(), this.object.parent.updateMatrixWorld(), this._positionStart.copy(this.object.position), this._quaternionStart.copy(this.object.quaternion), this._scaleStart.copy(this.object.scale), this.object.matrixWorld.decompose(this.worldPositionStart, this.worldQuaternionStart, this._worldScaleStart), this.pointStart.copy(o.point).sub(this.worldPositionStart)), this.dragging = !0, Wt.mode = this.mode, this.dispatchEvent(Wt);
    }
  }
  pointerMove(s) {
    const o = this.axis, e = this.mode, t = this.object;
    let i = this.space;
    if (e === "scale" ? i = "local" : (o === "E" || o === "XYZE" || o === "XYZ") && (i = "world"), t === void 0 || o === null || this.dragging === !1 || s.button !== -1)
      return;
    Ee.setFromCamera(s, this.camera);
    const n = mt(this._plane, Ee, !0);
    if (n) {
      if (this.pointEnd.copy(n.point).sub(this.worldPositionStart), e === "translate")
        this._offset.copy(this.pointEnd).sub(this.pointStart), i === "local" && o !== "XYZ" && this._offset.applyQuaternion(this._worldQuaternionInv), o.indexOf("X") === -1 && (this._offset.x = 0), o.indexOf("Y") === -1 && (this._offset.y = 0), o.indexOf("Z") === -1 && (this._offset.z = 0), i === "local" && o !== "XYZ" ? this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale) : this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale), t.position.copy(this._offset).add(this._positionStart), this.translationSnap && (i === "local" && (t.position.applyQuaternion(O.copy(this._quaternionStart).invert()), o.search("X") !== -1 && (t.position.x = Math.round(t.position.x / this.translationSnap) * this.translationSnap), o.search("Y") !== -1 && (t.position.y = Math.round(t.position.y / this.translationSnap) * this.translationSnap), o.search("Z") !== -1 && (t.position.z = Math.round(t.position.z / this.translationSnap) * this.translationSnap), t.position.applyQuaternion(this._quaternionStart)), i === "world" && (t.parent && t.position.add(q.setFromMatrixPosition(t.parent.matrixWorld)), o.search("X") !== -1 && (t.position.x = Math.round(t.position.x / this.translationSnap) * this.translationSnap), o.search("Y") !== -1 && (t.position.y = Math.round(t.position.y / this.translationSnap) * this.translationSnap), o.search("Z") !== -1 && (t.position.z = Math.round(t.position.z / this.translationSnap) * this.translationSnap), t.parent && t.position.sub(q.setFromMatrixPosition(t.parent.matrixWorld))));
      else if (e === "scale") {
        if (o.search("XYZ") !== -1) {
          let a = this.pointEnd.length() / this.pointStart.length();
          this.pointEnd.dot(this.pointStart) < 0 && (a *= -1), we.set(a, a, a);
        } else
          q.copy(this.pointStart), we.copy(this.pointEnd), q.applyQuaternion(this._worldQuaternionInv), we.applyQuaternion(this._worldQuaternionInv), we.divide(q), o.search("X") === -1 && (we.x = 1), o.search("Y") === -1 && (we.y = 1), o.search("Z") === -1 && (we.z = 1);
        t.scale.copy(this._scaleStart).multiply(we), this.scaleSnap && (o.search("X") !== -1 && (t.scale.x = Math.round(t.scale.x / this.scaleSnap) * this.scaleSnap || this.scaleSnap), o.search("Y") !== -1 && (t.scale.y = Math.round(t.scale.y / this.scaleSnap) * this.scaleSnap || this.scaleSnap), o.search("Z") !== -1 && (t.scale.z = Math.round(t.scale.z / this.scaleSnap) * this.scaleSnap || this.scaleSnap));
      } else if (e === "rotate") {
        this._offset.copy(this.pointEnd).sub(this.pointStart);
        const a = 20 / this.worldPosition.distanceTo(q.setFromMatrixPosition(this.camera.matrixWorld));
        o === "E" ? (this.rotationAxis.copy(this.eye), this.rotationAngle = this.pointEnd.angleTo(this.pointStart), this._startNorm.copy(this.pointStart).normalize(), this._endNorm.copy(this.pointEnd).normalize(), this.rotationAngle *= this._endNorm.cross(this._startNorm).dot(this.eye) < 0 ? 1 : -1) : o === "XYZE" ? (this.rotationAxis.copy(this._offset).cross(this.eye).normalize(), this.rotationAngle = this._offset.dot(q.copy(this.rotationAxis).cross(this.eye)) * a) : (o === "X" || o === "Y" || o === "Z") && (this.rotationAxis.copy(qt[o]), q.copy(qt[o]), i === "local" && q.applyQuaternion(this.worldQuaternion), this.rotationAngle = this._offset.dot(q.cross(this.eye).normalize()) * a), this.rotationSnap && (this.rotationAngle = Math.round(this.rotationAngle / this.rotationSnap) * this.rotationSnap), i === "local" && o !== "E" && o !== "XYZE" ? (t.quaternion.copy(this._quaternionStart), t.quaternion.multiply(O.setFromAxisAngle(this.rotationAxis, this.rotationAngle)).normalize()) : (this.rotationAxis.applyQuaternion(this._parentQuaternionInv), t.quaternion.copy(O.setFromAxisAngle(this.rotationAxis, this.rotationAngle)), t.quaternion.multiply(this._quaternionStart).normalize());
      }
      this.dispatchEvent(ft), this.dispatchEvent(Jt);
    }
  }
  pointerUp(s) {
    s.button === 0 && (this.dragging && this.axis !== null && ($t.mode = this.mode, this.dispatchEvent($t)), this.dragging = !1, this.axis = null);
  }
  dispose() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerHover), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.traverse(function(s) {
      s.geometry && s.geometry.dispose(), s.material && s.material.dispose();
    });
  }
  // Set current object
  attach(s) {
    return this.object = s, this.visible = !0, this;
  }
  // Detach from object
  detach() {
    return this.object = void 0, this.visible = !1, this.axis = null, this;
  }
  reset() {
    this.enabled && this.dragging && (this.object.position.copy(this._positionStart), this.object.quaternion.copy(this._quaternionStart), this.object.scale.copy(this._scaleStart), this.dispatchEvent(ft), this.dispatchEvent(Jt), this.pointStart.copy(this.pointEnd));
  }
  getRaycaster() {
    return Ee;
  }
  // TODO: deprecate
  getMode() {
    return this.mode;
  }
  setMode(s) {
    this.mode = s;
  }
  setTranslationSnap(s) {
    this.translationSnap = s;
  }
  setRotationSnap(s) {
    this.rotationSnap = s;
  }
  setScaleSnap(s) {
    this.scaleSnap = s;
  }
  setSize(s) {
    this.size = s;
  }
  setSpace(s) {
    this.space = s;
  }
}
function no(l) {
  if (this.domElement.ownerDocument.pointerLockElement)
    return {
      x: 0,
      y: 0,
      button: l.button
    };
  {
    const s = this.domElement.getBoundingClientRect();
    return {
      x: (l.clientX - s.left) / s.width * 2 - 1,
      y: -(l.clientY - s.top) / s.height * 2 + 1,
      button: l.button
    };
  }
}
function so(l) {
  if (this.enabled)
    switch (l.pointerType) {
      case "mouse":
      case "pen":
        this.pointerHover(this._getPointer(l));
        break;
    }
}
function oo(l) {
  this.enabled && (document.pointerLockElement || this.domElement.setPointerCapture(l.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.pointerHover(this._getPointer(l)), this.pointerDown(this._getPointer(l)));
}
function io(l) {
  this.enabled && this.pointerMove(this._getPointer(l));
}
function ro(l) {
  this.enabled && (this.domElement.releasePointerCapture(l.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.pointerUp(this._getPointer(l)));
}
function mt(l, s, o) {
  const e = s.intersectObject(l, !0);
  for (let t = 0; t < e.length; t++)
    if (e[t].object.visible || o)
      return e[t];
  return !1;
}
const We = new gn(), R = new b(0, 1, 0), en = new b(0, 0, 0), tn = new Oe(), $e = new K(), et = new K(), ie = new b(), nn = new Oe(), Xe = new b(1, 0, 0), Se = new b(0, 1, 0), Ye = new b(0, 0, 1), Je = new b(), Ue = new b(), Ge = new b();
class ao extends Ke {
  constructor() {
    super(), this.isTransformControlsGizmo = !0, this.type = "TransformControlsGizmo";
    const s = new Me({
      depthTest: !1,
      depthWrite: !1,
      fog: !1,
      toneMapped: !1,
      transparent: !0
    }), o = new un({
      depthTest: !1,
      depthWrite: !1,
      fog: !1,
      toneMapped: !1,
      transparent: !0
    }), e = s.clone();
    e.opacity = 0.15;
    const t = o.clone();
    t.opacity = 0.5;
    const i = s.clone();
    i.color.setHex(16711680);
    const n = s.clone();
    n.color.setHex(65280);
    const a = s.clone();
    a.color.setHex(255);
    const r = s.clone();
    r.color.setHex(16711680), r.opacity = 0.5;
    const c = s.clone();
    c.color.setHex(65280), c.opacity = 0.5;
    const p = s.clone();
    p.color.setHex(255), p.opacity = 0.5;
    const h = s.clone();
    h.opacity = 0.25;
    const d = s.clone();
    d.color.setHex(16776960), d.opacity = 0.25, s.clone().color.setHex(16776960);
    const y = s.clone();
    y.color.setHex(7895160);
    const w = new Q(0, 0.04, 0.1, 12);
    w.translate(0, 0.05, 0);
    const T = new V(0.08, 0.08, 0.08);
    T.translate(0, 0.04, 0);
    const g = new yt();
    g.setAttribute("position", new Nt([0, 0, 0, 1, 0, 0], 3));
    const S = new Q(75e-4, 75e-4, 0.5, 3);
    S.translate(0, 0.25, 0);
    function x(P, J) {
      const G = new Ce(P, 75e-4, 3, 64, J * Math.PI * 2);
      return G.rotateY(Math.PI / 2), G.rotateX(Math.PI / 2), G;
    }
    function v() {
      const P = new yt();
      return P.setAttribute("position", new Nt([0, 0, 0, 1, 1, 1], 3)), P;
    }
    const E = {
      X: [
        [new M(w, i), [0.5, 0, 0], [0, 0, -Math.PI / 2]],
        [new M(w, i), [-0.5, 0, 0], [0, 0, Math.PI / 2]],
        [new M(S, i), [0, 0, 0], [0, 0, -Math.PI / 2]]
      ],
      Y: [
        [new M(w, n), [0, 0.5, 0]],
        [new M(w, n), [0, -0.5, 0], [Math.PI, 0, 0]],
        [new M(S, n)]
      ],
      Z: [
        [new M(w, a), [0, 0, 0.5], [Math.PI / 2, 0, 0]],
        [new M(w, a), [0, 0, -0.5], [-Math.PI / 2, 0, 0]],
        [new M(S, a), null, [Math.PI / 2, 0, 0]]
      ],
      XYZ: [
        [new M(new Qe(0.1, 0), h.clone()), [0, 0, 0]]
      ],
      XY: [
        [new M(new V(0.15, 0.15, 0.01), p.clone()), [0.15, 0.15, 0]]
      ],
      YZ: [
        [new M(new V(0.15, 0.15, 0.01), r.clone()), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]
      ],
      XZ: [
        [new M(new V(0.15, 0.15, 0.01), c.clone()), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]
      ]
    }, N = {
      X: [
        [new M(new Q(0.2, 0, 0.6, 4), e), [0.3, 0, 0], [0, 0, -Math.PI / 2]],
        [new M(new Q(0.2, 0, 0.6, 4), e), [-0.3, 0, 0], [0, 0, Math.PI / 2]]
      ],
      Y: [
        [new M(new Q(0.2, 0, 0.6, 4), e), [0, 0.3, 0]],
        [new M(new Q(0.2, 0, 0.6, 4), e), [0, -0.3, 0], [0, 0, Math.PI]]
      ],
      Z: [
        [new M(new Q(0.2, 0, 0.6, 4), e), [0, 0, 0.3], [Math.PI / 2, 0, 0]],
        [new M(new Q(0.2, 0, 0.6, 4), e), [0, 0, -0.3], [-Math.PI / 2, 0, 0]]
      ],
      XYZ: [
        [new M(new Qe(0.2, 0), e)]
      ],
      XY: [
        [new M(new V(0.2, 0.2, 0.01), e), [0.15, 0.15, 0]]
      ],
      YZ: [
        [new M(new V(0.2, 0.2, 0.01), e), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]
      ],
      XZ: [
        [new M(new V(0.2, 0.2, 0.01), e), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]
      ]
    }, k = {
      START: [
        [new M(new Qe(0.01, 2), t), null, null, null, "helper"]
      ],
      END: [
        [new M(new Qe(0.01, 2), t), null, null, null, "helper"]
      ],
      DELTA: [
        [new le(v(), t), null, null, null, "helper"]
      ],
      X: [
        [new le(g, t.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]
      ],
      Y: [
        [new le(g, t.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]
      ],
      Z: [
        [new le(g, t.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]
      ]
    }, j = {
      XYZE: [
        [new M(x(0.5, 1), y), null, [0, Math.PI / 2, 0]]
      ],
      X: [
        [new M(x(0.5, 0.5), i)]
      ],
      Y: [
        [new M(x(0.5, 0.5), n), null, [0, 0, -Math.PI / 2]]
      ],
      Z: [
        [new M(x(0.5, 0.5), a), null, [0, Math.PI / 2, 0]]
      ],
      E: [
        [new M(x(0.75, 1), d), null, [0, Math.PI / 2, 0]]
      ]
    }, z = {
      AXIS: [
        [new le(g, t.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]
      ]
    }, se = {
      XYZE: [
        [new M(new cs(0.25, 10, 8), e)]
      ],
      X: [
        [new M(new Ce(0.5, 0.1, 4, 24), e), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2]]
      ],
      Y: [
        [new M(new Ce(0.5, 0.1, 4, 24), e), [0, 0, 0], [Math.PI / 2, 0, 0]]
      ],
      Z: [
        [new M(new Ce(0.5, 0.1, 4, 24), e), [0, 0, 0], [0, 0, -Math.PI / 2]]
      ],
      E: [
        [new M(new Ce(0.75, 0.1, 2, 24), e)]
      ]
    }, W = {
      X: [
        [new M(T, i), [0.5, 0, 0], [0, 0, -Math.PI / 2]],
        [new M(S, i), [0, 0, 0], [0, 0, -Math.PI / 2]],
        [new M(T, i), [-0.5, 0, 0], [0, 0, Math.PI / 2]]
      ],
      Y: [
        [new M(T, n), [0, 0.5, 0]],
        [new M(S, n)],
        [new M(T, n), [0, -0.5, 0], [0, 0, Math.PI]]
      ],
      Z: [
        [new M(T, a), [0, 0, 0.5], [Math.PI / 2, 0, 0]],
        [new M(S, a), [0, 0, 0], [Math.PI / 2, 0, 0]],
        [new M(T, a), [0, 0, -0.5], [-Math.PI / 2, 0, 0]]
      ],
      XY: [
        [new M(new V(0.15, 0.15, 0.01), p), [0.15, 0.15, 0]]
      ],
      YZ: [
        [new M(new V(0.15, 0.15, 0.01), r), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]
      ],
      XZ: [
        [new M(new V(0.15, 0.15, 0.01), c), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]
      ],
      XYZ: [
        [new M(new V(0.1, 0.1, 0.1), h.clone())]
      ]
    }, B = {
      X: [
        [new M(new Q(0.2, 0, 0.6, 4), e), [0.3, 0, 0], [0, 0, -Math.PI / 2]],
        [new M(new Q(0.2, 0, 0.6, 4), e), [-0.3, 0, 0], [0, 0, Math.PI / 2]]
      ],
      Y: [
        [new M(new Q(0.2, 0, 0.6, 4), e), [0, 0.3, 0]],
        [new M(new Q(0.2, 0, 0.6, 4), e), [0, -0.3, 0], [0, 0, Math.PI]]
      ],
      Z: [
        [new M(new Q(0.2, 0, 0.6, 4), e), [0, 0, 0.3], [Math.PI / 2, 0, 0]],
        [new M(new Q(0.2, 0, 0.6, 4), e), [0, 0, -0.3], [-Math.PI / 2, 0, 0]]
      ],
      XY: [
        [new M(new V(0.2, 0.2, 0.01), e), [0.15, 0.15, 0]]
      ],
      YZ: [
        [new M(new V(0.2, 0.2, 0.01), e), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]
      ],
      XZ: [
        [new M(new V(0.2, 0.2, 0.01), e), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]
      ],
      XYZ: [
        [new M(new V(0.2, 0.2, 0.2), e), [0, 0, 0]]
      ]
    }, I = {
      X: [
        [new le(g, t.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]
      ],
      Y: [
        [new le(g, t.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]
      ],
      Z: [
        [new le(g, t.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]
      ]
    };
    function F(P) {
      const J = new Ke();
      for (const G in P)
        for (let Z = P[G].length; Z--; ) {
          const H = P[G][Z][0].clone(), pe = P[G][Z][1], de = P[G][Z][2], re = P[G][Z][3], Ne = P[G][Z][4];
          H.name = G, H.tag = Ne, pe && H.position.set(pe[0], pe[1], pe[2]), de && H.rotation.set(de[0], de[1], de[2]), re && H.scale.set(re[0], re[1], re[2]), H.updateMatrix();
          const fe = H.geometry.clone();
          fe.applyMatrix4(H.matrix), H.geometry = fe, H.renderOrder = 1 / 0, H.position.set(0, 0, 0), H.rotation.set(0, 0, 0), H.scale.set(1, 1, 1), J.add(H);
        }
      return J;
    }
    this.gizmo = {}, this.picker = {}, this.helper = {}, this.add(this.gizmo.translate = F(E)), this.add(this.gizmo.rotate = F(j)), this.add(this.gizmo.scale = F(W)), this.add(this.picker.translate = F(N)), this.add(this.picker.rotate = F(se)), this.add(this.picker.scale = F(B)), this.add(this.helper.translate = F(k)), this.add(this.helper.rotate = F(z)), this.add(this.helper.scale = F(I)), this.picker.translate.visible = !1, this.picker.rotate.visible = !1, this.picker.scale.visible = !1;
  }
  // updateMatrixWorld will update transformations and appearance of individual handles
  updateMatrixWorld(s) {
    const e = (this.mode === "scale" ? "local" : this.space) === "local" ? this.worldQuaternion : et;
    this.gizmo.translate.visible = this.mode === "translate", this.gizmo.rotate.visible = this.mode === "rotate", this.gizmo.scale.visible = this.mode === "scale", this.helper.translate.visible = this.mode === "translate", this.helper.rotate.visible = this.mode === "rotate", this.helper.scale.visible = this.mode === "scale";
    let t = [];
    t = t.concat(this.picker[this.mode].children), t = t.concat(this.gizmo[this.mode].children), t = t.concat(this.helper[this.mode].children);
    for (let i = 0; i < t.length; i++) {
      const n = t[i];
      n.visible = !0, n.rotation.set(0, 0, 0), n.position.copy(this.worldPosition);
      let a;
      if (this.camera.isOrthographicCamera ? a = (this.camera.top - this.camera.bottom) / this.camera.zoom : a = this.worldPosition.distanceTo(this.cameraPosition) * Math.min(1.9 * Math.tan(Math.PI * this.camera.fov / 360) / this.camera.zoom, 7), n.scale.set(1, 1, 1).multiplyScalar(a * this.size / 4), n.tag === "helper") {
        n.visible = !1, n.name === "AXIS" ? (n.position.copy(this.worldPositionStart), n.visible = !!this.axis, this.axis === "X" && (O.setFromEuler(We.set(0, 0, 0)), n.quaternion.copy(e).multiply(O), Math.abs(R.copy(Xe).applyQuaternion(e).dot(this.eye)) > 0.9 && (n.visible = !1)), this.axis === "Y" && (O.setFromEuler(We.set(0, 0, Math.PI / 2)), n.quaternion.copy(e).multiply(O), Math.abs(R.copy(Se).applyQuaternion(e).dot(this.eye)) > 0.9 && (n.visible = !1)), this.axis === "Z" && (O.setFromEuler(We.set(0, Math.PI / 2, 0)), n.quaternion.copy(e).multiply(O), Math.abs(R.copy(Ye).applyQuaternion(e).dot(this.eye)) > 0.9 && (n.visible = !1)), this.axis === "XYZE" && (O.setFromEuler(We.set(0, Math.PI / 2, 0)), R.copy(this.rotationAxis), n.quaternion.setFromRotationMatrix(tn.lookAt(en, R, Se)), n.quaternion.multiply(O), n.visible = this.dragging), this.axis === "E" && (n.visible = !1)) : n.name === "START" ? (n.position.copy(this.worldPositionStart), n.visible = this.dragging) : n.name === "END" ? (n.position.copy(this.worldPosition), n.visible = this.dragging) : n.name === "DELTA" ? (n.position.copy(this.worldPositionStart), n.quaternion.copy(this.worldQuaternionStart), q.set(1e-10, 1e-10, 1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1), q.applyQuaternion(this.worldQuaternionStart.clone().invert()), n.scale.copy(q), n.visible = this.dragging) : (n.quaternion.copy(e), this.dragging ? n.position.copy(this.worldPositionStart) : n.position.copy(this.worldPosition), this.axis && (n.visible = this.axis.search(n.name) !== -1));
        continue;
      }
      n.quaternion.copy(e), this.mode === "translate" || this.mode === "scale" ? (n.name === "X" && Math.abs(R.copy(Xe).applyQuaternion(e).dot(this.eye)) > 0.99 && (n.scale.set(1e-10, 1e-10, 1e-10), n.visible = !1), n.name === "Y" && Math.abs(R.copy(Se).applyQuaternion(e).dot(this.eye)) > 0.99 && (n.scale.set(1e-10, 1e-10, 1e-10), n.visible = !1), n.name === "Z" && Math.abs(R.copy(Ye).applyQuaternion(e).dot(this.eye)) > 0.99 && (n.scale.set(1e-10, 1e-10, 1e-10), n.visible = !1), n.name === "XY" && Math.abs(R.copy(Ye).applyQuaternion(e).dot(this.eye)) < 0.2 && (n.scale.set(1e-10, 1e-10, 1e-10), n.visible = !1), n.name === "YZ" && Math.abs(R.copy(Xe).applyQuaternion(e).dot(this.eye)) < 0.2 && (n.scale.set(1e-10, 1e-10, 1e-10), n.visible = !1), n.name === "XZ" && Math.abs(R.copy(Se).applyQuaternion(e).dot(this.eye)) < 0.2 && (n.scale.set(1e-10, 1e-10, 1e-10), n.visible = !1)) : this.mode === "rotate" && ($e.copy(e), R.copy(this.eye).applyQuaternion(O.copy(e).invert()), n.name.search("E") !== -1 && n.quaternion.setFromRotationMatrix(tn.lookAt(this.eye, en, Se)), n.name === "X" && (O.setFromAxisAngle(Xe, Math.atan2(-R.y, R.z)), O.multiplyQuaternions($e, O), n.quaternion.copy(O)), n.name === "Y" && (O.setFromAxisAngle(Se, Math.atan2(R.x, R.z)), O.multiplyQuaternions($e, O), n.quaternion.copy(O)), n.name === "Z" && (O.setFromAxisAngle(Ye, Math.atan2(R.y, R.x)), O.multiplyQuaternions($e, O), n.quaternion.copy(O))), n.visible = n.visible && (n.name.indexOf("X") === -1 || this.showX), n.visible = n.visible && (n.name.indexOf("Y") === -1 || this.showY), n.visible = n.visible && (n.name.indexOf("Z") === -1 || this.showZ), n.visible = n.visible && (n.name.indexOf("E") === -1 || this.showX && this.showY && this.showZ), n.material._color = n.material._color || n.material.color.clone(), n.material._opacity = n.material._opacity || n.material.opacity, n.material.color.copy(n.material._color), n.material.opacity = n.material._opacity, this.enabled && this.axis && (n.name === this.axis || this.axis.split("").some(function(r) {
        return n.name === r;
      })) && (n.material.color.setHex(16776960), n.material.opacity = 1);
    }
    super.updateMatrixWorld(s);
  }
}
class co extends M {
  constructor() {
    super(
      new ls(1e5, 1e5, 2, 2),
      new Me({ visible: !1, wireframe: !0, side: pn, transparent: !0, opacity: 0.1, toneMapped: !1 })
    ), this.isTransformControlsPlane = !0, this.type = "TransformControlsPlane";
  }
  updateMatrixWorld(s) {
    let o = this.space;
    switch (this.position.copy(this.worldPosition), this.mode === "scale" && (o = "local"), Je.copy(Xe).applyQuaternion(o === "local" ? this.worldQuaternion : et), Ue.copy(Se).applyQuaternion(o === "local" ? this.worldQuaternion : et), Ge.copy(Ye).applyQuaternion(o === "local" ? this.worldQuaternion : et), R.copy(Ue), this.mode) {
      case "translate":
      case "scale":
        switch (this.axis) {
          case "X":
            R.copy(this.eye).cross(Je), ie.copy(Je).cross(R);
            break;
          case "Y":
            R.copy(this.eye).cross(Ue), ie.copy(Ue).cross(R);
            break;
          case "Z":
            R.copy(this.eye).cross(Ge), ie.copy(Ge).cross(R);
            break;
          case "XY":
            ie.copy(Ge);
            break;
          case "YZ":
            ie.copy(Je);
            break;
          case "XZ":
            R.copy(Ge), ie.copy(Ue);
            break;
          case "XYZ":
          case "E":
            ie.set(0, 0, 0);
            break;
        }
        break;
      case "rotate":
      default:
        ie.set(0, 0, 0);
    }
    ie.length() === 0 ? this.quaternion.copy(this.cameraQuaternion) : (nn.lookAt(q.set(0, 0, 0), ie, R), this.quaternion.setFromRotationMatrix(nn)), super.updateMatrixWorld(s);
  }
}
let ue = {
  OrbitControls: zs,
  DragControls: Vs,
  FirstPersonControls: Bs,
  FlyControls: Qs,
  PointerLockControls: Js,
  TrackballControls: eo,
  TransformControls: to
};
Object.entries(ue).forEach(([l, s]) => {
  const o = (e, { expression: t }, { evaluateLater: i, effect: n }) => {
    const a = i(t);
    n(() => {
      a((r) => {
        window.Norska.controls ? Object.assign(window.Norska.controls, r[1]) : (Array.isArray(r[0]) ? (ue = new s(...r[0]), Object.assign(ue, r[1])) : ue = new s(...r), window.Norska.controls = ue), window.Norska.controls.update();
      });
    });
  };
  ue[l] = o;
});
ue = Object.fromEntries(
  Object.entries(ue).map(([l, s]) => [l.toLowerCase(), s])
);
const lo = ue, ho = (l, { expression: s }, { evaluateLater: o, effect: e }) => {
  const t = o(s), i = () => {
    t((n) => {
      const { mesh: a, light: r } = l._norska;
      a && a.position.set(...n), r && r.position.set(...n);
    });
  };
  l.addEventListener("norska:load:end", i), e(i);
}, uo = (l, { expression: s }, { evaluateLater: o, effect: e }) => {
  const t = o(s), i = () => {
    t((n) => {
      const { mesh: a, light: r } = l._norska;
      a && a.rotation.set(...n), r && r.rotation.set(...n);
    });
  };
  l.addEventListener("norska:load:end", i), e(i);
}, po = (l, { expression: s }, { evaluateLater: o, effect: e }) => {
  const t = o(s), i = () => {
    t((n) => {
      const { mesh: a, light: r } = l._norska;
      a && a.scale.set(...n), r && r.scale.set(...n);
    });
  };
  l.addEventListener("norska:load:end", i), e(i);
}, fo = (l, { expression: s }, { evaluateLater: o, effect: e }, t) => {
  const i = o(s);
  e(() => {
    const { mesh: n } = l._norska;
    n && i(([, a]) => {
      n.geometry.uuid !== t.uuid && (n.geometry = t), Object.assign(n.geometry, a);
    });
  });
}, mo = (l, { expression: s }, { evaluateLater: o, effect: e }, t) => {
  const i = o(s);
  e(() => {
    const { mesh: n } = l._norska;
    n && i(({ color: a, ...r }) => {
      n.material.uuid !== t.uuid && (n.material = t), a && n.material.color.set(a), Object.assign(n.material, r);
    });
  });
}, go = (l, {}, { cleanup: s }) => {
  const { scene: o } = window.Norska, e = () => {
    l._norska.mesh = new M(), l.parentNode._norska && l.parentNode._norska.mesh ? l.parentNode._norska.mesh.add(l._norska.mesh) : o.add(l._norska.mesh);
  }, t = () => {
    l._norska.mesh.parent ? l._norska.mesh.parent.remove(l._norska.mesh) : o.remove(l._norska.mesh);
  };
  l.hasOwnProperty("_norska") || (l._norska = {}), e(), s(() => t());
}, wo = (l, { expression: s }, { evaluateLater: o, effect: e }, t) => {
  const { scene: i } = window.Norska, n = s ? o(s) : [];
  e(() => {
    const { light: a } = l._norska;
    n(([, r]) => {
      a ? Object.assign(a, r) : (Object.assign(t, r), i.add(t), l._norska.light = t);
    });
  });
}, yo = (l) => {
  l.magic("three", () => Ie);
}, Eo = (l) => {
  l.magic("frame", () => (s) => {
    const o = () => {
      s(), requestAnimationFrame(o);
    };
    o();
  });
}, bo = (l) => {
  l.magic("n", (s) => s._norska), l.magic("N", () => window.Norska);
}, To = {
  mesh: go,
  geometry: fo,
  material: mo,
  light: wo
}, sn = {
  canvas: us,
  camera: hs,
  load: Ks,
  scene: ps,
  position: ho,
  rotation: uo,
  scale: po,
  ...lo
}, on = {
  frame: Eo,
  n: bo,
  three: yo
}, rn = Object.fromEntries(
  Object.entries(Ie).map(([l, s]) => [l.toLowerCase(), s])
), Mo = (l) => (s) => {
  const o = {
    prefix: "3",
    ...l
  };
  s.directive(o.prefix, (e, t, i) => {
    const n = t.expression ? i.evaluate(t.expression) : [];
    try {
      if (t.modifiers[0] in sn) {
        sn[t.modifiers[0]](e, t, i);
        return;
      }
      const a = (() => Array.isArray(n) ? new rn[t.modifiers[0]](...n) : new rn[t.modifiers[0]]({ ...n }))();
      To[(() => {
        if (a instanceof Ie.Mesh)
          return "mesh";
        if (a instanceof Ie.Light)
          return "light";
        if (a instanceof Ie.BufferGeometry)
          return "geometry";
        if (a instanceof Ie.Material)
          return "material";
      })()](e, t, i, a);
    } catch (a) {
      console.error(a);
    }
  }), Object.keys(on).forEach((e) => {
    on[e](s, o);
  });
};
export {
  Mo as default
};
