new FinisherHeader({
  count: 40,
  size: {
    min: 2,
    max: 4,
    pulse: 0,
  },
  speed: {
    x: {
      min: 0,
      max: 0.3,
    },
    y: {
      min: 0,
      max: 0.3,
    },
  },
  colors: {
    background: "#000000",
    particles: ["#6cff52", "#46e97e", "#3ec5ff"],
  },
  blending: "screen",
  opacity: {
    center: 0.8,
    edge: 0.5,
  },
  skew: 0,
  shapes: ["s"],
});
