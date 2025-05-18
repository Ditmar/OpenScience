import type { StoryObj, Meta } from '@storybook/react';
import App from 'style-library/core/ThemeProvider';
import { ModeSwitcher } from 'style-library/core/ThemeSwitcher';
import GhostButton from './ghost-button';

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
        options: ['primary'],
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
    ghostbutton: 'Ghost Button',
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
    disabled: false,
  },
  storyName: 'ui-components-atoms-ghostbutton--primary',
};
export const ReadOnlineDisambleMediumLocked: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
  storyName: 'ui-components-atoms-ghostbutton--primary',
};
export const ReadOnlineDisambleLargeLocked: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'primary',
    size: 'large',
    disabled: false,
  },
  storyName: 'ui-components-atoms-ghostbutton--primary',
};
export const NeutalDarkSmallDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'dark',
    size: 'small',
    disabled: false,
  },
  storyName: 'Dark Small Button',
};

export const NeutalDarkMediumDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'dark',
    size: 'medium',
    disabled: false,
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
export const BrandPrimarySmallDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'intenseviolet',
    size: 'small',
    disabled: false,
  },
  storyName: 'intenseviolet Small Button',
};

export const BrandPrimaryMediumDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'intenseviolet',
    size: 'medium',
    disabled: false,
  },
  storyName: 'intenseviolet Small Button',
};

export const BrandPrimaryLargeDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'intenseviolet',
    size: 'large',
    disabled: false,
  },
  storyName: 'intenseviolet Small Button',
};
export const BrandSecondarySmallDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'violet',
    size: 'small',
    disabled: false,
  },
  storyName: 'violet Small Button',
};

export const BrandSecondaryMediumDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'violet',
    size: 'medium',
    disabled: false,
  },
  storyName: 'violet Small Button',
};

export const BrandSecondaryLargeDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'violet',
    size: 'large',
    disabled: false,
  },
  storyName: 'violet Small Button',
};
export const FeedbackPositiveSmallDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'green',
    size: 'small',
    disabled: false,
  },
  storyName: 'green Small Button',
};

export const FeedbackPositiveMediumDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'green',
    size: 'medium',
    disabled: false,
  },
  storyName: 'green Small Button',
};
export const FeedbackPositiveLargeDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'green',
    size: 'large',
    disabled: false,
  },
  storyName: 'green Small Button',
};

export const FeedbackNegativeSmallDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'red',
    size: 'small',
    disabled: false,
  },
  storyName: 'red Small Button',
};

export const FeedbackNegativeyMediumDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'red',
    size: 'medium',
    disabled: false,
  },
  storyName: 'red Small Button',
};
export const FeedbackNegativeLargeDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'red',
    size: 'large',
    disabled: false,
  },
  storyName: 'red Small Button',
};
export const FeedbackWarningSmallDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'yellow',
    size: 'small',
    disabled: false,
  },
  storyName: 'yellow Small Button',
};

export const FeedbackWarningyMediumDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'yellow',
    size: 'medium',
    disabled: false,
  },
  storyName: 'yellow Small Button',
};
export const FeedbackWarningLargeDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'yellow',
    size: 'large',
    disabled: false,
  },
  storyName: 'yellow Small Button',
};
export const BrandTeritarySmallDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'teritary',
    size: 'small',
    disabled: false,
  },
  storyName: 'teritary Small Button',
};

export const BrandTeritaryyMediumDefaul: Story = {
  args: {
    ghostbutton: 'Button_text',
    variant: 'teritary',
    size: 'medium',
    disabled: false,
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
