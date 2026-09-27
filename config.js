/* 动态明信片 · 配置文件
 * 与 index.html 同目录，通过 <script src="config.js"></script> 加载
 */
window.POSTCARD_CONFIG = {

  /* ===== 网页标题 ===== */
  title: '一张明信片',                            // 浏览器标签页标题，留空保持 HTML 默认

  /* ===== 本地字体文件（@font-face 注入） =====
   * 每项：
   *   family  —— 自定义字体族名（在下面 fonts 里用引号引用）
   *   url     —— 字体文件路径（相对本文件）
   *   format  —— 可选 'woff2' | 'woff' | 'truetype' | 'opentype' | 'embedded-opentype'
   *   weight  —— 可选，默认 '400'
   *   style   —— 可选，默认 'normal'
   *   display —— 可选，默认 'swap'
   * 注：直接双击打开 HTML（file://）时浏览器可能拦截本地字体，建议用本地服务器预览。
   */
  fontFiles: [
    { family: '85W', url: 'fonts/HYWenHei85W.woff2', format: 'woff2' },
    // { family: 'MySans', url: 'fonts/sans.woff2', format: 'woff2', weight: '400' }
  ],

  /* ===== 字体（每项是 CSS font-family 字符串，可写多个候选字体） ===== */
  fonts: {
    intro:    '"HYWenHei 85W","85W","STKaiti","KaiTi","楷体",serif',      // 开场逐行文字
    message:  '"HYWenHei 85W","85W","STKaiti","KaiTi","楷体",cursive',    // 背面留言正文
    caption:  '"HYWenHei 85W","85W",system-ui,sans-serif',             // 正面标签 / 底部提示
    address:  '"HYWenHei 85W","85W","Times New Roman",serif',                // 地址栏 / TO 标签
    postmark: 'Georgia,serif'                                   // 邮戳文字
  },

  /* ===== 开场文字 ===== */
  intro: {
    lines: [                              // 逐行淡入的句子，建议 3 行，超出忽略
      '你好',
      '同路人'
    ],
    scrollCue: '向 下 滚 动 · S C R O L L'   // 开场文字下方的小字提示
  },

  /* ===== 图片（PNG / JPG / WebP；留空 '' 使用内置 SVG） ===== */
  images: {
    background: 'images/bg.png',    // 页面背景（自动模糊 + 放大）
    front:      'images/bg.png',         // 明信片正面主图（等比铺满）
    stamp:      'images/stamp.png'          // 右下角邮票（建议正方形或 5:6）
  },

  /* ===== 邮戳文字 ===== */
  postmark: {
    line1: 'CES5418',        // 第一行（字号较大）
    line2: '2026 · 09'       // 第二行（字号较小）
  },

  /* ===== 正面说明 ===== */
  front: {
    caption: '挪德卡莱-沐光之台'    // 正面左下角胶囊标签文字
  },

  /* ===== 背面 ===== */
  back: {
    color: {                 // 背面配色（十六进制，支持 #fff 简写）
      bg:   '#fdf8ee',       // 背景色（默认米白）
      text: '#3b3226',       // 正文字色（默认深褐）
      line: '#6e5c42'        // 线条 / 标签 / 邮戳色（默认浅褐）
    },

    message: [               // 留言正文，数组 .join('\n') 生成换行
      '致异校的你：', '身体健康，学业有成',
    ].join('\n'),

    toLabel: ' ',           // 地址第一行左侧的标签

    addressLines: [          // 地址行；每项 { text: 初始值, ph: 占位提示 }
      { text: '', ph: 'FROM CES5418' },
      { text: '', ph: 'TO YOU' },
      { text: '', ph: '' },
      { text: '', ph: '' }   // 最后一行自动变短
    ]
  },

  /* ===== 底部提示 ===== */
  hint: '向下翻',   // 开场结束后出现的提示

  /* ===== 性能调参（可选，不写用默认值） ===== */
  tuning: {
    maxTilt:   13,           // 鼠标倾斜最大角度（度）
    wheelSens: 0.45,         // 翻面滚轮灵敏度
    introSens: 0.0013,       // 开场滚轮灵敏度
    flipMax:   180,          // 最大翻转角度（度）
    lerp:      0.10,         // 动画平滑系数（0~1，越小越顺滑）
    backTrip:  200           // 正面持续上滚需累积的行程（像素），满额消耗触发一次回退
  }
};
