export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#030712',
          900: '#0f172a',
        },
        zinc: {
          950: '#09090b',
          900: '#18181b',
        },
        indigo: {
          950: '#0c0221',
          900: '#1e1b4b',
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'custom-shake': 'custom-shake 0.4s cubic-bezier(.36,.07,.19,.97) both infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'custom-shake': {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px) translateY(-5px) rotate(-2deg)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px) translateY(5px) rotate(2deg)' },
        }
      },
      boxShadow: {
        glow: '0 0 20px rgba(132, 204, 22, 0.5)',
      }
    },
  },
  safelist: [
    { pattern: /^bg-(slate|zinc|indigo|lime|fuchsia|cyan)-(900|950|800|700|600|500|400|300|200|100)/ },
    { pattern: /^text-(slate|zinc|indigo|lime|fuchsia|cyan)-(900|950|800|700|600|500|400|300|200|100)/ },
    { pattern: /^border-(slate|zinc|indigo|lime|fuchsia|cyan)-(900|950|800|700|600|500|400|300|200|100)/ },
    { pattern: /^hover:(bg|text|border)-(slate|zinc|indigo|lime|fuchsia|cyan)-(900|950|800|700|600|500|400|300|200|100)/ },
    { pattern: /^ring-(slate|zinc|indigo|lime|fuchsia|cyan)-(900|950|800|700|600|500|400|300|200|100)/ },
    { pattern: /^focus:ring-(slate|zinc|indigo|lime|fuchsia|cyan)-(900|950|800|700|600|500|400|300|200|100)/ },
    { pattern: /^from-(slate|zinc|indigo|lime|fuchsia|cyan)-(900|950|800|700|600|500|400|300|200|100)/ },
    { pattern: /^via-(slate|zinc|indigo|lime|fuchsia|cyan)-(900|950|800|700|600|500|400|300|200|100)/ },
    { pattern: /^to-(slate|zinc|indigo|lime|fuchsia|cyan)-(900|950|800|700|600|500|400|300|200|100)/ },
    { pattern: /^placeholder-(slate|zinc|indigo|lime|fuchsia|cyan)-(900|950|800|700|600|500|400|300|200|100)/ },
    { pattern: /^shadow-\[0_0_.*\]/ },
  ],
  plugins: [],
}