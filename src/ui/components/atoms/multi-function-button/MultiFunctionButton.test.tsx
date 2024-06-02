import { render, screen, fireEvent } from '@testing-library/react';
import Pdf from '../../../../assets/icons/pdf.svg?raw';
import Media from '../../../../assets/icons/media.svg?raw';
import Share from '../../../../assets/icons/share.svg?raw';
import Reference from '../../../../assets/icons/reference.svg?raw';
import MultiFunctionButton from './MultiFunctionButton';

describe('Testing Button React Component', () => {
  test('should be rendere Pdf', () => {
    render(<MultiFunctionButton icon={Pdf} />);
    const buttonElement = screen.getByTestId('button-icon');
    expect(buttonElement).toBeInTheDocument();
  });

  test('should be rendere Share', () => {
    render(<MultiFunctionButton icon={Share} />);
    const buttonElement = screen.getByTestId('button-icon');
    expect(buttonElement).toBeInTheDocument();
  });

  test('should be rendere Media', () => {
    render(<MultiFunctionButton icon={Media} />);
    const buttonElement = screen.getByTestId('button-icon');
    expect(buttonElement).toBeInTheDocument();
  });

  test('should be rendere Reference', () => {
    render(<MultiFunctionButton icon={Reference} />);
    const buttonElement = screen.getByTestId('button-icon');
    expect(buttonElement).toBeInTheDocument();
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
  test('onClick callback when pdf button is clicked', () => {
    const onClickMock = createMock();
    render(<MultiFunctionButton icon={Pdf} onClick={onClickMock} />);
    const buttonElement = screen.getByTestId('button-icon');
    fireEvent.click(buttonElement);
    expect(onClickMock.callCount()).toBe(1);
  });

  test('onClick callback when share button is clicked', () => {
    const onClickMock = createMock();
    render(<MultiFunctionButton icon={Share} onClick={onClickMock} />);
    const buttonElement = screen.getByTestId('button-icon');
    fireEvent.click(buttonElement);
    expect(onClickMock.callCount()).toBe(1);
  });

  test('onClick callback when media button is clicked', () => {
    const onClickMock = createMock();
    render(<MultiFunctionButton icon={Media} onClick={onClickMock} />);
    const buttonElement = screen.getByTestId('button-icon');
    fireEvent.click(buttonElement);
    expect(onClickMock.callCount()).toBe(1);
  });

  test('onClick callback when reference button is clicked', () => {
    const onClickMock = createMock();
    render(<MultiFunctionButton icon={Reference} onClick={onClickMock} />);
    const buttonElement = screen.getByTestId('button-icon');
    fireEvent.click(buttonElement);
    expect(onClickMock.callCount()).toBe(1);
  });
});
