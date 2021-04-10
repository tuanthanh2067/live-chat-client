const Circle = ({
  top = 0,
  right = 0,
  color = "white",
  size = 24,
  zIndex = 1,
}) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        style={{
          top: top,
          right: right,
          fill: color,
          width: size,
          height: size,
          zIndex: zIndex,
          transform: `translate(${right}, ${top})`,
          position: "absolute",
        }}
      >
        <circle cx="12" cy="12" r="12" />
      </svg>
    </div>
  );
};

export default Circle;
