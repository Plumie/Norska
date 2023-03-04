import { OctahedronGeometry } from 'three';
import { mergeProps } from '@/dev/functions';

type Props = number[];

const octahedronGeometry = (props: Props) => {
  const args: Record<string, any> = {
    radius: 1,
    detail: 0
  };

  mergeProps(props, args);

  return new OctahedronGeometry(...Object.values(args));
};

export default octahedronGeometry;
