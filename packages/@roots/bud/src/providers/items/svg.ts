import svgToMiniDataUri from 'mini-svg-data-uri'

export const svg = {
  loader: require.resolve('resolve-url-loader'),
  options: {
    generator: (content: unknown) =>
      svgToMiniDataUri(content.toString()),
  },
}
