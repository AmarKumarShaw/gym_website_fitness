// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
// module.exports = {

//   plugins: [
//       // require('flowbite/plugin')
//   ]

// }
// module.exports = {

//   content: [
//       // ...
//       'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
//   ]

// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}