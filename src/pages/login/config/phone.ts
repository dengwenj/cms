export const phoneRules = {
  phone: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'blur'
    },
    {
      // 手机号正则表达式
      pattern: /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])d{8}$/,
      message: '手机号输入不正确',
      trigger: 'blur'
    }
  ],
  code: [
    // {
    //   required: true,
    //   message: '请输入验证码',
    //   trigger: 'blur'
    // },
    // {
    //   pattern: /^[0-9]d{6}$/, // /^\d{6}$/
    //   message: '验证码必须6位',
    //   trigger: 'blur'
    // }
  ]
}
