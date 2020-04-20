# @vdfor/util

工具包

## 安装

```bash
# use yarn
yarn add @vdfor/util

# use npm
npm i @vdfor/util -S
```

## API

### validPhoneRegx
> 验证手机号码正则


### validEmailRegx
> 验证email正则


### isAlipayEnv
> 是否为支付宝运行环境，是返回 true , 否则返回 false 


### isWeChatEnv
> 是否为微信运行环境，是返回 true , 否则返回 false 


### isWeChatMiniProgramEnv
> 是否为微信小程序运行环境，是返回 true , 否则返回 false 


### uuidGen
> 生成uuid


#### 入参

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| prefix | 前缀 | string | vd-uuid- |


#### 返回
string

### escape
> 去除script, 防止xss攻击，用于动态注入html文本处理


### removeHtmlTag
> 去除html标签，返回纯文本


### getRandomRound
> 获取两个数之间的随机数 `getRandomRound(min, max)` 


