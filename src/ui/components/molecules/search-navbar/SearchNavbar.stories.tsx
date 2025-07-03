import type { Meta, StoryFn } from '@storybook/react';
import type { SearchNavbarProps } from './types/IProps';
import SearchNavbar from './SearchNavbar';
import Rectangle6 from '../../atoms/hero-banner/__mock__/imgs/Rectangle6.png';
import { StorybookBgContainer } from './SearchNavbar.style';

const meta: Meta<typeof SearchNavbar> = {
  title: 'ui/components/molecules/search-navbar',
  component: SearchNavbar,
};
export default meta;

function TemplateWithBg({ placeholder, onSearch, showInputDefault }: SearchNavbarProps) {
  return (
    <StorybookBgContainer
      style={{
        backgroundImage: `url(${typeof Rectangle6 === 'string' ? Rectangle6 : Rectangle6.src})`,
      }}
    >
      <SearchNavbar
        placeholder={placeholder}
        onSearch={onSearch}
        showInputDefault={showInputDefault}
      />
    </StorybookBgContainer>
  );
}

const Template: StoryFn<SearchNavbarProps> = TemplateWithBg;

export const Default = Template.bind({});
Default.args = {
  placeholder: '',
  onSearch: (query: string) => {
    alert(`Buscando: ${query}`);
  },
  showInputDefault: false,
};

export const VisibleInput = Template.bind({});
VisibleInput.args = {
  placeholder: '',
  onSearch: (query: string) => {
    alert(`Buscando: ${query}`);
  },
  showInputDefault: true,
};
