import { devEnv } from './dev';
import { Env } from './env';

export const prodEnv: Env = {
  ...devEnv,
  serviceApi: 'https://prod...',
};
