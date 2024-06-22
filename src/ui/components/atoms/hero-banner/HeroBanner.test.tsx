import { render, screen } from '@testing-library/react';
import Rectangle6 from './__mock__/imgs/Rectangle6.png';
import Rectangle10 from './__mock__/imgs/Rectangle10.png';
import Rectangle11 from './__mock__/imgs/Rectangle11.png';
import Rectangle12 from './__mock__/imgs/Rectangle12.png';
import HeroBanner from './HeroBanner';

describe('First testing Hero Banner React Component', () => {
  test('should be rendere the hero banner image Rectangle6', () => {
    render(
      <HeroBanner className="heroBanner__content" backgroundImage={String(Rectangle6)} alt="text">
        test
      </HeroBanner>,
    );
    const heroBannerElement = screen.getByAltText('text');
    expect(heroBannerElement).toBeInTheDocument();
  });
});

describe('Second testing Hero Banner React Component', () => {
  test('should be rendere the hero banner image Rectangle10', () => {
    render(
      <HeroBanner className="heroBanner__content" backgroundImage={String(Rectangle10)} alt="text">
        test
      </HeroBanner>,
    );
    const heroBannerElement = screen.getByAltText('text');
    expect(heroBannerElement).toBeInTheDocument();
  });
});

describe('Third testing Hero Banner React Component', () => {
  test('should be rendere the hero banner image Rectangle11', () => {
    render(
      <HeroBanner className="heroBanner__content" backgroundImage={String(Rectangle11)} alt="text">
        test 2
      </HeroBanner>,
    );
    const heroBannerElement = screen.getByAltText('text');
    expect(heroBannerElement).toBeInTheDocument();
  });
});

describe('Quarter testing Hero Banner React Component', () => {
  test('should be rendere the hero banner image Rectangle12', () => {
    render(
      <HeroBanner className="heroBanner__content" backgroundImage={String(Rectangle12)} alt="text">
        test 3
      </HeroBanner>,
    );
    const heroBannerElement = screen.getByAltText('text');
    expect(heroBannerElement).toBeInTheDocument();
  });
});