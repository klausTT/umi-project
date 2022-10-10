import { devEnv } from './dev';
import { Env } from './env';
import { prodEnv } from './prod';
import { testEnv } from './test';

export const envs: Record<string, Env> = {
  dev: devEnv,
  test: testEnv,
  prod: prodEnv,
};
