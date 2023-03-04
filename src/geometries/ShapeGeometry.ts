import { ShapeGeometry } from 'three';
import { mergeProps } from '@/dev/functions';

type Props = number[];

const shapeGeometry = (props: Props) => {
  const args: Record<string, any> = {
    shapes: null,
    curveSegments: 12
  };

  mergeProps(props, args);

  return new ShapeGeometry(...Object.values(args));
};

export default shapeGeometry;
