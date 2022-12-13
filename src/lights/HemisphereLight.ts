import {HemisphereLight as _HemisphereLight} from "three";
import {mergeProps} from "../dev/functions";

type Props = number[]

const HemisphereLight = (props: Props) => {

  const args: Record<string, any> = {
    skyColor: 0xffffff,
    groundColor: 0xffffff,
    intensity: 1,
  }

  mergeProps(props, args);

  return new _HemisphereLight(...Object.values(args));
}

export default HemisphereLight;