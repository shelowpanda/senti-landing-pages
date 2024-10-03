const NEXT_PUBLIC_SHOWCASE_LIST = process.env.NEXT_PUBLIC_SHOWCASE_LIST

const ENV_SHOWCASE_LIST = NEXT_PUBLIC_SHOWCASE_LIST && NEXT_PUBLIC_SHOWCASE_LIST.split(',').map(i => {
  return {
    url: i
  }
}) || []

export const showcases = [
  {
    imageSrc: '/senti/first.jpg',
    alt: 'Showcase Image 1',
    title: '登录页-01'
  },
  {
    imageSrc: '/senti/second.jpg',
    alt: 'Showcase Image 2',
    title: '登录页-02'
  },
  {
    imageSrc: '/senti/third.jpg',
    alt: 'Showcase Image 3',
    title: '首页-01'
  },
  {
    imageSrc: '/senti/four.jpg',
    alt: 'Showcase Image 4',
    title: '首页-02'
  }
];