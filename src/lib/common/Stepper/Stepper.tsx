import classNames from 'classnames';
import { Children, cloneElement, ReactElement } from 'react';
import styles from './Stepper.module.css';

export const Stepper = ({
  children,
  activeStep
}: {
  children: Array<ReactElement<typeof Step>>;
  activeStep: number;
}) => {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.steps)}>
        {Children.map(children, (child, index) =>
          cloneElement(child, {
            ...child.props,
            step: index + 1,
            active: activeStep === index + 1,
            completed: activeStep > index + 1
          } as Partial<typeof Step>)
        )}
      </div>
    </div>
  );
};

const Step = ({
  step,
  children,
  active = false,
  completed = false,
  onClick
}: {
  step?: number;
  children: string | ReactElement;
  active?: boolean;
  completed?: boolean;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={classNames(styles.step, 'wa-gap-m', {
        [styles.stepActive]: active,
        [styles.stepCompleted]: completed
      })}
    >
      <div
        className={classNames(styles.stepBullet, {
          [styles.stepBulletActive]: active
        })}
      >
        {completed === false ? (
          <span>{step}</span>
        ) : (
          <wa-icon slot="icon" name="check"></wa-icon>
        )}
      </div>
      <div
        className={classNames(styles.stepLabel, 'wa-heading-xs', {
          [styles.stepLabelClickable]: typeof onClick === 'function'
        })}
      >
        {children}
      </div>
    </div>
  );
};

Stepper.Step = Step;
