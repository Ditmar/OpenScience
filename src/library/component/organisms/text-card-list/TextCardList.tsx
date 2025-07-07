import React from 'react';
import Box from '@mui/material/Box';
import TextCard from '../../molecules/text-card/TextCard';
import type { TextCardListProps } from './Types/IProps';

function TextCardList({ items, selectedIds = [], onSelect, columns = 2 }: TextCardListProps) {
  return (
    <Box display="flex" flexWrap="wrap" gap={3}>
      {items.map((item) => {
        const {
          id,
          checkProps,
          badgeProps,
          title,
          titleProps,
          description,
          descriptionProps,
          size,
          rounded,
        } = item;

        const isSelected = selectedIds.includes(id);

        return (
          <Box
            key={id}
            flex={`1 1 ${columns === 2 ? 'calc(50% - 12px)' : '100%'}`}
            minWidth={columns === 2 ? '300px' : '100%'}
          >
            <TextCard
              checkProps={{
                ...checkProps,
                checked: isSelected,
                onChange: () => onSelect?.(id),
                'aria-label': `checkbox-${id}`,
              }}
              badgeProps={badgeProps}
              title={title}
              titleProps={titleProps}
              description={description}
              descriptionProps={descriptionProps}
              size={size}
              rounded={rounded}
            />
          </Box>
        );
      })}
    </Box>
  );
}

export default TextCardList;
