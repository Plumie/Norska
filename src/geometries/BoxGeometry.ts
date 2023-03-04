import { BoxGeometry } from 'three';
import { mergeProps } from '@/dev/functions';

type Props = number[];

const boxGeometry = (props: Props) => {
  const args: Record<string, any> = {
    width: 1,
    height: 1,
    depth: 1,
    widthSegments: 1,
    heightSegments: 1,
    depthSegments: 1
  };

  mergeProps(props, args);

  return new BoxGeometry(...Object.values(args));
};

export default boxGeometry;
