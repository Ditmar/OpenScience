import './SearchMagnifyingGlass.scss';
import type { IProps } from './types/IProps';
import Navbar from '../../atoms/navbar/Navbar';
import MagnifyingGlass from '../magnifying-glass/MagnifyingGlass';
import ArticlesIcon from '../../../../assets/icons/article.svg?raw';
import StartIcon from '../../../../assets/icons/start.svg?raw';
import VolumesIcon from '../../../../assets/icons/volumes.svg?raw';
import glass from '../../../../assets/icons/magnifyingglass.svg?raw';

function SearchMagnifyingGlass({ variant = 'solid', onClick }: IProps) {
  return (
    <div className="option-search">
      <div className="option-search__items">
        <Navbar icon={ArticlesIcon}>ARTÍCULOS</Navbar>
        <Navbar icon={StartIcon}>INICIO</Navbar>
        <Navbar icon={VolumesIcon}>VOLUMENES</Navbar>
      </div>
      <MagnifyingGlass icon={glass} variant={variant} onClick={onClick} aria-label="Menu">
        BUSCAR
      </MagnifyingGlass>
      <div className="option-magnifyingGlass" role="menu" />
    </div>
  );
}

export default SearchMagnifyingGlass;
