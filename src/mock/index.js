const Mock = require('mockjs')
// 格式： Mock.mock( url, post/get , 返回的数据)；
// 评论组件数据
Mock.mock('http://localhost:8888/api/private/v1/comment/getCommentsList', 'get', require('./json/comment'))
// 产品数据
Mock.mock('http://localhost:8888/api/private/v1/products/getProductsList', 'get', require('./json/products'))
// 用户订单数据
Mock.mock('http://localhost:8888/api/private/v1/orders/getOrdersList', 'get', require('./json/orders'))
// 用户列表数据
Mock.mock('http://localhost:8888/api/private/v1/users/getUsersList', 'get', require('./json/users'))
