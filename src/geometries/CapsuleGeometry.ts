import { CapsuleGeometry } from 'three';
import { mergeProps } from '@/dev/functions';

type Props = number[];

const capsuleGeometry = (props: Props) => {
  const args: Record<string, any> = {
    radius: 1,
    length: 1,
    capSubdivisions: 1,
    radialSegments: 1
  };

  mergeProps(props, args);

  return new CapsuleGeometry(...Object.values(args));
};

export default capsuleGeometry;
