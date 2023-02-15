import {DodecahedronGeometry as _DodecahedronGeometry} from "three";
import {mergeProps} from "@/dev/functions";

type Props = number[]

const DodecahedronGeometry = (props: Props) => {

  const args: Record<string, any> = {
    radius: 1,
    detail: 0,
  }

  mergeProps(props, args);

  return new _DodecahedronGeometry(...Object.values(args));
}

export default DodecahedronGeometry;