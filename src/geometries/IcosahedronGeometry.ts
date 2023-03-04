import { IcosahedronGeometry } from 'three';
import { mergeProps } from '@/dev/functions';

type Props = number[];

const icosahedronGeometry = (props: Props) => {
  const args: Record<string, any> = {
    radius: 1,
    detail: 0
  };

  mergeProps(props, args);

  return new IcosahedronGeometry(...Object.values(args));
};

export default icosahedronGeometry;
