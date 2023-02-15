import {BoxGeometry as _BoxGeometry} from "three";
import {mergeProps} from "@/dev/functions";

type Props = number[]

const BoxGeometry = (props: Props) => {

  const args: Record<string, any> = {
    width: 1,
    height: 1,
    depth: 1,
    widthSegments: 1,
    heightSegments: 1,
    depthSegments: 1,
  }

  mergeProps(props, args);

  return new _BoxGeometry(...Object.values(args));
}

export default BoxGeometry;