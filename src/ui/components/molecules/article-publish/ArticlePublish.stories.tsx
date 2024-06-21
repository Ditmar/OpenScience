import type { StoryObj, Meta } from '@storybook/react';
import ArticlePublish from './ArticlePublish';
import IconUpload from '../../atoms/icon-upload/IconUpload';
import PublishButton from '../../atoms/publish-button/PublishButton';
import icon_upload_default from '../../../../assets/icons/icon-upload-default.svg?raw';
import icon_upload_primary from '../../../../assets/icons/icon-upload-primary.svg?raw';

const meta: Meta<typeof ArticlePublish> = {
  title: 'ui/components/molecules/article-publish',
  component: ArticlePublish,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <PublishButton variant="primary">PUBLICAR ARTICULO</PublishButton>
        <IconUpload icon={icon_upload_primary} />
      </>
    ),
  },
};

export const Primary: Story = {
  args: {
    children: (
      <>
        <PublishButton variant="secondary">PUBLICAR ARTICULO</PublishButton>
        <IconUpload icon={icon_upload_default} />
      </>
    ),
  },
};

export const Tertiary: Story = {
  args: {
    children: (
      <>
        <PublishButton variant="tertiary">PUBLICAR ARTICULO</PublishButton>
        <IconUpload icon={icon_upload_primary} />
      </>
    ),
  },
};

export const Warning: Story = {
  args: {
    children: (
      <>
        <PublishButton variant="warning">PUBLICAR ARTICULO</PublishButton>
        <IconUpload icon={icon_upload_default} />
      </>
    ),
  },
};

export const Danger: Story = {
  args: {
    children: (
      <>
        <PublishButton variant="danger">PUBLICAR ARTICULO</PublishButton>
        <IconUpload icon={icon_upload_primary} />
      </>
    ),
  },
};
