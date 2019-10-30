export enum PlatformEnvEnum {
  ALIPAY = 'Alipay',
  MicroMessenger = 'WeChat',
  WECHATMINIPROGRAM = 'WeChatMiniProgram',
  QQ = 'QQ',
  H5 = 'H5'
}

const getVersion = (label: string): boolean => { // 获取版本号
  if (!window) {
    throw new Error('window is undefined');
  }
  const exp = new RegExp(`${label}/([^\\s\\_\\-]+)`);
  const info = window.navigator.userAgent.toLowerCase().match(exp);
  return !!(info && info.length > 0);
};

export const isAlipayEnv = (): boolean => getVersion('alipayclient');

export const isWeChatEnv = (): boolean => getVersion('micromessenger');

export const isWeChatMiniProgramEnv = (): boolean => isWeChatEnv() && /miniprogram/.test(window.navigator.userAgent.toLowerCase());

export const getPlatformEnv = (): PlatformEnvEnum => {
  if (isAlipayEnv()) {
    return PlatformEnvEnum.ALIPAY;
  }
  if (isWeChatEnv()) {
    return PlatformEnvEnum.MicroMessenger;
  }
  return PlatformEnvEnum.H5;
};
