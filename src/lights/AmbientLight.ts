import {AmbientLight as _AmbientLight} from "three";
import {mergeProps} from "../dev/functions";

type Props = number[]

const AmbientLight = (props: Props) => {

  const args: Record<string, any> = {
    color: 0xffffff,
    intensity: 1,
  }

  mergeProps(props, args);

  return new _AmbientLight(...Object.values(args));

}

export default AmbientLight;