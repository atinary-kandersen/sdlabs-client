import classNames from 'classnames';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <div className={classNames('wa-cluster', styles.container)}>
      <div className={classNames(styles.left, 'wa-stack wa-gap-l')}>
        <div className={classNames(styles.heading, 'heading wa-heading-2xl')}>
          Self-Driving Labs® technologies.
        </div>
        <div className={classNames(styles.bulletPoints, 'wa-gap-2xl')}>
          <div className="wa-gap-s">
            <wa-icon name="star" size="m" variant="regular"></wa-icon>
            <span className="wa-heading-xs">Reimagine discovery</span>
          </div>
          <div className="wa-gap-s">
            <wa-icon name="clock" size="m" variant="regular"></wa-icon>
            <span className="wa-heading-xs">Accelerate innovation</span>
          </div>
          <div className="wa-gap-s">
            <wa-icon name="code" size="m"></wa-icon>
            <span className="wa-heading-xs">No code</span>
          </div>
        </div>
        <p className="wa-body-l">
          SDLabs makes your experiment planning easy and accelerates technology
          innovation, material discovery, process optimization and scientific
          development.
        </p>
        <div className={classNames(styles.buttons, 'wa-gap-m')}>
          <wa-button appearance="outlined">Tutorial</wa-button>
          <wa-button appearance="outlined">Watch the demo</wa-button>
          <wa-button
            appearance="outlined"
            href="https://enterprise.atinary.com/documentation/index.html"
            target="_blank"
          >
            Documentation
          </wa-button>
        </div>
      </div>
      <img
        className={styles.image}
        src="https://enterprise.atinary.com/sdlabs/assets/images/group.svg"
      />
    </div>
  );
};
