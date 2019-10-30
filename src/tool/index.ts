// eslint-disable-next-line
export const uuidGen = (prefix: string = 'vd-uuid-') => `${prefix}${(((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)}${Date.now()}`;

export const removeHtmlTag = (str: string): string => {
  if (!str) {
    return '';
  }
  return str.replace(/<script[^>]*?>[\s\S]*?<\/script>/ig, '') // 去掉<script>;
    .replace(/<style[^>]*?>[\s\S]*?<\/style>/ig, '') // 去掉<style>;
    .replace(/<\/?[^>]*>/g, '') // 去除HTML tag
    .replace(/[ | ]*\n/g, '\n') // 去除行尾空白
    .replace(/\n[\s| | ]*\r/g, '\n') // 去除多余空行
    .replace(/(^\s*)|(\s*$)/g, '') // 去掉空格
    .replace(/&nbsp;/ig, ''); // 去掉&nbsp;
};

// preventing XSS attacks
export const escape = (str: string): string => {
  if (!str) {
    return '';
  }
  return str.replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
};
