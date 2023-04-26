import { useState } from "react";
import styles from "./Footer.module.scss";

const steps = [
  {
    isActive: false,
    currentStep: 1,
    totalStep: 7,
    class: "one",
    name: "",
  },
  {
    isActive: true,
    currentStep: 2,
    totalStep: 7,
    class: "two",
    name: "PROFILING",
  },
  {
    isActive: true,
    currentStep: 3,
    totalStep: 7,
    class: "three",
    name: "CLEANING",
  },
  {
    isActive: false,
    currentStep: 4,
    totalStep: 7,
    class: "four",
    name: "",
  },
  {
    isActive: false,
    currentStep: 5,
    totalStep: 7,
    class: "five",
    name: "",
  },
  {
    isActive: false,
    currentStep: 6,
    totalStep: 7,
    class: "six",
    name: "",
  },
  {
    isActive: false,
    currentStep: 7,
    totalStep: 7,
    class: "seven",
    name: "",
  },
];

const Footer = () => {
  const [currentActiveStep, setCurrentActiveStep] = useState(2);
  const setStep = (step: number, isActive: boolean) => {
    if (isActive) {
      setCurrentActiveStep(step);
    }
  };

  return (
    <div className={`${styles.footer} app-footer`}>
      <div className={styles.separator} />
      <div className={styles.footerContent}>
        <div className={styles.learn}>
          <div className={styles.icon} />
          <div className={styles.content}>
            <div className={styles.header}>Learn Profiling Step</div>
            <div className={styles.subHeader}>Duration | 2mins</div>
          </div>
        </div>
        <div className={styles.selectionBar}>
          {steps.map((step) => {
            if (step.currentStep === currentActiveStep) {
              return (
                <div className={`${styles.active}`}>
                  <div className={`icon active ${step.class}`} />
                  <div className={styles.content}>
                    <div className={styles.header}>
                      {`Step ${step.currentStep}/${step.totalStep}`}
                    </div>
                    <div className={styles.subHeader}>{step.name}</div>
                  </div>
                </div>
              );
            }
            return (
              <div
                className={`icon ${step.class}`}
                onClick={() => setStep(step.currentStep, step.isActive)}
              />
            );
          })}
        </div>
        <div className={styles.disclaimer}>
          <div className={styles.content}>Rights Reserved 2023</div>
          <div className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
