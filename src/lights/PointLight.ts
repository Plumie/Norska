import { PointLight as _PointLight } from 'three';
import { mergeProps } from '@/dev/functions';

type Props = number[];

const PointLight = (props: Props) => {
  const args: Record<string, any> = {
    color: 0xffffff,
    intensity: 1,
    distance: 0,
    decay: 1
  };

  mergeProps(props, args);

  return new _PointLight(...Object.values(args));
};

export default PointLight;
