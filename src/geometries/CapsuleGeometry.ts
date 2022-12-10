import {CapsuleGeometry as _CapsuleGeometry} from "three";
import {mergeProps} from "../dev/functions";

type Props = number[];

const CapsuleGeometry = (props: Props) => {

  const args: Record<string, any> = {
    radius: 1,
    length: 1,
    capSubdivisions: 1,
    radialSegments: 1,
  }

  mergeProps(props, args);

  return new _CapsuleGeometry(...Object.values(args));
}

export default CapsuleGeometry;