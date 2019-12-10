// eslint-disable-next-line
export const uuidGen = (prefix: string = 'vd-uuid-') => `${prefix}${(((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)}${Date.now()}`;

// preventing XSS attacks
export const escape = (str: string): string => {
  if (!str) {
    return '';
  }
  return str.replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
};

export const removeHtmlTag = (str: string): string => {
  if (!str) {
    return '';
  }
  return str.replace(/<script[^>]*?>[\s\S]*?<\/script>/ig, '')
    .replace(/<style[^>]*?>[\s\S]*?<\/style>/ig, '')
    .replace(/<\/?[^>]*>/g, '')
    .replace(/[ | ]*\n/g, '\n')
    .replace(/\n[\s| | ]*\r/g, '\n')
    .replace(/(^\s*)|(\s*$)/g, '')
    .replace(/&nbsp;/ig, '');
};

// 获取两个数之间的随机整数
export const getRandomRound = (min: number, max: number): number => Math.round(Math.random() * (max - min) + min);

export const pxTransform = (px: number, base = 16): string => `${Math.round((px / base) * 1000) / 1000}rem`;
