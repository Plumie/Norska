import { CylinderGeometry } from 'three';
import { mergeProps } from '@/dev/functions';

type Props = number[];

const cylinderGeometry = (props: Props) => {
  const args: Record<string, any> = {
    radiusTop: 1,
    radiusBottom: 1,
    height: 1,
    radialSegments: 8,
    heightSegments: 1,
    openEnded: false,
    thetaStart: 0,
    thetaLength: 2 * Math.PI
  };

  mergeProps(props, args);

  return new CylinderGeometry(...Object.values(args));
};

export default cylinderGeometry;
