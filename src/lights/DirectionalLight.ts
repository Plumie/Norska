import { DirectionalLight as _DirectionalLight } from 'three';
import { mergeProps } from '@/dev/functions';

type Props = number[];

const DirectionalLight = (props: Props) => {
  const args: Record<string, any> = {
    color: 0xffffff,
    intensity: 1
  };

  mergeProps(props, args);

  return new _DirectionalLight(...Object.values(args));
};

export default DirectionalLight;
