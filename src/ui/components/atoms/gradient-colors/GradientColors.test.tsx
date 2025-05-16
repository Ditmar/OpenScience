import { render, screen } from '@testing-library/react';
import { GradientColors } from './GradientColors';

describe('Gradient Color Component', () => {
  const gradients = [
    { label: 'ads-gradient-lavender-bloom', variant: 'lavender-bloom' },
    { label: 'ads-gradient-coral-peach', variant: 'coral-peach' },
    { label: 'ads-gradient-serene-sky', variant: 'serene-sky' },
    { label: 'ads-gradient-ocean-turquoise', variant: 'ocean-turquoise' },
    { label: 'ads-gradient-sunset-gold', variant: 'sunset-gold' },
    { label: 'ads-gradient-orchid-twilight', variant: 'orchid-twilight' },
    { label: 'ads-gradient-emerald-jade', variant: 'emerald-jade' },
    { label: 'ads-gradient-sapphire-azure', variant: 'sapphire-azure' },
    { label: 'ads-gradient-aqua-amethyst', variant: 'aqua-amethyst' },
    { label: 'ads-gradient-mint-lemonade', variant: 'mint-lemonade' },
    { label: 'ads-gradient-fiery-lavender', variant: 'fiery-lavender' },
    { label: 'ads-gradient-violet-rose', variant: 'violet-rose' },
    { label: 'ads-gradient-pink-blossom', variant: 'pink-blossom' },
    { label: 'ads-gradient-sky-magenta', variant: 'sky-magenta' },
    { label: 'ads-gradient-neon-lime', variant: 'neon-lime' },
  ];

  it('validates that base gradients render correctly with their styles', () => {
    render(<GradientColors gradients={gradients} />);
    gradients.forEach((gradient) => {
      expect(screen.getByText(gradient.label)).toBeInTheDocument();
      const Colors = screen.getByTestId(`box-${gradient.variant}`);
      expect(Colors.className).toContain(`gradient-${gradient.variant}`);
    });
  });
});
