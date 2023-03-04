import { TubeGeometry } from 'three';
import { mergeProps } from '@/dev/functions';

type Props = number[];

const tubeGeometry = (props: Props) => {
  const args: Record<string, any> = {
    path: null,
    tubularSegments: 64,
    radius: 1,
    radiusSegments: 8,
    closed: false
  };

  mergeProps(props, args);

  return new TubeGeometry(...Object.values(args));
};

export default tubeGeometry;
