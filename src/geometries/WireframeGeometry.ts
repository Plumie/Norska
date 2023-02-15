import {WireframeGeometry as _WireframeGeometry} from "three";
import {mergeProps} from "@/dev/functions";

type Props = number[]

const WireframeGeometry = (props: Props) => {

  const args: Record<string, any> = {
     geometry: null,
  }

  mergeProps(props, args);

  return new _WireframeGeometry(...Object.values(args));
}

export default WireframeGeometry;