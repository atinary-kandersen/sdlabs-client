import { Button } from '@mantine/core';
import classNames from 'classnames';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={classNames('wa-cluster', styles.container)}>
      <div className={classNames(styles.left, 'wa-stack wa-gap-2xl')}>
        <div className={classNames(styles.left, 'wa-stack wa-gap-l')}>
          <div className={classNames(styles.heading, 'heading wa-heading-2xl')}>Self-Driving Labs® technologies.</div>
          <div className={classNames('wa-cluster wa-gap-xl')} style={{ opacity: 0.5 }}>
            <div className="wa-gap-xs">
              <wa-icon name="star" size="m" variant="regular"></wa-icon>
              <span className="wa-heading-xs">Reimagine discovery</span>
            </div>
            <div className="wa-gap-xs">
              <wa-icon name="clock" size="m" variant="regular"></wa-icon>
              <span className="wa-heading-xs">Accelerate innovation</span>
            </div>
            <div className="wa-gap-xs">
              <wa-icon name="code" size="m" variant="regular"></wa-icon>
              <span className="wa-heading-xs">No code</span>
            </div>
          </div>
          <p className="wa-body-l">
            SDLabs makes your experiment planning easy and accelerates technology innovation, material discovery, process optimization and scientific
            development.
          </p>
        </div>
        <div className="wa-cluster">
          <Button variant="outline" color="gray">
            Tutorial
          </Button>
          <Button variant="outline" color="gray">
            Watch the demo
          </Button>
          <Button variant="outline" color="gray">
            Documentation
          </Button>
        </div>
      </div>
      <img className={styles.image} src="https://enterprise.atinary.com/sdlabs/assets/images/group.svg" />
    </div>
  );
}
