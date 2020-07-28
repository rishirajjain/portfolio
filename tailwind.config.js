module.exports = {
  important: true,
  theme: {
    fontFamily: {
      display: ["Montserrat", "sans-serif"],
      body: ["Montserrat", "sans-serif"]
    },
    extend: {
      colors: {
        background: {
          pri: "var(--bg-background-pri)",
          sec: "var(--bg-background-sec)",
          ter: "var(--bg-background-ter)",
          crd: "var(--bg-card)"
          // pri: "#000a12",
          // sec: "#263238"
        },
        txt: {
          pri: "var(--txt-pri)",
          sec: "var(--txt-sec)"
        }
      }
    },
    variants: {
      backgroundColor: ["responsive", "hover", "focus", "active"]
    }
  }
};
