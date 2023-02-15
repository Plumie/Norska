import { ShapeGeometry as _ShapeGeometry } from 'three';
import { mergeProps } from '@/dev/functions';

type Props = number[];

const ShapeGeometry = (props: Props) => {
  const args: Record<string, any> = {
    shapes: null,
    curveSegments: 12
  };

  mergeProps(props, args);

  return new _ShapeGeometry(...Object.values(args));
};

export default ShapeGeometry;
