exports.config = {
  files: {
    stylesheets: {
      joinTo: 'css/app.css',
      order: {
        before: 'app/styles/reset.css',
      },
    },
    javascripts: {
      joinTo: 'js/app.js',
    },
  },
  plugins: {
    stylus: {
      imports: ['app/styles/_variables'],
    },
    postcss: {
      processors: [require('autoprefixer')],
    },
  },
};
