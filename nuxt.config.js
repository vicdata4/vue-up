export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vue-up',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/vue-up/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/common'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

  ],
  module: {},
  middleware: ['auth', 'stats'],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend: (config) => {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));
 
      svgRule.test = /\.(png|jpe?g|gif|webp)$/;
 
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          'babel-loader',
          'vue-svg-loader',
        ],
      });
    },
    babel: {
      plugins: [["@babel/plugin-proposal-private-property-in-object", { "loose": true }]],
    },
  },
  static: {
    prefix: false
  },
  target: 'static',
  router: {
    base: '/vue-up/'
  }
}
