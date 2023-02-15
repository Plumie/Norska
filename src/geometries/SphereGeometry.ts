import { SphereGeometry as _SphereGeometry } from 'three';
import { mergeProps } from '@/dev/functions';

type Props = number[];

const SphereGeometry = (props: Props) => {
  const args: Record<string, any> = {
    radius: 1,
    widthSegments: 32,
    heightSegments: 16,
    phiStart: 0,
    phiLength: Math.PI * 2,
    thetaStart: 0,
    thetaLength: Math.PI
  };

  mergeProps(props, args);

  return new _SphereGeometry(...Object.values(args));
};

export default SphereGeometry;
