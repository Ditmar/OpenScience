import { styled } from '@mui/material/styles';
import type { OLItemListProps } from './types/IProps';

export const StyledOLItemList = styled('ol')<Pick<OLItemListProps, 'direction'>>(
  ({ direction }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    flexDirection: direction === 'column' ? 'column' : 'row',
  }),
);
