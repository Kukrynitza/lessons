import config from '@shcherbin/eslint-config'

export default [
  ...config.browser,
  {
    rules: {
      'no-console': 'off'
    }
  }
]
