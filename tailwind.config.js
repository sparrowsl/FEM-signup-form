module.exports = {
  content: ["./src/**/*.{html,js,svelte}"],
  theme: {
    extend: {
      colors: {
        fem_red: "hsl(0, 100%, 74%)",
        fem_green: "hsl(154, 59%, 51%)",
        fem_blue: "hsl(248, 32%, 49%)",
        fem_dark_blue: "hsl(249, 10%, 26%)",
        fem_grayish_blue: "hsl(246, 25%, 77%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        mobile: "url('/images/bg-intro-mobile.png')",
        desktop: "url('/images/bg-intro-desktop.png')",
      },
    },
  },
  plugins: [],
};
