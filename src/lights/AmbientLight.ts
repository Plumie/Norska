import { AmbientLight } from 'three';
import { mergeProps } from '@/dev/functions';

type Props = number[];

const ambientLight = (props: Props) => {
   
  const args: Record<string, any> = {
    color: 0xffffff,
    intensity: 1
  };

  mergeProps(props, args);

  return new AmbientLight(...Object.values(args));
};

export default ambientLight;
