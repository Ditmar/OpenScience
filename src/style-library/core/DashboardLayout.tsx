import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import MainContent from './MainContent';

interface NavigationItem {
  kind?: 'header' | 'divider';
  segment?: string;
  title?: string;
  icon?: React.ReactNode;
  children?: NavigationItem[];
}

const NAVIGATION: NavigationItem[] = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <LayersIcon />,
      },
    ],
  },
  {
    segment: 'integrations',
    title: 'Integrations',
    icon: <LayersIcon />,
  },
];

function renderNavigationItem(item: NavigationItem, index: number) {
  if (item.kind === 'header') {
    return (
      <Typography key={`header-${index.toString()}`} variant="subtitle2" sx={{ px: 3, py: 1 }}>
        {item.title}
      </Typography>
    );
  }

  if (item.kind === 'divider') {
    return <Divider key={`divider-${index.toString()}`} sx={{ my: 1 }} />;
  }

  if (item.children) {
    return (
      <React.Fragment key={`group-${item.segment ?? 'unknown'}-${index.toString()}`}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        </ListItem>
        <List component="div" disablePadding sx={{ pl: 4 }}>
          {item.children.map((child, childIndex) => renderNavigationItem(child, childIndex))}
        </List>
      </React.Fragment>
    );
  }

  return (
    <ListItem key={`item-${item.segment ?? 'unknown'}-${index.toString()}`} disablePadding>
      <ListItemButton>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItemButton>
    </ListItem>
  );
}

export default function DashboardLayoutBasic() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <List>{NAVIGATION.map((item, index) => renderNavigationItem(item, index))}</List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
      </Box>
      <MainContent />
    </Box>
  );
}
