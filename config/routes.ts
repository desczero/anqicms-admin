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
        path: '/archive/module',
        name: '内容模型',
        component: '@/pages/content/module/index',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/content',
    name: '页面资源',
    icon: 'profile',
    access: 'canAdmin',
    routes: [
      {
        path: '/content/page',
        name: '单页面管理',
        component: '@/pages/content/category/page',
      },
      {
        path: '/content/attachment',
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
        component: '@/pages/plugin/rewrite/index',
        icon: '<svg t="1654563418200" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1574" width="128" height="128"><path d="M512 64A32 32 0 1 1 512 128a384 384 0 1 0 384 384 32 32 0 1 1 64 0c0 247.424-200.576 448-448 448S64 759.424 64 512 264.576 64 512 64z" p-id="1575" fill="#1296db"></path><path d="M737.493333 107.349333l4.266667 1.109334 172.672 56.405333c10.325333 3.413333 14.336 15.786667 7.936 24.576l-107.136 146.432a32 32 0 0 1-44.629333 6.954667 31.829333 31.829333 0 0 1-6.954667-44.544l35.498667-48.64-64.213334 22.016a279.381333 279.381333 0 0 0-188.928 264.362666 34.005333 34.005333 0 0 1-68.010666 0 347.392 347.392 0 0 1 223.957333-324.693333l10.965333-4.010667 61.610667-21.12-52.608-17.152a31.872 31.872 0 0 1 15.573333-61.696z" p-id="1576" fill="#1296db"></path></svg>',
      },
      {
        path: '/plugin/push',
        name: '链接推送管理',
        component: '@/pages/plugin/push/index',
        icon: '<svg t="1654563548985" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4304" width="128" height="128"><path d="M224 96v175.008l12 9.984L364.992 384H267.008l-120-90.016-38.016 52.032L244.992 448h114.016l-115.008 96H96v64h172l8-7.008 44.992-36.992c-0.256 4-0.992 7.872-0.992 12 0 5.632 0.512 11.264 0.992 16.992l-120 120-8.992 10.016V928h64v-178.016l82.016-81.984c8.736 24.128 19.84 48 33.984 70.016C404.256 788.096 451.488 832 512 832c60.48 0 107.744-43.872 140-94.016a351.36 351.36 0 0 0 34.016-69.984L768 750.016V928h64v-204.992l-8.992-10.016-120-120c0.48-5.76 0.992-11.36 0.992-16.992 0-3.872-0.736-7.264-0.992-11.008l44.992 36 8.992 7.008H928v-64h-148.992l-120-96h120l136-102.016-38.016-51.968L756.992 384h-97.984l128.992-103.008L800 271.04V96h-64v144.992l-100 80c-4.992-19.84-15.008-36.992-28-52V160h-64v68.992C533.76 226.368 523.008 224 512 224s-21.76 2.368-32 4.992V160h-64v108.992c-12.992 15.008-23.008 32.128-28 52L288 240.992V96z m288 192c35.744 0 64 28.256 64 64s-28.256 64-64 64-64-28.256-64-64 28.256-64 64-64z m0 192c39.36 0 72.512 9.504 94.016 24.992C627.456 520.512 640 540.512 640 576c0 35.52-16.384 88.128-42.016 128-25.6 39.872-58.24 64-85.984 64-27.744 0-60.384-24.128-86.016-64-25.6-39.872-41.984-92.48-41.984-128 0-35.52 12.48-55.488 34.016-71.008C439.456 489.504 472.64 480 512 480z" p-id="4305" fill="#1296db"></path></svg>',
      },
      {
        path: '/plugin/sitemap',
        name: 'Sitemap管理',
        component: '@/pages/plugin/sitemap/index',
        icon: '<svg t="1654563593261" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4925" width="128" height="128"><path d="M1024 713.142857v182.857143a54.857143 54.857143 0 0 1-54.857143 54.857143h-182.857143a54.857143 54.857143 0 0 1-54.857143-54.857143v-182.857143a54.857143 54.857143 0 0 1 54.857143-54.857143H841.142857v-109.714285h-292.571428v109.714285h54.857142a54.857143 54.857143 0 0 1 54.857143 54.857143v182.857143a54.857143 54.857143 0 0 1-54.857143 54.857143h-182.857142a54.857143 54.857143 0 0 1-54.857143-54.857143v-182.857143a54.857143 54.857143 0 0 1 54.857143-54.857143H475.428571v-109.714285H182.857143v109.714285h54.857143A54.857143 54.857143 0 0 1 292.571429 713.142857v182.857143A54.857143 54.857143 0 0 1 237.714286 950.857143h-182.857143A54.857143 54.857143 0 0 1 0 896v-182.857143A54.857143 54.857143 0 0 1 54.857143 658.285714H109.714286v-109.714285c0-40.009143 33.133714-73.142857 73.142857-73.142858h292.571428v-109.714285h-54.857142A54.857143 54.857143 0 0 1 365.714286 310.857143v-182.857143A54.857143 54.857143 0 0 1 420.571429 73.142857h182.857142A54.857143 54.857143 0 0 1 658.285714 128v182.857143a54.857143 54.857143 0 0 1-54.857143 54.857143H548.571429v109.714285h292.571428c40.009143 0 73.142857 33.133714 73.142857 73.142858v109.714285h54.857143a54.857143 54.857143 0 0 1 54.857143 54.857143z" fill="#1296db" p-id="4926"></path></svg>',
      },
      {
        path: '/plugin/robots',
        name: 'Robots管理',
        component: '@/pages/plugin/robots/index',
        icon: '<svg t="1654563626226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5936" width="128" height="128"><path d="M269.714286 301.714286a68.571429 68.571429 0 1 0 137.142857 0 68.571429 68.571429 0 1 0-137.142857 0zM900.571429 0H123.428571c-20.228571 0-36.571429 16.342857-36.571428 36.571429v754.285714c0 20.228571 16.342857 36.571429 36.571428 36.571428h777.142858c20.228571 0 36.571429-16.342857 36.571428-36.571428V36.571429c0-20.228571-16.342857-36.571429-36.571428-36.571429z m-36.571429 754.285714H160V73.142857h704v681.142857zM617.142857 301.714286a68.571429 68.571429 0 1 0 137.142857 0 68.571429 68.571429 0 1 0-137.142857 0z m285.942857 635.428571H120.914286c-18.857143 0-34.057143 16.342857-34.057143 36.571429v41.142857c0 5.028571 3.771429 9.142857 8.457143 9.142857h833.257143c4.685714 0 8.457143-4.114286 8.457142-9.142857v-41.142857c0.114286-20.228571-15.085714-36.571429-33.942857-36.571429zM685.714286 507.428571H338.285714c-5.028571 0-9.142857 4.114286-9.142857 9.142858v68.571428c0 5.028571 4.114286 9.142857 9.142857 9.142857h347.428572c5.028571 0 9.142857-4.114286 9.142857-9.142857v-68.571428c0-5.028571-4.114286-9.142857-9.142857-9.142858z" p-id="5937" fill="#1296db"></path></svg>',
      },
      {
        path: '/plugin/friendlink',
        name: '友情链接管理',
        component: '@/pages/plugin/link/index',
        icon: '<svg t="1654563721906" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9004" width="128" height="128"><path d="M557.226667 346.026667l60.373333 60.373333a298.666667 298.666667 0 0 1 0 422.4l-15.104 15.061333a298.666667 298.666667 0 0 1-422.4-422.4l60.373333 60.373334a213.333333 213.333333 0 1 0 301.696 301.696l15.104-15.104a213.333333 213.333333 0 0 0 0-301.653334l-60.373333-60.373333 60.373333-60.330667z m286.634666 256.469333l-60.330666-60.330667a213.333333 213.333333 0 1 0-301.696-301.696l-15.104 15.104a213.333333 213.333333 0 0 0 0 301.653334l60.373333 60.373333-60.373333 60.330667-60.330667-60.330667a298.666667 298.666667 0 0 1 0-422.4l15.104-15.061333a298.666667 298.666667 0 0 1 422.4 422.4z" p-id="9005" fill="#1296db"></path></svg>',
      },
      {
        path: '/plugin/comment',
        name: '内容评论管理',
        component: '@/pages/plugin/comment/index',
        icon: '<svg t="1654563740365" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9869" width="128" height="128"><path d="M512 928c-8.192 0-16.384-3.136-22.624-9.376l-96-96c-12.512-12.512-12.512-32.736 0-45.248s32.736-12.512 45.248 0L512 850.752l73.376-73.376C591.36 771.36 599.488 768 608 768l224 0c17.664 0 32-14.336 32-32L864 224c0-17.632-14.336-32-32-32L192 192C174.368 192 160 206.368 160 224l0 512c0 17.664 14.368 32 32 32l96 0c17.664 0 32 14.304 32 32s-14.336 32-32 32L192 832c-52.928 0-96-43.072-96-96L96 224c0-52.928 43.072-96 96-96l640 0c52.928 0 96 43.072 96 96l0 512c0 52.928-43.072 96-96 96l-210.752 0-86.624 86.624C528.384 924.864 520.192 928 512 928z" p-id="9870" fill="#1296db"></path><path d="M336 512C309.536 512 288 490.464 288 464S309.536 416 336 416s48 21.536 48 48S362.464 512 336 512z" p-id="9871" fill="#1296db"></path><path d="M528 512c-26.464 0-48-21.536-48-48s21.536-48 48-48 48 21.536 48 48S554.464 512 528 512z" p-id="9872" fill="#1296db"></path><path d="M720 512c-26.464 0-48-21.536-48-48s21.536-48 48-48 48 21.536 48 48S746.464 512 720 512z" p-id="9873" fill="#1296db"></path></svg>',
      },
      {
        path: '/plugin/anchor',
        name: '锚文本管理',
        component: '@/pages/plugin/anchor/index',
        icon: '<svg t="1654563783905" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11391" width="128" height="128"><path d="M489.92 960.96c-25.792 0-45.44-20.352-45.44-47.04V316.992c0-26.688 19.648-47.04 45.44-47.04 25.728 0 45.44 20.352 45.44 47.04v597.056c0 25.024-19.712 46.976-45.44 46.976z" fill="#1296db" p-id="11392"></path><path d="M489.92 981.312c-218.304 0-406.336-161.408-447.232-382.336a50.88 50.88 0 0 1 9.088-39.168 44.8 44.8 0 0 1 34.88-17.28h162.176c25.792 0 45.44 20.416 45.44 47.04s-19.648 47.04-45.44 47.04H147.264c50.048 148.864 186.496 250.688 342.656 250.688s292.608-101.824 342.592-250.688h-103.04c-25.792 0-45.504-20.416-45.504-47.04s19.712-46.976 45.44-46.976h162.24a44.8 44.8 0 0 1 34.88 17.216 45.44 45.44 0 0 1 9.088 39.168c-39.424 220.928-225.92 382.336-445.696 382.336zM489.92 346.688c-81.92 0-147.072-68.928-147.072-152C342.848 110.08 409.536 42.688 489.92 42.688c81.856 0 147.072 68.928 147.072 152 0 84.608-65.28 152-147.072 152z m0-209.984c-30.336 0-56.128 26.624-56.128 57.984 0 31.36 25.792 57.984 56.128 57.984s56.064-26.624 56.064-57.984c0-31.36-24.256-57.984-56.064-57.984z" fill="#1296db" p-id="11393"></path></svg>',
      },
      {
        path: '/plugin/guestbook',
        name: '网站留言管理',
        component: '@/pages/plugin/guestbook/index',
        icon: '<svg t="1654563844607" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12782" width="128" height="128"><path d="M256 362.666667m32 0l234.666667 0q32 0 32 32l0 0q0 32-32 32l-234.666667 0q-32 0-32-32l0 0q0-32 32-32Z" p-id="12783" fill="#1296db"></path><path d="M256 576m32 0l448 0q32 0 32 32l0 0q0 32-32 32l-448 0q-32 0-32-32l0 0q0-32 32-32Z" p-id="12784" fill="#1296db"></path><path d="M929.205641 141.265193m-22.627417 22.627417l-196.104281 196.104281q-22.627417 22.627417-45.254834 0l0 0q-22.627417-22.627417 0-45.254834l196.104281-196.104281q22.627417-22.627417 45.254834 0l0 0q22.627417 22.627417 0 45.254834Z" p-id="12785" fill="#1296db"></path><path d="M234.666667 170.666667a64 64 0 0 0-64 64v544h-0.021334l0.021334 10.858666a64 64 0 0 0 60.245333 63.893334l3.754667 0.106666V853.333333h554.666666l-0.021333 0.170667h0.213333L789.504 853.333333l3.584-0.106666A64 64 0 0 0 853.333333 789.504h0.192L853.504 789.333333 853.333333 789.333333V416a32 32 0 0 1 64 0V789.333333a128 128 0 0 1-128 128l-548.224 0.021334a128 128 0 0 1-133.973333-138.666667L106.666667 778.666667V256c0-2.432 0.277333-4.8 0.789333-7.082667A128 128 0 0 1 256 108.437333L256 106.666667h352a32 32 0 0 1 0 64H234.666667z" p-id="12786" fill="#1296db"></path></svg>',
      },
      {
        path: '/plugin/keyword',
        name: '关键词库管理',
        component: '@/pages/plugin/keyword/index',
        icon: '<svg t="1654563865530" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13285" width="128" height="128"><path d="M187.093333 115.2a42.325333 42.325333 0 0 0-42.368 42.325333v616.106667c0 23.381333 18.986667 42.325333 42.368 42.325333h218.88l76.117334 79.744a42.325333 42.325333 0 0 0 61.226666 0l76.117334-79.744h217.472a42.325333 42.325333 0 0 0 42.368-42.325333V157.525333a42.325333 42.325333 0 0 0-42.368-42.325333H187.093333z m42.325334 616.106667V199.893333h565.162666V731.306667h-193.28a42.325333 42.325333 0 0 0-30.592 13.098666l-58.026666 60.757334-57.984-60.757334a42.325333 42.325333 0 0 0-30.592-13.098666H229.418667zM480 289.450667a42.026667 42.026667 0 0 0-5.76 8.789333L377.6 491.648a41.941333 41.941333 0 0 0-0.938667 1.834667l-38.4 76.885333a41.984 41.984 0 1 0 75.093334 37.546667l27.306666-54.613334h142.677334l27.306666 54.613334a41.984 41.984 0 1 0 75.093334-37.546667l-38.442667-76.970667a39.509333 39.509333 0 0 0-0.853333-1.664l-96.768-193.578666a42.026667 42.026667 0 0 0-69.632-8.704zM482.56 469.333333L512 410.581333 541.354667 469.333333h-58.709334z" fill="#1296db" p-id="13286"></path></svg>',
      },
      {
        path: '/plugin/material',
        name: '内容素材管理',
        component: '@/pages/plugin/material/index',
        icon: '<svg t="1654563908268" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14208" width="128" height="128"><path d="M255.9 320H512v64H255.9z" fill="#1296db" p-id="14209"></path><path d="M895.6 640V128H640V64H320L128 256v384H64v192c0 70.7 57.3 128 128 128h640c70.7 0 128-57.3 128-128V640h-64.4z m-32-480v480h-95.2V160h95.2z m-128.7 0v480H640V160h94.9zM160 256h160V96h288v32h-0.3v512H160V256z m480 576H384v-64h256v64z" fill="#1296db" p-id="14210"></path><path d="M255.3 448h256.1v64H255.3z" fill="#1296db" p-id="14211"></path></svg>',
      },
      {
        path: '/plugin/fileupload',
        name: '验证文件上传',
        component: '@/pages/plugin/fileupload/index',
        icon: '<svg t="1654563962879" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15963" width="128" height="128"><path d="M42.666667 149.482667A106.752 106.752 0 0 1 149.482667 42.666667h725.034666A106.752 106.752 0 0 1 981.333333 149.482667v725.034666A106.752 106.752 0 0 1 874.517333 981.333333H149.482667A106.752 106.752 0 0 1 42.666667 874.517333V149.482667z m85.333333 0v725.034666C128 886.421333 137.578667 896 149.482667 896h725.034666c11.904 0 21.482667-9.578667 21.482667-21.482667V149.482667C896 137.578667 886.421333 128 874.517333 128H149.482667C137.578667 128 128 137.578667 128 149.482667z m97.834667 332.352L323.669333 384l-97.834666-97.834667a42.666667 42.666667 0 0 1 60.330666-60.330666l128 128a42.666667 42.666667 0 0 1 0 60.330666l-128 128a42.666667 42.666667 0 0 1-60.330666-60.330666zM469.333333 554.666667a42.666667 42.666667 0 1 1 0-85.333334h213.333334a42.666667 42.666667 0 1 1 0 85.333334H469.333333z" p-id="15964" fill="#1296db"></path></svg>',
      },
      {
        path: '/plugin/sendmail',
        name: '邮件提醒',
        component: '@/pages/plugin/sendmail/index',
        icon: '<svg t="1654563991457" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16819" width="128" height="128"><path d="M906.88 334.72c-23.04-69.12-64-124.8-122.24-167.04-169.6-122.24-392.96-51.84-398.72-49.92-2.56 0.64-271.36 59.52-285.44 391.04C87.04 842.88 496 926.72 499.84 928l12.16-62.08c-14.72-3.2-359.68-74.88-348.16-354.56 11.52-280.32 225.92-329.6 238.08-332.16 1.92-0.64 202.24-63.36 345.6 39.68a268.64 268.64 0 0 1 99.2 135.68c31.36 94.08 6.4 199.04-64 266.88-23.04 22.4-56.96 39.68-92.8 49.92v-218.88c0-100.48-81.28-181.76-181.76-181.76h-94.08v63.36h94.72c65.28 0 118.4 53.12 118.4 118.4v229.12c-16 1.28-86.4 5.12-140.8-10.24-31.36-8.96-55.68-30.72-65.92-59.52-6.4-19.2-6.4-38.4 1.28-58.88 10.24-27.52 64-47.36 142.72-53.76l-5.12-62.72c-110.08 8.96-176 40.96-196.48 94.08-12.8 33.92-14.08 68.48-2.56 101.76 16.64 48.64 57.6 85.76 108.8 99.84 72.32 20.48 163.2 12.16 165.12 12.16 71.04-2.56 145.28-32 192.64-78.08 87.68-83.84 119.04-214.4 80-331.52z" p-id="16820" fill="#1296db"></path></svg>',
      },
      {
        path: '/plugin/collector',
        name: '内容采集管理',
        component: '@/pages/plugin/collector/index',
        icon: '<svg t="1654564063044" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19893" width="128" height="128"><path d="M721.454545 0h-558.545454c-51.2 0-93.090909 41.890909-93.090909 93.090909v651.636364h93.090909V93.090909h558.545454V0z m139.636364 186.181818h-512c-51.2 0-93.090909 41.890909-93.090909 93.090909v651.636364c0 51.2 41.890909 93.090909 93.090909 93.090909h512c51.2 0 93.090909-41.890909 93.090909-93.090909V279.272727c0-51.2-41.890909-93.090909-93.090909-93.090909z m0 744.727273h-512V279.272727h512v651.636364z" p-id="19894" fill="#1296db"></path></svg>',
      },
      {
        path: '/plugin/importapi',
        name: '内容导入接口',
        component: '@/pages/plugin/importapi/index',
        icon: '<svg t="1654564089567" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20993" width="128" height="128"><path d="M942.057143 792.457143h-61.485714c-4.8 0-8.8 4-8.8 8.8v70.628571H152.114286V152.114286h719.771428v70.628571c0 4.8 4 8.8 8.8 8.8h61.485715c4.8 0 8.8-3.885714 8.8-8.8V108.228571c0-19.428571-15.657143-35.085714-35.085715-35.085714H108.228571c-19.428571 0-35.085714 15.657143-35.085714 35.085714v807.542858c0 19.428571 15.657143 35.085714 35.085714 35.085714h807.542858c19.428571 0 35.085714-15.657143 35.085714-35.085714V801.257143c0-4.914286-4-8.8-8.8-8.8zM957.714286 470.857143H598.857143v-86.857143c0-7.657143-8.914286-12-14.857143-7.2l-162.171429 128a9.142857 9.142857 0 0 0 0 14.4l162.171429 128c6.057143 4.8 14.857143 0.457143 14.857143-7.2v-86.857143h358.857143c5.028571 0 9.142857-4.114286 9.142857-9.142857v-64c0-5.028571-4.114286-9.142857-9.142857-9.142857z" p-id="20994" fill="#1296db"></path></svg>',
      },
      {
        path: '/plugin/redirect',
        name: '301跳转管理',
        component: '@/pages/plugin/redirect/index',
        icon: '<svg t="1654564143222" class="icon" viewBox="0 0 1088 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21622" width="128" height="128"><path d="M445.312 572.864V448.448H318.656v-124.16c0-31.36-237.696 144.96-237.696 144.96a60.544 60.544 0 0 0-0.064 84.672s237.76 180.352 237.76 146.752V572.8h126.656zM704.128 448v126.272h130.944V704c0 29.12 233.408-148.224 233.408-148.224a55.744 55.744 0 0 0 0-80.704s-237.696-177.92-237.696-152.832L835.072 448h-130.944zM512 0h128v1024H512z" fill="#1296db" p-id="21623"></path></svg>',
      },
      {
        path: '/plugin/transfer',
        name: '网站内容迁移',
        component: '@/pages/plugin/transfer/index',
        icon: '<svg viewBox="64 64 896 896" focusable="false" data-icon="swap" width="1em" height="1em" fill="#1296db" aria-hidden="true"><path d="M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>',
      },
      {
        path: '/plugin/storage',
        name: '资源存储配置',
        component: '@/pages/plugin/storage/index',
        icon: '<svg viewBox="64 64 896 896" focusable="false" data-icon="save" width="1em" height="1em" fill="#1296db" aria-hidden="true"><path d="M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"></path></svg>',
      },
      {
        path: '/plugin/user',
        name: '用户管理',
        component: '@/pages/plugin/user/index',
        icon: '<svg viewBox="64 64 896 896" focusable="false" data-icon="user" width="1em" height="1em" fill="#1296db" aria-hidden="true"><path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg>',
      },
      {
        path: '/plugin/group',
        name: '用户组VIP',
        component: '@/pages/plugin/group/index',
        icon: '<svg viewBox="64 64 896 896" focusable="false" data-icon="crown" width="1em" height="1em" fill="#1296db" aria-hidden="true"><path d="M899.6 276.5L705 396.4 518.4 147.5a8.06 8.06 0 00-12.9 0L319 396.4 124.3 276.5c-5.7-3.5-13.1 1.2-12.2 7.9L188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.8-6.7-6.5-11.4-12.3-7.9zm-126 534.1H250.3l-53.8-409.4 139.8 86.1L512 252.9l175.7 234.4 139.8-86.1-53.9 409.4zM512 509c-62.1 0-112.6 50.5-112.6 112.6S449.9 734.2 512 734.2s112.6-50.5 112.6-112.6S574.1 509 512 509zm0 160.9c-26.6 0-48.2-21.6-48.2-48.3 0-26.6 21.6-48.3 48.2-48.3s48.2 21.6 48.2 48.3c0 26.6-21.6 48.3-48.2 48.3z"></path></svg>',
      },
      {
        path: '/plugin/wechat',
        name: '微信公众号',
        component: '@/pages/plugin/wechat/index',
        icon: '<svg viewBox="64 64 896 896" focusable="false" data-icon="wechat" width="1em" height="1em" fill="#1296db" aria-hidden="true"><path d="M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 019.1 17.6c0 2.4-.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 006.4-2.6 9 9 0 002.6-6.4c0-2.2-.9-4.4-1.4-6.6-.3-1.2-7.6-28.3-12.2-45.3-.5-1.9-.9-3.8-.9-5.7.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9zm179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 01-36 35.9z"></path></svg>',
      },
      {
        path: '/plugin/weapp',
        name: '微信小程序',
        component: '@/pages/plugin/weapp/index',
        icon: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2128" width="128" height="128"><path d="M512 938.666667C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z m0-85.333334a341.333333 341.333333 0 1 0 0-682.666666 341.333333 341.333333 0 0 0 0 682.666666z m42.666667-256a149.333333 149.333333 0 1 1-212.352-135.424 42.666667 42.666667 0 1 1 36.053333 77.354667A64 64 0 1 0 469.333333 597.333333v-170.666666a149.333333 149.333333 0 1 1 212.352 135.424 42.666667 42.666667 0 0 1-36.053333-77.354667A64 64 0 1 0 554.666667 426.666667v170.666666z" p-id="2129" fill="#1296db"></path></svg>',
      },
      {
        path: '/plugin/order',
        name: '订单管理',
        component: '@/pages/plugin/order/index',
        icon: '<svg viewBox="64 64 896 896" focusable="false" data-icon="unordered-list" width="1em" height="1em" fill="#1296db" aria-hidden="true"><path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"></path></svg>',
      },
      {
        path: '/plugin/pay',
        name: '支付配置',
        component: '@/pages/plugin/pay/index',
        icon: '<svg viewBox="64 64 896 896" focusable="false" data-icon="alipay" width="1em" height="1em" fill="#1296db" aria-hidden="true"><path d="M789 610.3c-38.7-12.9-90.7-32.7-148.5-53.6 34.8-60.3 62.5-129 80.7-203.6H530.5v-68.6h233.6v-38.3H530.5V132h-95.4c-16.7 0-16.7 16.5-16.7 16.5v97.8H182.2v38.3h236.3v68.6H223.4v38.3h378.4a667.18 667.18 0 01-54.5 132.9c-122.8-40.4-253.8-73.2-336.1-53-52.6 13-86.5 36.1-106.5 60.3-91.4 111-25.9 279.6 167.2 279.6C386 811.2 496 747.6 581.2 643 708.3 704 960 808.7 960 808.7V659.4s-31.6-2.5-171-49.1zM253.9 746.6c-150.5 0-195-118.3-120.6-183.1 24.8-21.9 70.2-32.6 94.4-35 89.4-8.8 172.2 25.2 269.9 72.8-68.8 89.5-156.3 145.3-243.7 145.3z"></path></svg>',
      },
      {
        path: '/plugin/finance',
        name: '财务管理',
        component: '@/pages/plugin/finance/index',
        icon: '<svg viewBox="64 64 896 896" focusable="false" data-icon="money-collect" width="1em" height="1em" fill="#1296db" aria-hidden="true"><path d="M911.5 700.7a8 8 0 00-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 00-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z"></path></svg>',
      },
      {
        path: '/plugin/retailer',
        name: '分销管理',
        component: '@/pages/plugin/retailer/index',
        icon: '<svg viewBox="64 64 896 896" focusable="false" data-icon="usergroup-add" width="1em" height="1em" fill="#1296db" aria-hidden="true"><path d="M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z"></path></svg>',
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
