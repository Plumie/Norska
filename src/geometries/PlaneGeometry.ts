import { PlaneGeometry } from 'three';
import { mergeProps } from '@/dev/functions';

type Props = number[];

const planeGeometry = (props: Props) => {
  const args: Record<string, any> = {
    width: 1,
    height: 1,
    widthSegments: 1,
    heightSegments: 1
  };

  mergeProps(props, args);

  return new PlaneGeometry(...Object.values(args));
};

export default planeGeometry;
