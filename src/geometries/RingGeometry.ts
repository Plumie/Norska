import {RingGeometry as _RingGeometry} from "three";
import {mergeProps} from "@/dev/functions";

type Props = number[]

const RingGeometry = (props: Props) => {

  const args: Record<string, any> = {
    innerRadius: 0.5,
    outerRadius: 1,
    thetaSegments: 8,
    phiSegments: 8,
    thetaStart: 0,
    thetaLength: 2 * Math.PI,
  }

  mergeProps(props, args);

  return new _RingGeometry(...Object.values(args));
}

export default RingGeometry;