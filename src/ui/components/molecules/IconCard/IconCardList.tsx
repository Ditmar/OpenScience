// src/ui/components/molecules/IconCard/IconCardList.tsx

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import type { ChangeEvent } from 'react';
import type { IconCardItem, IconCardListProps } from './IconCardList.types';

// Implementación temporal de cn
const cn = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(' ');

// Componente Checkbox temporal (sólo para desarrollo)
const Checkbox = ({
  id,
  checked,
  onCheckedChange,
  className,
}: {
  id: string;
  checked?: boolean;
  onCheckedChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}) => (
  <input
    id={id}
    type="checkbox"
    checked={checked}
    onChange={onCheckedChange}
    className={className}
  />
);

// Componente Typography temporal
const Typography = ({
  variant,
  className,
  children,
}: {
  variant: 'h2' | 'h3' | 'h4' | 'body1';
  className?: string;
  children: React.ReactNode;
}) => {
  const Tag = variant === 'h2' ? 'h2' :
              variant === 'h3' ? 'h3' :
              variant === 'h4' ? 'h4' : 'p';
  return <Tag className={className}>{children}</Tag>;
};

interface IconCardProps extends IconCardItem {
  onSelect?: (selected: boolean) => void;
  className?: string;
  id: string | number;
}

const IconCard: React.FC<IconCardProps> = ({
  icon,
  title,
  subtitle,
  description,
  selected = false,
  onSelect,
  className,
  id,
}) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onSelect?.(event.target.checked);
    },
    [onSelect]
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className={cn(
        "group flex items-start gap-4 p-4 rounded-lg transition-all duration-200",
        "border border-gray-200",
        selected
          ? "bg-blue-50/50 border-blue-500 shadow-md"
          : "hover:bg-gray-50/50 hover:border-gray-300",
        className
      )}
      onClick={() => {
        const checkbox = document.querySelector(
          `#icon-card-checkbox-${id}`
        ) as HTMLInputElement;
        if (checkbox) {
          checkbox.checked = !checkbox.checked;
          handleChange({ target: checkbox } as ChangeEvent<HTMLInputElement>);
        }
      }}
      style={{ cursor: 'pointer' }}
    >
      <div className="flex items-center">
        <Checkbox
          id={`icon-card-checkbox-${id}`}
          checked={selected}
          onCheckedChange={handleChange}
          className="mr-2"
        />
      </div>

      {icon && <div className="flex-shrink-0">{icon}</div>}
      <div className="flex-1">
        <Typography variant="h3" className="text-lg font-semibold text-gray-900">
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="h4" className="text-sm text-gray-500">
            {subtitle}
          </Typography>
        )}
        {description && (
          <Typography variant="body1" className="text-sm text-gray-700">
            {description}
          </Typography>
        )}
      </div>
    </motion.div>
  );
};

const IconCardList: React.FC<IconCardListProps> = ({
  title,
  subtitle,
  description,
  items,
  onItemSelect,
  className,
}) => {
  const [selectedItems, setSelectedItems] = useState<{
    [key: string | number]: boolean;
  }>(() => {
    const initialSelection: { [key: string | number]: boolean } = {};
    items.forEach((item) => {
      initialSelection[item.id] = item.selected || false;
    });
    return initialSelection;
  });

  const handleItemSelect = useCallback(
    (id: string | number, selected: boolean) => {
      setSelectedItems((prevSelectedItems) => ({
        ...prevSelectedItems,
        [id]: selected,
      }));
      onItemSelect?.(id, selected);
    },
    [onItemSelect]
  );

  return (
    <div className={cn("space-y-6", className)}>
      {title && (
        <div className="space-y-2">
          <Typography variant="h2" className="text-2xl font-bold text-gray-900">
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="h3" className="text-lg text-gray-500">
              {subtitle}
            </Typography>
          )}
          {description && (
            <Typography variant="body1" className="text-sm text-gray-700">
              {description}
            </Typography>
          )}
        </div>
      )}
      <motion.div
        layout
        className={cn("grid gap-4", "grid-cols-1 sm:grid-cols-2")}
      >
        {items.map((item) => (
          <IconCard
            key={item.id}
            id={item.id}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            selected={selectedItems[item.id] || false}
            onSelect={(isSelected) => handleItemSelect(item.id, isSelected)}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default IconCardList;



