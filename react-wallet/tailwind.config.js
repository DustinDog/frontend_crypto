/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#929292",
          "200": "#001715",
        },
        white: "#fff",
        aquamarine: {
          "100": "#3affc4",
          "200": "#36f2bc",
        },
        paleturquoise: "#a4ffeb",
        seagreen: {
          "100": "rgba(1, 98, 69, 0.2)",
          "200": "rgba(38, 135, 107, 0.8)",
          "300": "rgba(1, 98, 69, 0.8)",
        },
        mediumaquamarine: "#8ae6d1",
      },
      spacing: {},
      fontFamily: {
        "ibm-plex-sans": "'IBM Plex Sans'",
        goldman: "Goldman",
        "ibm-plex-sans-hebrew": "'IBM Plex Sans Hebrew'",
      },
      borderRadius: {
        "41xl": "60px",
        "smi-6": "12.6px",
        "xs-3": "11.3px",
      },
    },
    fontSize: {
      "11xl": "30px",
      lg: "18px",
      "5xl": "24px",
      "21xl": "40px",
      "2xl": "21px",
      "31xl": "50px",
      inherit: "inherit",
    },
    screens: {
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
