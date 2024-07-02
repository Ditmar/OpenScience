import './styles.scss';
import LogoFooter from '../../atoms/logo-footer/LogoFooter';
import Variables from '../../atoms/label-variables/Variables';
import LabelResourcesPage from '../../atoms/label-resources-page/LabelResourcesPage';
import DividerVariables from '../../atoms/divider-variables/DividerVariables';
import logo from '../../../../assets/icons/logo.svg?raw';

function FooterVariables() {
  return (
    <div className="molecule-footer">
      <div className="logo-section">
        <LogoFooter icon={logo} color="primary" />
      </div>
      <div className="variables-section">
        <span className="divider">
          <DividerVariables />
        </span>
        <div className="section">
          <LabelResourcesPage text="RECURSOS" />
          <div className="section1">
            <div className="articulos">
              <Variables text="ARTÍCULOS" colorVariant="primary" />
            </div>
            <div className="volumenes">
              <Variables text="VOLÚMENES" colorVariant="primary" />
            </div>
          </div>
        </div>
        <span className="section2__divider">
          <DividerVariables />
        </span>
        <div className="section2">
          <LabelResourcesPage text="PAGINA" />
          <div className="texto">
            <Variables text="UNIPOL.EDU.BO" colorVariant="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterVariables;
