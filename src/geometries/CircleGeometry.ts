import {CircleGeometry as _CircleGeometry} from "three";
import {mergeProps} from "../dev/functions";

type Props = number[]

const CircleGeometry = (props: Props) => {

  const args: Record<string, any> = {
    radius: 1,
    segments: 8,
    thetaStart: 0,
    thetaLength: 2 * Math.PI,
  }

  mergeProps(props, args);

  return new _CircleGeometry(...Object.values(args));
}

export default CircleGeometry;