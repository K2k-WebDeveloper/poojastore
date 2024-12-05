module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframe:{
        blink:{
          '50%':{opacity: '0'},
        },
      },
      animation:{
        blink:'blink 1s step-start infinite'
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
