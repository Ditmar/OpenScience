import {
  ArrowUpward,
  ArrowDownward,
  Warning,
  CheckCircle,
  Error as ErrorIcon,
} from '@mui/icons-material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const iconMap = {
  close: HighlightOffIcon,
  up: ArrowUpward,
  down: ArrowDownward,
  warning: Warning,
  success: CheckCircle,
  error: ErrorIcon,
};

export type IconName = keyof typeof iconMap;
