import { ConeGeometry as _ConeGeometry } from 'three';
import { mergeProps } from '@/dev/functions';

type Props = number[];

const ConeGeometry = (props: Props) => {
  const args: Record<string, any> = {
    radius: 1,
    height: 1,
    radialSegments: 8,
    heightSegments: 1,
    openEnded: false,
    thetaStart: 0,
    thetaLength: 2 * Math.PI
  };

  mergeProps(props, args);

  return new _ConeGeometry(...Object.values(args));
};

export default ConeGeometry;
