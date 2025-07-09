import type { Meta, StoryObj } from '@storybook/react';
import SocialMenu from './SocialMenu';
import type { ISocialMenuProps } from './types/IProps';

const defaultSocialLinks = [
  {
    id: 'whatsapp',
    type: 'whatsapp' as const,
    url: 'https://wa.me/1234567890',
  },
  {
    id: 'telegram',
    type: 'telegram' as const,
    url: 'https://t.me/username',
  },
  {
    id: 'facebook',
    type: 'facebook' as const,
    url: 'https://facebook.com/page',
  },
];

const meta: Meta<typeof SocialMenu> = {
  title: 'library/component/molecules/social-menu',
  component: SocialMenu,
  argTypes: {
    socialLinks: {
      description: 'Array de enlaces sociales a mostrar',
      control: 'object',
    },
    orientation: {
      description: 'Orientación del menú',
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    backgroundColor: {
      description: 'Color de fondo del contenedor (los iconos adoptarán este color)',
      control: 'color',
    },
    size: {
      description: 'Tamaño de los iconos',
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    onSocialClick: {
      description: 'Callback cuando se hace clic en un enlace social',
      action: 'socialClick',
    },
  },
};

export default meta;
type Story = StoryObj<ISocialMenuProps>;

export const Default: Story = {
  args: {
    socialLinks: defaultSocialLinks,
    orientation: 'vertical',
    backgroundColor: '#0793BF',
    size: 'medium',
    onSocialClick: (socialLink) => {
      console.log('Social click:', socialLink);
    },
  },
};

export const Horizontal: Story = {
  args: {
    ...Default.args,
    orientation: 'horizontal',
  },
  parameters: {
    docs: {
      description: {
        story: 'Menú con orientación horizontal.',
      },
    },
  },
};

export const SmallSize: Story = {
  args: {
    ...Default.args,
    size: 'small',
  },
  parameters: {
    docs: {
      description: {
        story: 'Iconos de tamaño pequeño.',
      },
    },
  },
};

export const MediumSize: Story = {
  args: {
    ...Default.args,
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: 'Iconos de tamaño medio.',
      },
    },
  },
};

export const LargeSize: Story = {
  args: {
    ...Default.args,
    size: 'large',
  },
  parameters: {
    docs: {
      description: {
        story: 'Iconos de tamaño grande.',
      },
    },
  },
};
