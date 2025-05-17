import React from 'react';
import type { FunctionComponent } from 'react';

export type DynamicIcon = FunctionComponent<React.SVGProps<SVGSVGElement>> | null;
