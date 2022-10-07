// const users = [
//   { id: 0, name: 'Umi', nickName: 'U', gender: 'MALE' },
//   { id: 1, name: 'Fish', nickName: 'B', gender: 'FEMALE' },
// ];

export default {
  'GET /api/auth': (req: any, res: any) => {
    res.json({
      success: true,
      data: false,
    });
  },
  'POST /api/login': (req: any, res: any) => {
    console.log(req.body);
    res.json({
      success: true,
      data: req.body,
    });
  },
  'PUT /api/logout': (req: any, res: any) => {
    res.json({
      success: true,
      data: true,
    });
  },
  // 模拟用户信息
  'GET /api/userInfo': (req: any, res: any) => {
    res.json({
      success: true,
      data: {
        username: 'wudt',
        role: ['admin'],
      },
    });
  },
};
