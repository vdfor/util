// eslint-disable-next-line
export const uuidGen = (prefix: string = 'vd-uuid-') => `${prefix}${(((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)}${Date.now()}`;

// preventing XSS attacks
export const escape = (str: string): string => {
  if (!str) {
    return '';
  }
  return str.replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
};
