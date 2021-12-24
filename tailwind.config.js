module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": {
          DEFAULT: "#006D77",
          hover: "#085860",
        },
        "light-green": {
          DEFAULT: "#83C5BE",
        },
        "light-gray": {
          DEFAULT: "#EDF6F9",
        },
      },
      fontFamily: {
        title: ["Rancho"],
        main: ["Poppins"],
      },
    },
  },
  plugins: [],
};
