import { EdgesGeometry } from 'three';
import { mergeProps } from '@/dev/functions';

type Props = number[];

const edgesGeometry = (props: Props) => {
  const args: Record<string, any> = {
    geometry: null,
    thresholdAngle: 1
  };

  mergeProps(props, args);

  return new EdgesGeometry(...Object.values(args));
};

export default edgesGeometry;
