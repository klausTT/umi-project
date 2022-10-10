import { devEnv } from './dev';
import { Env } from './env';

export const testEnv: Env = {
  ...devEnv,
  serviceApi: 'http://test...',
};
