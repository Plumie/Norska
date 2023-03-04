import { PolyhedronGeometry } from 'three';
import { mergeProps } from '@/dev/functions';

type Props = number[];

const polyhedronGeometry = (props: Props) => {
  const args: Record<string, any> = {
    vertices: null,
    indices: null,
    radius: 1,
    detail: 0
  };

  mergeProps(props, args);

  return new PolyhedronGeometry(...Object.values(args));
};

export default polyhedronGeometry;
