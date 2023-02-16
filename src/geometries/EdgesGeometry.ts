import { EdgesGeometry as _EdgesGeometry } from 'three';
import { mergeProps } from '@/dev/functions';

type Props = number[];

const EdgesGeometry = (props: Props) => {
  const args: Record<string, any> = {
    geometry: null,
    thresholdAngle: 1
  };

  mergeProps(props, args);

  return new _EdgesGeometry(...Object.values(args));
};

export default EdgesGeometry;
