import { Layout, Row, Typography } from 'antd';

interface Props {
  name: string;
}

// 脚手架示例组件
const Guide = (props: Props) => {
  const { name } = props;
  return (
    <Layout>
      <Row>
        <Typography.Title level={3}>
          欢迎使用 <strong>{name}</strong> ！
        </Typography.Title>
      </Row>
    </Layout>
  );
};

export default Guide;
