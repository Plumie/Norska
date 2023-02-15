const mergeProps = (props: any, args: Record<string, any>) => {
  if (props)
    Object.keys(args).forEach((key, index) => {
      if (props[index]) {
        args[key] = props[index];
      }
    });
};

export { mergeProps };
