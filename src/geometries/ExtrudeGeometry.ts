import { ExtrudeGeometry } from 'three';
import { mergeProps } from '@/dev/functions';

type Props = number[];

const extrudeGeometry = (props: Props) => {
  const args: Record<string, any> = {
    shapes: null,
    options: null
  };

  mergeProps(props, args);

  return new ExtrudeGeometry(...Object.values(args));
};

export default extrudeGeometry;
