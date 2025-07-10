import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  extend: {
      colors: {
        primary: {
          DEFAULT: '#84cc16',    // Lime 500
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16',
          600: '#65a30d',
          700: '#4d7c0f',
          800: '#3f6212',
          900: '#365314',
        },
        accent: {
          DEFAULT: '#f59e0b',    // Amber 500
          100: '#fef3c7',
          500: '#f59e0b',
          700: '#b45309',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f5f5f4',
          300: '#d4d4d4',
          500: '#737373',
          700: '#404040',
          900: '#171717',
        },
        success: '#22c55e',
        warning: '#eab308',
        error: '#ef4444',
        info: '#3b82f6',
      },
    },
  plugins: [
    tailwindcss(),
  ],
})