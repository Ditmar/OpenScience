import { useTheme } from '@mui/material/styles';
import classNames from 'classnames';
import styles from './Footer.module.scss';
import LogoFooter from '../../atoms/logo-footer/LogoFooter';
import Variables from '../../atoms/label-variables/Variables';
import LabelResourcesPage from '../../atoms/label-resources-page/LabelResourcesPage';
import DividerVariables from '../../atoms/divider-variables/DividerVariables';
import logo from '../../../../assets/icons/logo.svg?raw';
import type { IFooterProps } from './types/IProps';
import Location from '../location-variable/Location';

function Footer({ locationText, followUsText, size = 'medium' }: IFooterProps) {
  const theme = useTheme();

  return (
    <div
      className={classNames(styles.footer, styles[`footer--${size}`])}
      style={{
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.default,
        borderColor: theme.palette.background.default,
      }}
    >
      <div className={styles['footer__logo-section']}>
        <LogoFooter icon={logo} color="secondary" />
      </div>

      <div className={classNames(styles.footer__variables, styles['footer__vertical-line'])}>
        <div className={styles.footer__divider}>
          <DividerVariables />
        </div>

        <div className={classNames(styles.footer__section, styles['footer__section--left'])}>
          <div className={styles.footer__group}>
            <div className={styles.footer__label}>
              <LabelResourcesPage text={followUsText} />
            </div>
            <div className={styles.footer__section1}>
              <div className={classNames(styles.footer__text, styles['footer__text--shift-right'])}>
                <Variables text="ARTÍCULOS" colorVariant="primary" />
              </div>
              <div className={styles.footer__text}>
                <Variables text="VOLUMENES" colorVariant="primary" />
              </div>
            </div>
          </div>
        </div>

        <div className={classNames(styles.footer__section, styles['footer__section--right'])}>
          <div className={styles.footer__group}>
            <div className={styles.footer__label}>
              <LabelResourcesPage text="PÁGINA" />
            </div>
            <div className={styles.footer__text}>
              <Variables text={locationText} colorVariant="primary" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer__location} />
      <Location locationText={locationText} followUsText={followUsText} size={size} />
    </div>
  );
}

export default Footer;
