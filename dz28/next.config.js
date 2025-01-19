export default {
  webpack: (config) => {
    config.module.rules
      .filter(({ oneOf }) => Array.isArray(oneOf))
      .forEach(({ oneOf }) => {
        oneOf
          .filter(({ use }) => Array.isArray(use))
          .forEach(({ use }) => {
            use.forEach(({ loader, options }) => {
              if (loader?.includes('/css-loader') && options.modules.exportLocalsConvention) {
                // eslint-disable-next-line no-param-reassign
                options.modules.exportLocalsConvention = 'camelCaseOnly'
              }
            })
          })
      })

    return config
  }
}
