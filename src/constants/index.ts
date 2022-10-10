import { envs } from './env';

export const DEFAULT_NAME = 'Umi Max';
export const isProd = process.env.BUILD_ENV === 'prod';
const BUILD_ENV = process.env.BUILD_ENV;
export const env = envs[BUILD_ENV || 'dev'];
