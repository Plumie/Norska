import BoxGeometry from "./BoxGeometry";
import CapsuleGeometry from "./CapsuleGeometry";
import CircleGeometry from "./CircleGeometry";
import ConeGeometry from "./ConeGeometry";
import CylinderGeometry from "./CylinderGeometry";
import DodecahedronGeometry from "./DodecahedronGeometry";
import EdgesGeometry from "./EdgesGeometry";
import ExtrudeGeometry from "./ExtrudeGeometry";
import IcosahedronGeometry from "./IcosahedronGeometry";
import LatheGeometry from "./LatheGeometry";
import OctahedronGeometry from "./OctahedronGeometry";
import PlaneGeometry from "./PlaneGeometry";
import PolyhedronGeometry from "./PolyhedronGeometry";
import RingGeometry from "./RingGeometry";
import ShapeGeometry from "./ShapeGeometry";
import SphereGeometry from "./SphereGeometry";
import TetrahedronGeometry from "./TetrahedronGeometry";
import TorusGeometry from "./TorusGeometry";
import TorusKnotGeometry from "./TorusKnotGeometry";
import TubeGeometry from "./TubeGeometry";
import WireframeGeometry from "./WireframeGeometry";

const geometries: Record<string, any> = {
  BoxGeometry,
  CapsuleGeometry,
  CircleGeometry,
  ConeGeometry,
  CylinderGeometry,
  DodecahedronGeometry,
  EdgesGeometry,
  ExtrudeGeometry,
  IcosahedronGeometry,
  LatheGeometry,
  OctahedronGeometry,
  PlaneGeometry,
  PolyhedronGeometry,
  RingGeometry,
  ShapeGeometry,
  SphereGeometry,
  TetrahedronGeometry,
  TorusGeometry,
  TorusKnotGeometry,
  TubeGeometry,
  WireframeGeometry,
}

export default geometries;