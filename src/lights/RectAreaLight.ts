import { RectAreaLight } from 'three';
import { mergeProps } from '@/dev/functions';

type Props = number[];

const rectAreaLight = (props: Props) => {
  const args: Record<string, any> = {
    color: 0xffffff,
    intensity: 1,
    width: 10,
    height: 10
  };

  mergeProps(props, args);

  return new RectAreaLight(...Object.values(args));
};

export default rectAreaLight;
