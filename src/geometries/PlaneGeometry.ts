import { PlaneGeometry as _PlaneGeometry } from 'three';
import { mergeProps } from '@/dev/functions';

type Props = number[];

const PlaneGeometry = (props: Props) => {
  const args: Record<string, any> = {
    width: 1,
    height: 1,
    widthSegments: 1,
    heightSegments: 1
  };

  mergeProps(props, args);

  return new _PlaneGeometry(...Object.values(args));
};

export default PlaneGeometry;
