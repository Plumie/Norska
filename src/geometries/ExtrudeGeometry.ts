import {ExtrudeGeometry as _ExtrudeGeometry} from "three";
import {mergeProps} from "@/dev/functions";

type Props = number[]

const ExtrudeGeometry = (props: Props) => {

  const args: Record<string, any> = {
    shapes: null,
    options: null,
  }

  mergeProps(props, args);

  return new _ExtrudeGeometry(...Object.values(args));
}

export default ExtrudeGeometry;