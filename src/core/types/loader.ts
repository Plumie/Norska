export type Loader = {
  name: string;
  new (): unknown;
};

export type Loaders = Record<string, unknown>;
