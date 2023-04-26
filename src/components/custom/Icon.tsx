interface IIcon {
  name: string;
  className?: string;
}

const Icon = ({ name, className = "" }: IIcon) => (
  <div className={`icon ${className}`}>
    <span className={name}></span>
  </div>
);

export default Icon;
