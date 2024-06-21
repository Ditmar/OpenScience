import { render, screen, fireEvent } from '@testing-library/react';
import IconUpload from './IconUpload';
import icon_upload_default from '../../../../assets/icons/icon-upload-default.svg?raw';
import icon_upload_primary from '../../../../assets/icons/icon-upload-primary.svg?raw';

describe('Testing IconUpload Component', () => {
  test('should render IconUpload with default icon', () => {
    render(<IconUpload icon={icon_upload_default} />);
    const iconElement = screen.getByTestId('icon-upload__icon');
    expect(iconElement).toBeInTheDocument();
  });

  test('should render IconUpload with primary icon', () => {
    render(<IconUpload icon={icon_upload_primary} />);
    const iconElement = screen.getByTestId('icon-upload__icon');
    expect(iconElement).toBeInTheDocument();
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

  test('onClick callback when IconUpload default is clicked', () => {
    const onClickMock = createMock();
    render(<IconUpload icon={icon_upload_default} onClick={onClickMock} />);
    const iconElement = screen.getByTestId('icon-upload__icon');
    fireEvent.click(iconElement);
    expect(onClickMock.callCount()).toBe(1);
  });

  test('onClick callback when IconUpload primary is clicked', () => {
    const onClickMock = createMock();
    render(<IconUpload icon={icon_upload_primary} onClick={onClickMock} />);
    const iconElement = screen.getByTestId('icon-upload__icon');
    fireEvent.click(iconElement);
    expect(onClickMock.callCount()).toBe(1);
  });
});
