const getVersionByUserAgent = (label: string): boolean => { // 获取版本号
  if (!window) {
    throw new Error('window is undefined');
  }
  const exp = new RegExp(`${label}/([^\\s\\_\\-]+)`);
  const info = window.navigator.userAgent.toLowerCase().match(exp);
  return !!(info && info.length > 0);
};

export const isAlipayEnv = (): boolean => getVersionByUserAgent('alipayclient');

export const isWeChatEnv = (): boolean => getVersionByUserAgent('micromessenger');

export const isWeChatMiniProgramEnv = (): boolean => isWeChatEnv() && /miniprogram/.test(window.navigator.userAgent.toLowerCase());
