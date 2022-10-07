import { login, LoginPorps } from '@/services/user';
import { Button, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';

export default function Login() {
  const [form] = useForm();
  const onFinish = async ({ username, password }: LoginPorps) => {
    const data = await login({ username, password });
    localStorage.setItem('login', JSON.stringify(data)); // 模拟登录
    location.href = './'; // 跳首页
  };
  return (
    <div className="flex justify-center content-center">
      <Form
        form={form}
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item name="username" label="用户名">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="密码">
          <Input type="password" />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button htmlType="submit">登录</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
