import React, { useState } from 'react';
import DotsNavigation from './DotsNavigation';

export default {
  title: 'Atoms/DotsNavigation',
  component: DotsNavigation,
};

export const Default = () => {
  const [active, setActive] = useState(0);
  return (
    <DotsNavigation count={5} activeIndex={active} onDotClick={setActive} />
  );
};