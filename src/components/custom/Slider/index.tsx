import { useEffect, useRef, useState } from "react";
import styles from "./slider.module.scss";

interface ISlider {
  value: number;
  onChange?: Function;
  className?: string;
}

const Slider = ({ value, onChange = () => {}, className = "" }: ISlider) => {
  const [localValue, setLocalValue] = useState(0);
  const [isSliding, setSilding] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleMouseDown = (event: any) => {
    event.stopPropagation();
    setSilding(true);
  };

  const handleMouseMove = (event: any) => {
    event.stopPropagation();
    if (!isSliding) {
      return;
    }
    if (!sliderRef.current) {
      return;
    }
    const { width, left } = sliderRef.current.getBoundingClientRect();
    const { clientX } = event;
    let value = 0;
    if (clientX - left < 0) {
      value = 0;
    } else if (clientX > left + width) {
      debugger;
      value = 100;
    } else {
      value = Math.round(((clientX - left) * 100) / width);
    }
    setLocalValue(value);
  };

  const handleMouseUp = (event: any) => {
    setSilding(false);
    onChange(localValue);
  };

  return (
    <div
      className={`${styles.sliderContainer} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      ref={sliderRef}
    >
      <div className={styles.sliderBar}>
        <div className={styles.sliderline}>
          <div className={styles.slider} style={{ width: `${localValue}%` }} />
          <div
            className={styles.sliderIcon}
            style={{ right: `calc(100% - ${localValue}%  - 23px)` }}
            onMouseDown={handleMouseDown}
          >
            {localValue}
          </div>
        </div>
      </div>
      <div className={styles.sliderRange}>
        <span>0</span>
        <span>100</span>
      </div>
    </div>
  );
};

export default Slider;
