/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js,tsx}", "./src/**/*.{html,js,tsx}"],
  theme: {
    backgroundImage: {
      "orange-fade": "linear-gradient(125deg, #F97316FF, #C95D12FF)",
      background: "url(/background.jpg)",
    },
    extend: {
      backgroundColor: {
        "dark-blue": "#00002EFF",
      },
      boxShadow: {
        neomorphism: "13px 13px 26px #1c1c1f, -13px -13px 26px #323235",
      },
      fontFamily: { sans: ["Inter", "sans-serif"] },
    },
  },
  plugins: [],
};
