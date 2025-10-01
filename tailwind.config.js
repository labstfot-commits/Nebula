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
        'hero-stars': "url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2320&auto=format&fit=crop')",
        'football': "url('https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=2320&auto=format&fit=crop')",
        'basketball': "url('https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2320&auto=format&fit=crop')",
        'stadium': "url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2320&auto=format&fit=crop')",
        'fans': "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2320&auto=format&fit=crop')",
        'fitness': "url('https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=2320&auto=format&fit=crop')",
        'boxing': "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2320&auto=format&fit=crop')",
        'baseball': "url('https://images.unsplash.com/photo-1508887253230-c06363b049be?q=80&w=2320&auto=format&fit=crop')",
      },
    },
  },
  plugins: [],
}


