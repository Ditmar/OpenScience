import type {  StoryObj , Meta } from '@storybook/react';
import GhostButton from './ghost-button';
import App from 'style-library/core/ThemeProvider';
import { ModeSwitcher } from 'style-library/core/ThemeSwitcher';

const meta: Meta<typeof GhostButton> = {
  title: 'ui/components/atoms/Ghost-Button',
  component: GhostButton,
  argTypes: {
    onClick: {
      action: 'click',
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    disabled: {
      control: 'boolean',
    },
    ghostbutton: {
      control: 'text',
    },
  },
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    ghostbutton: 'Ghost Button'
  },
  decorators: [
    (Story) => (
      <App>
        <ModeSwitcher />
        <div style={{ padding: '20px' }}>
          <Story />
        </div>
      </App>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof GhostButton>;

export const ReadOnlineDisambleSmallLocked: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'primary',
    size: 'small',
    disabled: false
  },
   storyName: 'ui-components-atoms-ghostbutton--primary',
};
export const ReadOnlineDisambleMediumLocked: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'primary',
    size: 'medium',
    disabled: false
  },
   storyName: 'ui-components-atoms-ghostbutton--primary',
};
export const ReadOnlineDisambleLargeLocked: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'primary',
    size: 'large',
    disabled: false
  },
   storyName: 'ui-components-atoms-ghostbutton--primary',
};
export const  NeutalDarkSmallDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'dark',
    size: 'small',
    disabled: false
  },
    storyName: 'Dark Small Button',
};

export const  NeutalDarkMediumDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'dark',
    size: 'medium',
    disabled: false
  },
   storyName: 'Dark Small Button',
};

export const NeutalDarkLargeDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'dark',
    size: 'large',
    disabled: false,
  },
    storyName: 'Dark Small Button',
};
export const  BrandPrimarySmallDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'violetaintenso',
    size: 'small',
    disabled: false
  },
    storyName: 'violetaintenso Small Button',
};

export const  BrandPrimaryMediumDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'violetaintenso',
    size: 'medium',
    disabled: false
  },
   storyName: 'violetaintenso Small Button',
};

export const BrandPrimaryLargeDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'violetaintenso',
    size: 'large',
    disabled: false,
  },
    storyName: 'violetaintenso Small Button',
};
export const  BrandSecondarySmallDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'violeta',
    size: 'small',
    disabled: false
  },
    storyName: 'violeta Small Button',
};

export const  BrandSecondaryMediumDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'violeta',
    size: 'medium',
    disabled: false
  },
   storyName: 'violeta Small Button',
};

export const BrandSecondaryLargeDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'violeta',
    size: 'large',
    disabled: false,
  },
    storyName: 'violeta Small Button',
};
export const  FeedbackPositiveSmallDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'verde',
    size: 'small',
    disabled: false
  },
    storyName: 'verde Small Button',
};

export const  FeedbackPositiveMediumDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'verde',
    size: 'medium',
    disabled: false
  },
   storyName: 'verde Small Button',
};
export const FeedbackPositiveLargeDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'verde',
    size: 'large',
    disabled: false,
  },
    storyName: 'verde Small Button',
};

export const  FeedbackNegativeSmallDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'rojo',
    size: 'small',
    disabled: false
  },
    storyName: 'rojo Small Button',
};

export const  FeedbackNegativeyMediumDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'rojo',
    size: 'medium',
    disabled: false
  },
   storyName: 'rojo Small Button',
};
export const FeedbackNegativeLargeDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'rojo',
    size: 'large',
    disabled: false,
  },
    storyName: 'rojo Small Button',
};export const  FeedbackWarningSmallDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'amarillo',
    size: 'small',
    disabled: false
  },
    storyName: 'amarillo Small Button',
};

export const  FeedbackWarningyMediumDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'amarillo',
    size: 'medium',
    disabled: false
  },
   storyName: 'amarillo Small Button',
};
export const FeedbackWarningLargeDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'amarillo',
    size: 'large',
    disabled: false,
  },
    storyName: 'amarillo   Small Button',
};export const  BrandTeritarySmallDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'teritary',
    size: 'small',
    disabled: false
  },
    storyName: 'teritary Small Button',
};

export const  BrandTeritaryyMediumDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'teritary',
    size: 'medium',
    disabled: false
  },
   storyName: 'teritary Small Button',
};
export const BrandTeritaryLargeDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'teritary',
    size: 'large',
    disabled: false,
  },
    storyName: 'teritary Small Button',
};

export const Disabled: Story = {
  args: {
    ghostbutton: 'Disabled_Button',
    variant: 'primary',
    size: 'medium',
    disabled: true,
  },
  storyName: 'ui-components-atoms-ghostbutton--disabled',
};