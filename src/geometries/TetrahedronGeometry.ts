import { TetrahedronGeometry } from 'three';
import { mergeProps } from '@/dev/functions';

type Props = number[];

const tetrahedronGeometry = (props: Props) => {
  const args: Record<string, any> = {
    radius: 1,
    detail: 0
  };

  mergeProps(props, args);

  return new TetrahedronGeometry(...Object.values(args));
};

export default tetrahedronGeometry;
