﻿export default [
  {
    path: '/login',
    layout: false,
    routes: [
      {
        path: '/login',
        name: 'login',
        component: './login',
      },
    ],
  },
  {
    path: '/dashboard',
    name: '后台首页',
    icon: 'home',
    hideInTop: true,
    component: './dashboard/index',
  },
  {
    path: '/setting',
    name: '后台设置',
    icon: 'setting',
    access: 'canAdmin',
    routes: [
      {
        path: '/setting/system',
        name: '全局设置',
        component: './setting/system',
      },
      {
        path: '/setting/content',
        name: '内容设置',
        component: './setting/content',
      },
      {
        path: '/setting/safe',
        name: '内容安全设置',
        component: './setting/safe',
      },
      {
        path: '/setting/contact',
        name: '联系方式设置',
        component: './setting/contact',
      },
      {
        path: '/setting/tdk',
        name: '首页TDK设置',
        component: './setting/index',
      },
      {
        path: '/setting/banner',
        name: '首页幻灯片',
        component: './setting/banner',
      },
      {
        path: '/setting/nav',
        name: '导航设置',
        component: './setting/nav',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/archive',
    name: '内容管理',
    icon: 'profile',
    access: 'canAdmin',
    routes: [
      {
        path: '/archive/list',
        name: '文档列表',
        component: '@/pages/content/archive/index',
      },
      {
        path: '/archive/recycle',
        hideInMenu: true,
        name: '文档回收站',
        component: '@/pages/content/archive/recycle',
      },
      {
        hideInMenu: true,
        path: '/archive/detail',
        component: '@/pages/content/archive/detail',
      },
      {
        path: '/archive/category',
        name: '文档分类',
        component: '@/pages/content/category/archive',
      },
      {
        path: '/archive/tag',
        name: '文档标签',
        component: '@/pages/content/tag/index',
      },
      {
        path: '/archive/page',
        name: '单页面管理',
        component: '@/pages/content/category/page',
      },
      {
        path: '/archive/module',
        name: '内容模型',
        component: '@/pages/content/module/index',
      },
      {
        path: '/archive/attachment',
        name: '图片资源管理',
        component: '@/pages/content/attachment/index',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/plugin',
    name: '功能管理',
    icon: 'appstore',
    access: 'canAdmin',
    routes: [
      {
        path: '/plugin/index',
        name: '功能列表',
        hideInMenu: true,
        component: '@/pages/plugin/index',
      },
      {
        path: '/plugin/rewrite',
        name: '伪静态规则管理',
        type: 'system',
        component: '@/pages/plugin/rewrite/index',
        icon: 'rewrite',
      },
      {
        path: '/plugin/push',
        name: '链接推送管理',
        type: 'normal',
        component: '@/pages/plugin/push/index',
        icon: 'push',
      },
      {
        path: '/plugin/sitemap',
        name: 'Sitemap管理',
        type: 'normal',
        component: '@/pages/plugin/sitemap/index',
        icon: 'sitemap',
      },
      {
        path: '/plugin/robots',
        name: 'Robots管理',
        type: 'normal',
        component: '@/pages/plugin/robots/index',
        icon: 'robots',
      },
      {
        path: '/plugin/friendlink',
        name: '友情链接管理',
        type: 'normal',
        component: '@/pages/plugin/link/index',
        icon: 'friendlink',
      },
      {
        path: '/plugin/comment',
        name: '内容评论管理',
        type: 'normal',
        component: '@/pages/plugin/comment/index',
        icon: 'comment',
      },
      {
        path: '/plugin/anchor',
        name: '锚文本管理',
        type: 'normal',
        component: '@/pages/plugin/anchor/index',
        icon: 'anchor',
      },
      {
        path: '/plugin/guestbook',
        name: '网站留言管理',
        type: 'normal',
        component: '@/pages/plugin/guestbook/index',
        icon: 'guestbook',
      },
      {
        path: '/plugin/keyword',
        name: '关键词库管理',
        type: 'content',
        component: '@/pages/plugin/keyword/index',
        icon: 'keyword',
      },
      {
        path: '/plugin/material',
        name: '内容素材管理',
        type: 'content',
        component: '@/pages/plugin/material/index',
        icon: 'material',
      },
      {
        path: '/plugin/fileupload',
        name: '验证文件上传',
        type: 'normal',
        component: '@/pages/plugin/fileupload/index',
        icon: 'fileupload',
      },
      {
        path: '/plugin/sendmail',
        name: '邮件提醒',
        type: 'system',
        component: '@/pages/plugin/sendmail/index',
        icon: 'sendmail',
      },
      {
        path: '/plugin/collector',
        name: '内容采集管理',
        type: 'content',
        component: '@/pages/plugin/collector/index',
        icon: 'collector',
      },
      {
        path: '/plugin/importapi',
        name: '内容导入接口',
        type: 'content',
        component: '@/pages/plugin/importapi/index',
        icon: 'importapi',
      },
      {
        path: '/plugin/redirect',
        name: '301跳转管理',
        type: 'content',
        component: '@/pages/plugin/redirect/index',
        icon: 'redirect',
      },
      {
        path: '/plugin/transfer',
        name: '网站内容迁移',
        type: 'content',
        component: '@/pages/plugin/transfer/index',
        icon: 'transfer',
      },
      {
        path: '/plugin/storage',
        name: '资源存储配置',
        type: 'system',
        component: '@/pages/plugin/storage/index',
        icon: 'storage',
      },
      {
        path: '/plugin/user',
        name: '用户管理',
        type: 'shop',
        component: '@/pages/plugin/user/index',
        icon: 'user',
      },
      {
        path: '/plugin/group',
        name: '用户组VIP',
        type: 'shop',
        component: '@/pages/plugin/group/index',
        icon: 'group',
      },
      {
        path: '/plugin/wechat',
        name: '微信公众号',
        type: 'shop',
        component: '@/pages/plugin/wechat/index',
        icon: 'wechat',
      },
      {
        path: '/plugin/weapp',
        name: '微信小程序',
        type: 'shop',
        component: '@/pages/plugin/weapp/index',
        icon: 'weapp',
      },
      {
        path: '/plugin/order',
        name: '订单管理',
        type: 'shop',
        component: '@/pages/plugin/order/index',
        icon: 'order',
      },
      {
        path: '/plugin/pay',
        name: '支付配置',
        type: 'shop',
        component: '@/pages/plugin/pay/index',
        icon: 'pay',
      },
      {
        path: '/plugin/finance',
        name: '财务管理',
        type: 'shop',
        component: '@/pages/plugin/finance/index',
        icon: 'finance',
      },
      {
        path: '/plugin/retailer',
        name: '分销管理',
        type: 'shop',
        component: '@/pages/plugin/retailer/index',
        icon: 'retailer',
      },
      {
        path: '/plugin/fulltext',
        name: '全文搜索',
        type: 'content',
        component: '@/pages/plugin/fulltext/index',
        icon: 'fulltext',
      },
      {
        path: '/plugin/backup',
        name: '备份与恢复',
        type: 'system',
        component: '@/pages/plugin/backup/index',
        icon: 'backup',
      },
      {
        path: '/plugin/replace',
        name: '全站替换',
        type: 'system',
        component: '@/pages/plugin/replace/index',
        icon: 'replace',
      },
      {
        path: '/plugin/titleimage',
        name: '标题自动配图',
        type: 'system',
        component: '@/pages/plugin/titleimage/index',
        icon: 'titleimage',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/design',
    name: '模板设计',
    icon: 'Code',
    access: 'canAdmin',
    routes: [
      {
        path: '/design/index',
        name: '我的模板',
        component: '@/pages/design/index',
      },
      {
        hideInMenu: true,
        path: '/design/editor',
        name: '修改代码',
        component: '@/pages/design/editor',
      },
      {
        hideInMenu: true,
        path: '/design/detail',
        name: '模板管理',
        component: '@/pages/design/detail',
      },
      {
        path: '/design/doc',
        name: '开发文档',
        component: '@/pages/design/doc',
      },
      {
        path: '/design/market',
        name: '设计市场',
        component: '@/pages/design/market',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/statistic',
    name: '数据统计',
    icon: 'lineChart',
    access: 'canAdmin',
    routes: [
      {
        path: '/statistic/spider',
        name: '蜘蛛统计',
        component: '@/pages/statistic/spider',
      },
      {
        path: '/statistic/traffic',
        name: '流量统计',
        component: '@/pages/statistic/traffic',
      },
      {
        path: '/statistic/detail',
        name: '访问详细记录',
        component: '@/pages/statistic/detail',
      },
      {
        path: '/statistic/includes',
        name: '收录统计',
        component: '@/pages/statistic/include',
      },
      {
        path: '/statistic/include/detail',
        name: '收录详细记录',
        component: '@/pages/statistic/include/detail',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '管理员',
    icon: 'user',
    path: '/account',
    access: 'canAdmin',
    hideInTop: true,
    routes: [
      {
        path: '/account/index',
        name: '管理员信息',
        component: '@/pages/account/index',
      },
      {
        path: '/account/list',
        name: '管理员列表',
        component: '@/pages/account/list',
      },
      {
        path: '/account/group/list',
        name: '管理员分组',
        component: '@/pages/account/group/index',
      },
      {
        path: '/account/logs/login',
        name: '登录记录',
        component: '@/pages/account/logs/login',
      },
      {
        path: '/account/logs/action',
        name: '操作记录',
        component: '@/pages/account/logs/action',
      },
    ],
  },
  {
    path: '/website',
    name: '多站点管理',
    icon: 'Cluster',
    access: 'canAdmin',
    hideInTop: true,
    component: '@/pages/website',
  },
  {
    path: '/tool/upgrade',
    icon: 'CloudSync',
    name: '系统升级',
    hideInTop: true,
    component: '@/pages/tool/upgrade',
  },
  {
    path: '/tool/cache',
    name: '更新缓存',
    hideInMenu: true,
    component: '@/pages/tool/cache',
  },
  {
    path: '/preview',
    link: 'preview',
    name: '预览',
    hideInMenu: true,
  },
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    component: './404',
  },
];
