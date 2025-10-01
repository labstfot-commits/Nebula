/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: { center: true, padding: '1rem' },
      backgroundImage: {
        'hero-stars': "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        'football': "linear-gradient(135deg, #2d5016 0%, #5a7c47 50%, #87ceeb 100%)",
        'basketball': "linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ffd23f 100%)",
        'stadium': "linear-gradient(135deg, #00b894 0%, #00cec9 50%, #55a3ff 100%)",
        'fans': "linear-gradient(135deg, #ff416c 0%, #ff4b2b 50%, #ffa500 100%)",
        'fitness': "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
        'boxing': "linear-gradient(135deg, #8b0000 0%, #dc143c 50%, #ff6347 100%)",
        'baseball': "linear-gradient(135deg, #228b22 0%, #32cd32 50%, #90ee90 100%)",
        'boxing-dynamic': "radial-gradient(ellipse at center, #ff4500 0%, #8b0000 50%, #2d1b1b 100%)",
        'baseball-dynamic': "radial-gradient(ellipse at center, #ffd700 0%, #ff6347 50%, #8b4513 100%)",
        'training': "linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #3f6fd1 100%)",
      },
    },
  },
  plugins: [],
}


