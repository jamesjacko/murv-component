module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'genii',
      externals: {
        react: 'React'
      }
    }
  }
}