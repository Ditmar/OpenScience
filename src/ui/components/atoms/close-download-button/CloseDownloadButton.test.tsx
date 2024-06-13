import { render, screen, fireEvent } from '@testing-library/react';
import close from '../../../../assets/icons/close.svg?raw';
import close_simple from '../../../../assets/icons/close_simple.svg?raw';
import downloads from '../../../../assets/icons/downloads.svg?raw';
import CloseDownloadButton from './CloseDownloadButton';

describe('Testing Button React Component', () => {
  test('should be rendere close', () => {
    render(<CloseDownloadButton icon={close} />);
    const buttonElement = screen.getByTestId('button-icon');
    expect(buttonElement).toBeInTheDocument();
  });
  test('should be rendere close_simple', () => {
    render(<CloseDownloadButton icon={close_simple} />);
    const buttonElement = screen.getByTestId('button-icon');
    expect(buttonElement).toBeInTheDocument();
  });

  test('should be rendere downloads', () => {
    render(<CloseDownloadButton icon={downloads} />);
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
  test('onClick callback when close button is clicked', () => {
    const onClickMock = createMock();
    render(<CloseDownloadButton icon={close} onClick={onClickMock} />);
    const buttonElement = screen.getByTestId('button-icon');
    fireEvent.click(buttonElement);
    expect(onClickMock.callCount()).toBe(1);
  });

  test('onClick callback when close-simple button is clicked', () => {
    const onClickMock = createMock();
    render(<CloseDownloadButton icon={close_simple} onClick={onClickMock} />);
    const buttonElement = screen.getByTestId('button-icon');
    fireEvent.click(buttonElement);
    expect(onClickMock.callCount()).toBe(1);
  });
  test('onClick callback when downloads button is clicked', () => {
    const onClickMock = createMock();
    render(<CloseDownloadButton icon={downloads} onClick={onClickMock} />);
    const buttonElement = screen.getByTestId('button-icon');
    fireEvent.click(buttonElement);
    expect(onClickMock.callCount()).toBe(1);
  });
});
