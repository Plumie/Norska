import { DodecahedronGeometry } from 'three';
import { mergeProps } from '@/dev/functions';

type Props = number[];

const dodecahedronGeometry = (props: Props) => {
  const args: Record<string, any> = {
    radius: 1,
    detail: 0
  };

  mergeProps(props, args);

  return new DodecahedronGeometry(...Object.values(args));
};

export default dodecahedronGeometry;
