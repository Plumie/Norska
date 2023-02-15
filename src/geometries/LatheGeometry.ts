import {LatheGeometry as _LatheGeometry} from "three";
import {mergeProps} from "@/dev/functions";

type Props = number[]

const LatheGeometry = (props: Props) => {

  const args: Record<string, any> = {
    points: null,
    segments: 12,
    phiStart: 0,
    phiLength: 2 * Math.PI,
  }

  mergeProps(props, args);

  return new _LatheGeometry(...Object.values(args));
}

export default LatheGeometry;