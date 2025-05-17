import styles from './GradientColors.module.scss';

export interface Gradient {
  label: string;
  variant: string;
}

export interface GradientColorsProps {
  gradients: Gradient[];
}

function GradientColors({ gradients }: GradientColorsProps) {
  return (
    <div className={styles.container}>
      {gradients.map((gradient) => {
        const gradientClass =
          styles[`gradient-${gradient.variant}`] ?? `gradient-${gradient.variant}`;
        const className = `${styles.box} ${gradientClass}`;
        return (
          <div key={gradient.variant} className={styles.item}>
            <div
              className={`${className} gradient-${gradient.variant}`}
              role="region"
              data-testid={`box-${gradient.variant}`}
            />
            <div className={styles.label}>{gradient.label}</div>
          </div>
        );
      })}
    </div>
  );
}

export { GradientColors };
