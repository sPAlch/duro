export const siteData = {
  en: [
    {
      slug: 'index',
      label: 'Home',
    },
    {
      slug: 'product',
      label: 'Products',
      hasPage: true,
      subMenu: [
        {
          slug: 'automotive',
          label: 'Automotive',
        },
        {
          slug: 'bicycle',
          label: 'Bicycle',
        },
        {
          slug: 'motorcycle',
          label: 'Motorcycle',
        },
        {
          slug: 'atv',
          label: 'ATV',
        },
        {
          slug: 'industrial',
          label: 'Industrial',
        },
      ]
    },
    {
      slug: 'about',
      label: 'About Us',
      hasPage: false,
      subMenu: [
        {
          slug: 'philosophy',
          label: 'Philosophy',
        },
        {
          slug: 'brand-concept',
          label: 'Brand Concept',
        },
        {
          slug: 'location',
          label: 'Location',
        },
      ],
    },
    {
      slug: '',
      label: 'Online Shop',
      url: 'https://www.amazon.com/'
    },
  ],
  zh: [
    {
      slug: 'index',
      label: '首頁',
    },
    {
      slug: 'product',
      label: '輪胎商品',
      hasPage: true,
      subMenu: [
        {
          slug: 'automotive',
          label: 'Automotive',
        },
        {
          slug: 'bicycle',
          label: 'Bicycle',
        },
        {
          slug: 'motorcycle',
          label: 'Motorcycle',
        },
        {
          slug: 'atv',
          label: 'ATV',
        },
        {
          slug: 'industrial',
          label: 'Industrial',
        },
      ]
    },
    {
      slug: 'about',
      label: '關於華豐',
      hasPage: false,
      subMenu: [
        {
          slug: 'philosophy',
          label: '企業理念',
        },
        {
          slug: 'brand-concept',
          label: '品牌概念',
        },
        {
          slug: 'location',
          label: '全球分布',
        },
      ],
    },
    {
      slug: 'investigate',
      label: '投資人關係',
      hasPage: false,
      subMenu: [
        {
          slug: 'financial-information',
          label: '財務資訊',
        },
        {
          slug: 'stock',
          label: '股價及股利',
        },
        {
          slug: 'major-news',
          label: '重大訊息',
        },
        {
          slug: 'shareholders',
          label: '股東會與董事會資訊',
        },
        {
          slug: 'earnings-call',
          label: '法說會資訊',
        },
        {
          slug: 'investor-relations-contact',
          label: '投資人關係聯絡窗口',
        },
        {
          slug: 'governance',
          label: '公司治理',
        },
        {
          slug: 'investor-relations',
          label: '利害關係人專區',
        },
      ],
    },
  ]
}
