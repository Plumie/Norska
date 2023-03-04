import { DirectionalLight } from 'three';
import { mergeProps } from '@/dev/functions';

type Props = number[];

const directionalLight = (props: Props) => {
  const args: Record<string, any> = {
    color: 0xffffff,
    intensity: 1
  };

  mergeProps(props, args);

  return new DirectionalLight(...Object.values(args));
};

export default directionalLight;
