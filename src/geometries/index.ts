import boxGeometry from './boxGeometry';
import capsuleGeometry from './capsuleGeometry';
import circleGeometry from './circleGeometry';
import coneGeometry from './coneGeometry';
import cylinderGeometry from './cylinderGeometry';
import dodecahedronGeometry from './dodecahedronGeometry';
import edgesGeometry from './edgesGeometry';
import extrudeGeometry from './extrudeGeometry';
import icosahedronGeometry from './icosahedronGeometry';
import latheGeometry from './latheGeometry';
import octahedronGeometry from './octahedronGeometry';
import planeGeometry from './planeGeometry';
import polyhedronGeometry from './polyhedronGeometry';
import ringGeometry from './ringGeometry';
import shapeGeometry from './shapeGeometry';
import sphereGeometry from './sphereGeometry';
import tetrahedronGeometry from './tetrahedronGeometry';
import torusGeometry from './torusGeometry';
import torusKnotGeometry from './torusKnotGeometry';
import tubeGeometry from './tubeGeometry';
import wireframeGeometry from './wireframeGeometry';

import Geometry from './Geometry';

const geometries: Record<string, any> = {
  BoxGeometry: boxGeometry,
  CapsuleGeometry: capsuleGeometry,
  CircleGeometry: circleGeometry,
  ConeGeometry: coneGeometry,
  CylinderGeometry: cylinderGeometry,
  DodecahedronGeometry: dodecahedronGeometry,
  EdgesGeometry: edgesGeometry,
  ExtrudeGeometry: extrudeGeometry,
  IcosahedronGeometry: icosahedronGeometry,
  LatheGeometry: latheGeometry,
  OctahedronGeometry: octahedronGeometry,
  PlaneGeometry: planeGeometry,
  PolyhedronGeometry: polyhedronGeometry,
  RingGeometry: ringGeometry,
  ShapeGeometry: shapeGeometry,
  SphereGeometry: sphereGeometry,
  TetrahedronGeometry: tetrahedronGeometry,
  TorusGeometry: torusGeometry,
  TorusKnotGeometry: torusKnotGeometry,
  TubeGeometry: tubeGeometry,
  WireframeGeometry: wireframeGeometry
};

export default geometries;

export { Geometry };
