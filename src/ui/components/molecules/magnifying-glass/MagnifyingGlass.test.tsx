import { render, screen, fireEvent } from '@testing-library/react';
import magnifyingglass from '../../../../assets/icons/magnifyingglass.svg?raw';
import MagnifyingGlass from './MagnifyingGlass';

describe('Testing MagnifyingGlass React Component', () => {
  test('should be rendere MagnifyingGlass icon', () => {
    render(<MagnifyingGlass icon={magnifyingglass} variant="solid" />);
    const buttonElement = screen.getByTestId('button__glass');
    expect(buttonElement).toBeInTheDocument();
  });
  test('Testing MagnifyingGlass solid', () => {
    render(<MagnifyingGlass variant="solid" icon="<svg>...</svg>" />);

    const buttonIcon = screen.getByTestId('button__glass');
    fireEvent.click(buttonIcon);

    const dividerElement = screen.getByRole('separator');
    expect(dividerElement).toHaveClass('divider--solid');
  });

  test('Should display the correct children', () => {
    render(
      <MagnifyingGlass variant="solid" icon="<svg>...</svg>">
        BUSCAR
      </MagnifyingGlass>,
    );

    const buttonIcon = screen.getByTestId('button__glass');
    fireEvent.click(buttonIcon);

    expect(screen.getByText('BUSCAR')).toBeInTheDocument();
  });
});

function createMock() {
  let callCount = 0;
  const mockFunction = () => {
    callCount += 1;
    console.log('It has been clicked');
  };
  mockFunction.callCount = () => callCount;
  return mockFunction;
}

describe('Testing Button onClick action', () => {
  test('onClick callback when icon button is clicked', () => {
    const onClickMock = createMock();
    render(<MagnifyingGlass icon={magnifyingglass} variant="solid" onClick={onClickMock} />);
    const buttonElement = screen.getByTestId('button__glass');
    fireEvent.click(buttonElement);
    expect(onClickMock.callCount()).toBe(0);
  });
  test('Should display the correct children', () => {
    const onClickMock = createMock();
    render(
      <MagnifyingGlass icon="<svg>...</svg>" variant="solid" onClick={onClickMock}>
        BUSCAR
      </MagnifyingGlass>,
    );

    const buttonIcon = screen.getByTestId('button__glass');
    fireEvent.click(buttonIcon);

    const buttonElement = screen.getByTestId('button__glass1');
    expect(screen.getByText('BUSCAR')).toBeInTheDocument();
    fireEvent.click(buttonElement);
    expect(onClickMock.callCount()).toBe(1);
  });
});
