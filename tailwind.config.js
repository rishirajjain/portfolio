module.exports = {
  important: true,
  purge: ["./pages/**/*", "./layouts/**/*", "./components/**/*"],
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
          crd: "var(--bg-card)",
          crdLig: "var(--bg-card-light)"
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
