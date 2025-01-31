import Article from '../../molecules/article/Article';
import LabelArticles from '../../atoms/label-articles/LabelArticles';
import LabelVolumes from '../../atoms/label-volumes/LabelVolumes';
import VolumeCarousel from '../../molecules/volume-carousel/VolumeCarousel';
import LabelDate from '../../atoms/label-date/LabelDate';
import Thumbnail from '../../atoms/thumbnail/Thumbnail';
import Volumen from '../../atoms/label-vol/LabelVol';
import Rectangle27 from '../../atoms/thumbnail/__mock__/imgs/Rectangle27.png';
import Rectangle28 from '../../atoms/thumbnail/__mock__/imgs/Rectangle28.png';
import Rectangle29 from '../../atoms/thumbnail/__mock__/imgs/Rectangle29.png';
import Rectangle30 from '../../atoms/thumbnail/__mock__/imgs/Rectangle30.png';
import LeftArrow from '../../../../assets/icons/left-arrow.svg?raw';
import RightArrow from '../../../../assets/icons/right-arrow.svg?raw';
import './styles.scss';

function ArticlesPage() {
  return (
    <div className="main-page">
      <div className="articles">
        <LabelArticles variant="secondary">ARTÍCULOS</LabelArticles>
      </div>
      <div className="articles-page">
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
      <div className="volumes">
        <LabelVolumes text="VOLÚMENES" color="tertiary" />
      </div>
      <div className="volume-carousel">
        <VolumeCarousel leftIcon={LeftArrow} rightIcon={RightArrow}>
          <div className="carousel__item">
            <Thumbnail pathImage={String(Rectangle27)} alt="Rectangle27" />
            <div className="date">
              <LabelDate date={new Date(2023, 3, 15)} />
            </div>
            <div className="vol">
              <Volumen volumen="Vol." id={1} />
            </div>
          </div>
          <div className="carousel__item">
            <Thumbnail pathImage={String(Rectangle28)} alt="Rectangle28" />
            <div className="date">
              <LabelDate date={new Date(2023, 3, 15)} />
            </div>
            <div className="vol">
              <Volumen volumen="Vol." id={2} />
            </div>
          </div>
          <div className="carousel__item">
            <Thumbnail pathImage={String(Rectangle29)} alt="Rectangle29" />
            <div className="date">
              <LabelDate date={new Date(2023, 3, 15)} />
            </div>
            <div className="vol">
              <Volumen volumen="Vol." id={3} />
            </div>
          </div>
          <div className="carousel__item">
            <Thumbnail pathImage={String(Rectangle30)} alt="Rectangle30" />
            <div className="date">
              <LabelDate date={new Date(2024, 5, 23)} />
            </div>
            <div className="vol">
              <Volumen volumen="Vol." id={4} />
            </div>
          </div>
        </VolumeCarousel>
      </div>
    </div>
  );
}

export default ArticlesPage;
