import { GradientColors } from './GradientColors';

export default {
  title: 'ui/components/atoms/gradient-Colors',
  component: GradientColors,
};

const gradients = [
  { label: 'Lavender Bloom', variant: 'lavender-bloom' },
  { label: 'Coral Peach', variant: 'coral-peach' },
  { label: 'Serene Sky', variant: 'serene-sky' },
  { label: 'Ocean Turquoise', variant: 'ocean-turquoise' },
  { label: 'Sunset Gold', variant: 'sunset-gold' },
  { label: 'Orchid Twilight', variant: 'orchid-twilight' },
  { label: 'Emerald Jade', variant: 'emerald-jade' },
  { label: 'Sapphire Azure', variant: 'sapphire-azure' },
  { label: 'Aqua Amethyst', variant: 'aqua-amethyst' },
  { label: 'Mint Lemonade', variant: 'mint-lemonade' },
  { label: 'Fiery Lavender', variant: 'fiery-lavender' },
  { label: 'Violet Rose', variant: 'violet-rose' },
  { label: 'Pink Blossom', variant: 'pink-blossom' },
  { label: 'Sky Magenta', variant: 'sky-magenta' },
  { label: 'Neon Lime', variant: 'neon-lime' },
];
export function AllGradients() {
  return <GradientColors gradients={gradients} />;
}
