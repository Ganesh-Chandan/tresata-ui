interface IToggle {
  width: number;
  height: number;
}

const Toggle = ({ width = 26, height = 14 }) => {
  return (
    <label className="switch" style={{ width, height }}>
      <input type="checkbox" />
      <span
        className="slider round"
        style={{ borderRadius: height / 2 }}
      ></span>
    </label>
  );
};

export default Toggle;
