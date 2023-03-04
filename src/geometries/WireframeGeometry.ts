import { WireframeGeometry } from 'three';
import { mergeProps } from '@/dev/functions';

type Props = number[];

const wireframeGeometry = (props: Props) => {
  const args: Record<string, any> = {
    geometry: null
  };

  mergeProps(props, args);

  return new WireframeGeometry(...Object.values(args));
};

export default wireframeGeometry;
