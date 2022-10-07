import { InitDataType } from '@/.umi/exports';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';

export default function RightRender({
  init,
}: {
  init: InitDataType['initialState'];
}) {
  const handleLogoutClick = () => {
    localStorage.removeItem('login');
    location.href = '/login';
  };
  const menu = (
    <Menu
      items={[
        {
          label: <a onClick={handleLogoutClick}>登出</a>,
          key: 'logout',
        },
      ]}
    />
  );
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {init?.userInfo?.username}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}
