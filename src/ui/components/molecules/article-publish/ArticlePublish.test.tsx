import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticlePublish from './ArticlePublish';
import IconUpload from '../../atoms/icon-upload/IconUpload';
import PublishButton from '../../atoms/publish-button/PublishButton';
import icon_upload_default from '../../../../assets/icons/icon-upload-default.svg?raw';

describe('ArticlePublish Component', () => {
  test('should render PublishButton and IconUpload', () => {
    render(
      <ArticlePublish>
        <PublishButton variant="primary">PUBLICAR ARTICULO</PublishButton>
        <IconUpload icon={icon_upload_default} />
      </ArticlePublish>,
    );
    const publishButton = screen.getByText(/PUBLICAR ARTICULO/i);
    const iconUpload = screen.getByTestId('icon-upload__icon');

    expect(publishButton).toBeInTheDocument();
    expect(iconUpload).toBeInTheDocument();
  });
});
