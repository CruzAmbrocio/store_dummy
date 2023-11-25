module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
  },
  //added this
  resolver: {
    sourceExts: ["js", "jsx","json", "ts", "tsx", "cjs"],
  },
};