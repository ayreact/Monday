/** @type {import('tailwindcss').Config} */
export default {
  // In tailwind.config.js
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",    // Next.js
    "./components/**/*.{js,ts,jsx,tsx}",// React components
    "./src/**/*.{html,js}",            // Standard src structure
    "./public/**/*.html",              // HTML files
    "./*.html",                        // Root HTML files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
