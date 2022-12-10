import {IcosahedronGeometry as _IcosahedronGeometry} from "three";
import {mergeProps} from "../dev/functions";

type Props = number[]

const IcosahedronGeometry = (props: Props) => {

  const args: Record<string, any> = {
    radius: 1,
    detail: 0,
  }

  mergeProps(props, args);

  return new _IcosahedronGeometry(...Object.values(args));
}

export default IcosahedronGeometry;