import {TorusKnotGeometry as _TorusKnotGeometry} from "three";
import {mergeProps} from "@/dev/functions";

type Props = number[]

const TorusKnotGeometry = (props: Props) => {

  const args: Record<string, any> = {
    radius: 1,
    tube: 0.4,
    tubularSegments: 64,
    radialSegments: 8,
    p: 2,
    q: 3,
  }

  mergeProps(props, args);

  return new _TorusKnotGeometry(...Object.values(args));
}

export default TorusKnotGeometry;