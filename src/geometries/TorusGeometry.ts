import { TorusGeometry } from 'three';
import { mergeProps } from '@/dev/functions';

type Props = number[];

const torusGeometry = (props: Props) => {
  const args: Record<string, any> = {
    radius: 1,
    tube: 0.4,
    radialSegments: 8,
    tubularSegments: 6,
    arc: Math.PI * 2
  };

  mergeProps(props, args);

  return new TorusGeometry(...Object.values(args));
};

export default torusGeometry;
