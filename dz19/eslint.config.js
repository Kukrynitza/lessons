import config from '@shcherbin/eslint-config'

export default [
  ...config.react,
  {
    rules: {
      'no-console': 'off'
    }
  }
]