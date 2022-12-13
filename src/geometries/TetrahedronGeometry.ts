import {TetrahedronGeometry as _TetrahedronGeometry} from "three";
import {mergeProps} from "../dev/functions";

type Props = number[]

const TetrahedronGeometry = (props: Props) => {

  const args: Record<string, any> = {
    radius: 1,
    detail: 0,
  }

  mergeProps(props, args);

  return new _TetrahedronGeometry(...Object.values(args));
}

export default TetrahedronGeometry;