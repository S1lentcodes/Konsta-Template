const konstaConfig = require('konsta/config');

// wrap your config with konstaConfig
module.exports = konstaConfig({
  // rest of your usual Tailwind CSS config here
  content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
});
