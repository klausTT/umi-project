import { AxiosResponse } from '@umijs/max';
import { request, RequestConfig } from '@umijs/max';
import { message } from 'antd';

interface OptionsProps extends RequestConfig {
  isNeedAuth?: boolean;
}

export default async function newRequest<T = any>(
  url: string,
  options: OptionsProps = {},
) {
  const { isNeedAuth = true, headers, ...opts } = options;
  let newHeaders = { ...headers };
  const newOptions = { ...newHeaders, ...opts };
  if (isNeedAuth) {
    newHeaders['Authorization'] = `Bearer XXX`;
  }

  try {
    const { data } = await request<AxiosResponse<T>>(url, newOptions);
    return data;
  } catch (error: any) {
    message.error(error);
  }
}
