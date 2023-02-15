import { TubeGeometry as _TubeGeometry } from 'three';
import { mergeProps } from '@/dev/functions';

type Props = number[];

const TubeGeometry = (props: Props) => {
  const args: Record<string, any> = {
    path: null,
    tubularSegments: 64,
    radius: 1,
    radiusSegments: 8,
    closed: false
  };

  mergeProps(props, args);

  return new _TubeGeometry(...Object.values(args));
};

export default TubeGeometry;
