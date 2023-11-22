module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  //added this
  resolver: {
    sourceExts: ["js", "jsx","json", "ts", "tsx", "cjs"],
  },
};